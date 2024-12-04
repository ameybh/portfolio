"use client";
import { LoadingSpinner } from "@/components/loading-spinner";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Application } from "@splinetool/runtime";

import React, { Suspense, useRef } from "react";

function SplineLoginPage() {
  const spline = useRef<Application | null>(null);

  function onLoad(splineApp: Application) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Suspense
        fallback={
          <div className="absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-foreground">
            <LoadingSpinner size={48} />
          </div>
        }
      >
        <Spline
          className="w-full h-full"
          onLoad={onLoad}
          scene="https://prod.spline.design/Lnwu4vs6U0eV9slD/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}

export default SplineLoginPage;
