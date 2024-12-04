import { ReactNode } from "react";

function CoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6 w-full h-full"></div>
  );
}

export default CoreLayout;
