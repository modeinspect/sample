import React, { useState } from 'react';
import { mockPriceData, PriceHistoryData, PriceDataPoint } from './mockPriceData';

const PriceHistoryWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const data = mockPriceData;

  return (
    <div className="font-sans max-w-md mx-auto">
      {isExpanded ? (
        <ExpandedView 
          data={data} 
          onCollapse={() => setIsExpanded(false)} 
        />
      ) : (
        <CollapsedView 
          data={data} 
          onExpand={() => setIsExpanded(true)} 
        />
      )}
    </div>
  );
};

interface ViewProps {
  data: PriceHistoryData;
  onExpand?: () => void;
  onCollapse?: () => void;
}

const CollapsedView: React.FC<ViewProps> = ({ data, onExpand }) => {
  const { 
    currentPrice, 
    currency, 
    recommendation, 
    priceChangePercentage 
  } = data;

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
      onClick={onExpand}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">Price History</h3>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onExpand?.();
          }}
          className="text-blue-500 hover:text-blue-700"
          aria-label="Expand price history"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex items-center mb-3">
        <div className="text-2xl font-bold text-gray-900">{currency} {currentPrice}</div>
        <div className={`ml-2 px-2 py-1 rounded-full text-sm font-medium ${
          priceChangePercentage < 0 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {priceChangePercentage >= 0 ? '+' : ''}{priceChangePercentage}%
        </div>
      </div>

      <div className={`text-sm font-medium ${
        recommendation === 'buy' 
          ? 'text-green-600' 
          : recommendation === 'wait' 
            ? 'text-red-600' 
            : 'text-gray-600'
      }`}>
        {recommendation === 'buy' && (
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Good time to buy! Prices are below average.
          </div>
        )}
        {recommendation === 'wait' && (
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            Consider waiting. Prices are higher than usual.
          </div>
        )}
        {recommendation === 'neutral' && (
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Prices are around average for this route.
          </div>
        )}
      </div>
    </div>
  );
};

const ExpandedView: React.FC<ViewProps> = ({ data, onCollapse }) => {
  const { 
    currentPrice, 
    currency, 
    averagePrice, 
    lowestPrice, 
    highestPrice, 
    recommendation, 
    history 
  } = data;

  // Find the highest price in the dataset for graph scaling
  const maxPrice = Math.max(...history.map(item => item.price));
  const minPrice = Math.min(...history.map(item => item.price));
  const priceRange = maxPrice - minPrice;
  const buffer = priceRange * 0.1; // 10% buffer
  
  // Graph height and scaling
  const graphHeight = 150;
  const getY = (price: number) => {
    return graphHeight - ((price - (minPrice - buffer)) / ((maxPrice + buffer) - (minPrice - buffer))) * graphHeight;
  };

  // Generate path for the graph
  const graphWidth = 300;
  const pointSpacing = graphWidth / (history.length - 1);
  
  let pathData = `M 0,${getY(history[0].price)}`;
  history.forEach((point, index) => {
    if (index > 0) {
      pathData += ` L ${index * pointSpacing},${getY(point.price)}`;
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Price History</h3>
        <button 
          onClick={onCollapse}
          className="text-blue-500 hover:text-blue-700"
          aria-label="Collapse price history"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex justify-between mb-2">
        <div className="text-sm text-gray-500">Last 30 days</div>
        <div className="text-sm font-medium text-gray-800">Current: {currency} {currentPrice}</div>
      </div>

      {/* Graph */}
      <div className="relative h-40 mb-6">
        <svg 
          viewBox={`0 0 ${graphWidth} ${graphHeight}`} 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Price line */}
          <path
            d={pathData}
            fill="none"
            stroke="#4F46E5"
            strokeWidth="2"
            className="transition-all duration-700 ease-in-out"
          />
          
          {/* Average price line */}
          <line
            x1="0"
            y1={getY(averagePrice)}
            x2={graphWidth}
            y2={getY(averagePrice)}
            stroke="#9CA3AF"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          
          {/* Data points */}
          {history.map((point, index) => (
            <React.Fragment key={index}>
              <circle
                cx={index * pointSpacing}
                cy={getY(point.price)}
                r={point.isLowestPrice ? "4" : "2"}
                fill={point.isLowestPrice ? "#10B981" : "#4F46E5"}
                className={point.isLowestPrice ? "animate-pulse" : ""}
              />
              
              {/* Label for lowest price */}
              {point.isLowestPrice && (
                <>
                  <text
                    x={index * pointSpacing}
                    y={getY(point.price) - 10}
                    fontSize="10"
                    textAnchor="middle"
                    fill="#10B981"
                    fontWeight="bold"
                  >
                    Lowest
                  </text>
                </>
              )}
            </React.Fragment>
          ))}
        </svg>
        
        {/* Y-axis labels */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <div>{Math.round(maxPrice + buffer)}</div>
          <div>{Math.round(minPrice - buffer)}</div>
        </div>
      </div>

      {/* Price stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Lowest</div>
          <div className="font-semibold text-green-600">{currency} {lowestPrice}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Average</div>
          <div className="font-semibold text-gray-600">{currency} {averagePrice}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Highest</div>
          <div className="font-semibold text-red-600">{currency} {highestPrice}</div>
        </div>
      </div>

      {/* Recommendation */}
      <div className={`p-3 rounded-lg ${
        recommendation === 'buy' 
          ? 'bg-green-50 border border-green-200' 
          : recommendation === 'wait' 
            ? 'bg-red-50 border border-red-200' 
            : 'bg-gray-50 border border-gray-200'
      }`}>
        <div className={`text-sm font-medium ${
          recommendation === 'buy' 
            ? 'text-green-600' 
            : recommendation === 'wait' 
              ? 'text-red-600' 
              : 'text-gray-600'
        }`}>
          {recommendation === 'buy' && (
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-bold">Good time to buy!</p>
                <p>Current prices are {Math.round((averagePrice - currentPrice) / averagePrice * 100)}% below the average for this route.</p>
              </div>
            </div>
          )}
          {recommendation === 'wait' && (
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-bold">Consider waiting for prices to drop</p>
                <p>Current prices are {Math.round((currentPrice - averagePrice) / averagePrice * 100)}% above the average for this route.</p>
              </div>
            </div>
          )}
          {recommendation === 'neutral' && (
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-bold">Prices are stable</p>
                <p>Current prices are close to the average for this route.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceHistoryWidget;