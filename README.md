# Flight Price History Component

This is a prototype of a price history feature for a flight search website. The component displays price trends and recommendations at a glance, with the ability to expand into a full interactive graph view.

## Features

- Compact view showing current price, price trend, and quick recommendation
- Expandable detailed view with price history graph
- Visual indicators for price changes (up/down)
- Recommendations based on price analysis
- Responsive design using Tailwind CSS

## How to Use

Import the component in your Next.js/React application:

```jsx
import PriceHistoryWidget from './components/PriceHistoryWidget';

// Then use it in your component
function FlightDetails() {
  return (
    <div>
      <h2>Flight Details</h2>
      <PriceHistoryWidget />
    </div>
  );
}
```

## Data Structure

The component expects price history data in the following format:

```typescript
type PriceHistoryData = {
  currency: string;
  currentPrice: number;
  averagePrice: number;
  lowestPrice: number;
  highestPrice: number;
  recommendation: "buy" | "wait" | "neutral";
  priceChangePercentage: number;
  history: PriceDataPoint[];
};

type PriceDataPoint = {
  date: string; // ISO date string
  price: number;
  isLowestPrice?: boolean;
};
```

For this prototype, mock data is generated internally. In a real application, you would connect this to your actual price history API.