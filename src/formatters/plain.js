const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (value === null || typeof value === 'boolean') {
    return String(value);
  }
  return typeof value === 'string' ? `'${value}'` : String(value);
};

export default (diff) => {
  const iter = (nodes, path = []) => {
    return nodes.flatMap((node) => {
      const currentPath = [...path, node.key];
      const property = currentPath.join('.');

      switch (node.type) {
        case 'added':
          return `Property '${property}' was added with value: ${stringify(node.value)}`;
        case 'removed':
          return `Property '${property}' was removed`;
        case 'changed':
          return `Property '${property}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
        case 'nested':
          return iter(node.children, currentPath);
        case 'unchanged':
          return [];
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    }).join('\n');
  };

  return iter(diff);
};