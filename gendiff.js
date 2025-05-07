import _ from 'lodash';
   const genDiff = (data1, data2) => {
     const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
     const result = keys.map((key) => {
       if (!_.has(data1, key)) {
         return `  + ${key}: ${data2[key]}`;
       }
       if (!_.has(data2, key)) {
         return `  - ${key}: ${data1[key]}`;
       }
       if (data1[key] !== data2[key]) {
         return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
       }
       return `    ${key}: ${data1[key]}`;
     });
     return `{\n${result.join('\n')}\n}`;
   };
   export default genDiff;