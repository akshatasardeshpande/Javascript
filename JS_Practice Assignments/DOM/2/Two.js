const r = document.querySelectorAll('.as-imagegrid-wrapper a[data-analytics-link-component_name] > span[aria-label]')
const rArray = Array.from(r);
const productList = rArray.map(item => item.childNodes[0].textContent);