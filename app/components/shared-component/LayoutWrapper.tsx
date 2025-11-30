import type { ReactNode } from "react";
import type { HeaderProps } from "./Header";
import Header from "./Header";
import { cn } from "~/lib/utils";
import Tab from "./Tab";

function LayoutWrapper({
  children,
  showHeader = true,
  showTab = true,
  headerConfigs,
}: {
  children: ReactNode;
  showHeader?: boolean;
  showTab?: boolean;
  headerConfigs?: HeaderProps;
}) {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      {showHeader && headerConfigs && (
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <Header
            title={headerConfigs.title}
            iconName={headerConfigs.iconName}
            href={headerConfigs.href}
          >
            {headerConfigs.children}
          </Header>
        </div>
      )}

      {/* Scrollable Content */}
      <div className={cn("flex-1 overflow-y-auto", showTab && "pb-[65px]")}>
        {children}
      </div>

      {/* Bottom Tab Bar */}
      {showTab && (
        <div className="fixed bottom-0 left-0 w-full z-20">
          <Tab />
        </div>
      )}
    </div>
  );
}

export default LayoutWrapper;
