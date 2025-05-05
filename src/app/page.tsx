"use client";

import { useState } from "react";
import { Seat } from "@/components/ui/seat";

export default function Home() {
  // State for controlling seat properties
  const [seatType, setSeatType] = useState<"window" | "middle" | "aisle">("window");
  const [seatSize, setSeatSize] = useState<"default" | "sm" | "lg">("default");
  const [showAllTypes, setShowAllTypes] = useState(true);
  const [showAllSizes, setShowAllSizes] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Kiwi.com Seat Selection</h1>
      
      {/* Toggle controls */}
      <div className="w-full max-w-3xl mb-8 p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Toggle Controls</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seat Type Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Seat Type:</h3>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={showAllTypes}
                  onChange={() => setShowAllTypes(!showAllTypes)}
                  className="rounded text-blue-600"
                />
                <span className="ml-2 text-sm">Show All Types</span>
              </label>
            </div>
            
            {!showAllTypes && (
              <div className="flex space-x-4">
                {["window", "middle", "aisle"].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="seatType"
                      value={type}
                      checked={seatType === type}
                      onChange={() => setSeatType(type as any)}
                      className="text-blue-600"
                    />
                    <span className="ml-2 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          
          {/* Seat Size Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Seat Size:</h3>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={showAllSizes}
                  onChange={() => setShowAllSizes(!showAllSizes)}
                  className="rounded text-blue-600"
                />
                <span className="ml-2 text-sm">Show All Sizes</span>
              </label>
            </div>
            
            {!showAllSizes && (
              <div className="flex space-x-4">
                {[
                  { value: "default", label: "Default" },
                  { value: "sm", label: "Small" },
                  { value: "lg", label: "Large" }
                ].map((size) => (
                  <label key={size.value} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="seatSize"
                      value={size.value}
                      checked={seatSize === size.value}
                      onChange={() => setSeatSize(size.value as any)}
                      className="text-blue-600"
                    />
                    <span className="ml-2">{size.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Display seats based on toggle state */}
      {showAllTypes ? (
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Seat 
              title="12A" 
              seatType="window" 
              size={showAllSizes ? "default" : seatSize} 
            />
            <p className="mt-2 text-sm text-gray-600">Window Seat</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Seat 
              title="24B" 
              seatType="middle" 
              size={showAllSizes ? "default" : seatSize} 
            />
            <p className="mt-2 text-sm text-gray-600">Middle Seat</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Seat 
              title="18C" 
              seatType="aisle" 
              size={showAllSizes ? "default" : seatSize} 
            />
            <p className="mt-2 text-sm text-gray-600">Aisle Seat</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mb-8">
          <Seat 
            title={`Seat ${seatType.charAt(0).toUpperCase()}1`} 
            seatType={seatType} 
            size={showAllSizes ? "default" : seatSize} 
          />
          <p className="mt-2 text-sm text-gray-600 capitalize">{seatType} Seat</p>
        </div>
      )}
      
      {/* Size variations */}
      {showAllSizes ? (
        <div className="w-full max-w-3xl">
          <h2 className="text-lg font-semibold mb-4">Size Variations</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Seat 
                title="S1" 
                seatType={showAllTypes ? "window" : seatType} 
                size="sm" 
              />
              <p className="mt-2 text-sm text-gray-600">Small</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Seat 
                title="M1" 
                seatType={showAllTypes ? "middle" : seatType} 
                size="default" 
              />
              <p className="mt-2 text-sm text-gray-600">Default</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Seat 
                title="L1" 
                seatType={showAllTypes ? "aisle" : seatType} 
                size="lg" 
              />
              <p className="mt-2 text-sm text-gray-600">Large</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Seat 
            title={`Size ${seatSize}`} 
            seatType={showAllTypes ? "window" : seatType} 
            size={seatSize} 
          />
          <p className="mt-2 text-sm text-gray-600">
            {seatSize === "default" ? "Default" : seatSize === "sm" ? "Small" : "Large"} Size
          </p>
        </div>
      )}
    </div>
  );
}
