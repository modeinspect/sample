// Mock data for the price history component
export type PriceDataPoint = {
  date: string; // ISO date string
  price: number;
  isLowestPrice?: boolean;
};

export type PriceHistoryData = {
  currency: string;
  currentPrice: number;
  averagePrice: number;
  lowestPrice: number;
  highestPrice: number;
  recommendation: "buy" | "wait" | "neutral";
  priceChangePercentage: number; // negative means price dropped
  history: PriceDataPoint[];
};

// Generate mock data for the last 30 days
const generateMockData = (): PriceHistoryData => {
  const today = new Date();
  const history: PriceDataPoint[] = [];
  let lowestPrice = Infinity;
  let highestPrice = 0;
  let lowestPriceIndex = 0;
  
  // Generate price points for the last 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Base price with some randomness
    const basePrice = 350;
    const randomFactor = Math.sin(i / 5) * 50 + Math.random() * 30 - 15;
    const price = Math.round(basePrice + randomFactor);
    
    history.push({
      date: date.toISOString().split('T')[0],
      price
    });
    
    if (price < lowestPrice) {
      lowestPrice = price;
      lowestPriceIndex = history.length - 1;
    }
    
    if (price > highestPrice) {
      highestPrice = price;
    }
  }
  
  // Mark the lowest price
  history[lowestPriceIndex].isLowestPrice = true;
  
  const currentPrice = history[history.length - 1].price;
  const sum = history.reduce((acc, item) => acc + item.price, 0);
  const averagePrice = Math.round(sum / history.length);
  
  // Determine recommendation based on current price vs average
  let recommendation: "buy" | "wait" | "neutral" = "neutral";
  if (currentPrice < averagePrice * 0.95) {
    recommendation = "buy";
  } else if (currentPrice > averagePrice * 1.05) {
    recommendation = "wait";
  }
  
  const priceChangePercentage = Math.round(((currentPrice - history[0].price) / history[0].price) * 100);
  
  return {
    currency: "USD",
    currentPrice,
    averagePrice,
    lowestPrice,
    highestPrice,
    recommendation,
    priceChangePercentage,
    history
  };
};

export const mockPriceData = generateMockData();