"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Brand {
  name: string;
  logo?: string;
}

interface BrandsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  brands: Brand[];
}

export const BrandsGrid = React.forwardRef<HTMLDivElement, BrandsGridProps>(
  ({ 
    className,
    title = "Trusted and loved by fast-growing companies worldwide",
    brands,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("py-24 bg-blue-100", className)}
        {...props}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          {title && (
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-16 tracking-tight text-center">
              {title}
            </h2>
          )}

          <div className="max-w-6xl mx-auto grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

BrandsGrid.displayName = "BrandsGrid";