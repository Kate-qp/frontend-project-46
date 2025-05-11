const stringify = (value, depth = 1) => {
  if (typeof value !== 'object' || value === null) {
    return value === undefined ? '' : String(value);
  }

  const indent = ' '.repeat(depth * 4);
  const lines = Object.entries(value)
    .map(([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`);

  return ['{', ...lines, `${' '.repeat((depth - 1) * 4)}}`].join('\n');
};

export default (diff) => {
  const iter = (nodes, depth = 1) => {
    const indent = ' '.repeat(depth * 4 - 2);
    const lines = nodes.map((node) => {
      switch (node.type) {
        case 'added':
          return `${indent}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'removed':
          return `${indent}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'unchanged':
          return `${indent}  ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'changed':
          return [
            `${indent}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
            `${indent}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`
          ].join('\n');
        case 'nested':
          return `${indent}  ${node.key}: ${iter(node.children, depth + 1)}`;
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    });

    return ['{', ...lines, `${' '.repeat(depth * 4 - 4)}}`].join('\n');
  };

  return iter(diff);
};