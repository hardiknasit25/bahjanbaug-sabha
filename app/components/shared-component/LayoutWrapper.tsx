import type { ReactNode } from "react";
import Tab from "./Tab";

function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen flex flex-col justify-between">
      {/* Page Content */}
      <div className="flex-1 pb-[65px]">{children}</div>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 w-full">
        <Tab />
      </div>
    </div>
  );
}

export default LayoutWrapper;
