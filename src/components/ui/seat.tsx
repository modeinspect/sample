import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const seatVariants = cva(
  "inline-flex flex-col items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative overflow-hidden",
  {
    variants: {
      variant: {
        window: "bg-blue-50 border-blue-200 hover:bg-blue-100",
        aisle: "bg-green-50 border-green-200 hover:bg-green-100",
        middle: "bg-gray-50 border-gray-200 hover:bg-gray-100",
      },
      size: {
        default: "h-16 w-12",
        sm: "h-12 w-9",
        lg: "h-20 w-16",
      },
    },
    defaultVariants: {
      variant: "middle",
      size: "default",
    },
  }
)

export interface SeatProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof seatVariants> {
  title?: string
  seatType?: "window" | "aisle" | "middle"
}

const Seat = React.forwardRef<HTMLDivElement, SeatProps>(
  ({ className, variant, size, title, seatType, ...props }, ref) => {
    // Use the seatType to determine the variant if provided
    const seatVariant = seatType || variant

    return (
      <div
        className={cn(seatVariants({ variant: seatVariant, size }), className)}
        ref={ref}
        {...props}
      >
        {/* Seat title (e.g., 24B) */}
        <div className="font-bold text-center">{title}</div>
        
        {/* Seat type label */}
        <div className="text-xs text-center mt-1 opacity-70 capitalize">
          {seatType || variant}
        </div>
        
        {/* Seat icon visual */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full p-2"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="4" y1="10" x2="20" y2="10" />
          </svg>
        </div>
      </div>
    )
  }
)

Seat.displayName = "Seat"

export { Seat, seatVariants }