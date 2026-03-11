// 1. Define your data
const ingredients = [
  { name: "Flour", cost: 2.50 },
  { name: "Sugar", cost: 1.20 },
  { name: "Butter", cost: 4.00 }
];

// 2. The calculation function
function calculateSalePrice(items, margin) {
  // Calculate total cost using the .reduce() method
  const totalCost = items.reduce((sum, item) => sum + item.cost, 0);
  
  // Add the profit margin (e.g., 20% margin = 1.20)
  const finalPrice = totalCost * (1 + margin);
  
  return finalPrice.toFixed(2); // Rounds to 2 decimal places
}

// 3. Run it and "vibe" the result
const myPrice = calculateSalePrice(ingredients, 0.30); // 30% profit
console.log(`To make a 30% profit, sell for: $${myPrice}`);
