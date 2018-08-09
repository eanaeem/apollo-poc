
export const propEq = prop => val => obj => obj[prop] === val;
export const invertPropEq = prop => val => obj => obj[prop] !== val;
export const isSelected = obj => obj.selected;
export const pluck = prop => obj => obj[prop];
export function plucks(keys) {
   return function (obj) {
      const res = {};
      keys.forEach(k => {
         res[k] = obj[k];
      });
      return res;
   };
}
