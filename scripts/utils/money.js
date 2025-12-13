export function formatCurrency(priceCents){
 return (priceCents / 100).toFixed(2); 
}

export default formatCurrency; // each file can have only one default export