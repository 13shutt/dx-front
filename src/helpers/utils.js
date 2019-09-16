export const toPercent = (x) => {
  if (typeof x === 'undefined' || x === null) return 'N/A'
  
  return `${(x * 100).toFixed(2)}%`
}
