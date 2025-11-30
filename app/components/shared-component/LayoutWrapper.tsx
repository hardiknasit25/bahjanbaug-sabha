import type { ReactNode } from "react";
import Tab from "./Tab";
import { cn } from "~/lib/utils";
import type { HeaderProps } from "./Header";
import Header from "./Header";

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
    <div className="relative h-screen flex flex-col justify-between">
      {showHeader && headerConfigs && (
        <Header
          title={headerConfigs.title}
          iconName={headerConfigs.iconName}
          href={headerConfigs.href}
        >
          {headerConfigs.children}
        </Header>
      )}

      {/* Page Content */}
      <div className={cn("flex-1", showTab && "pb-[65px]")}>{children}</div>

      {/* Bottom Tab Bar */}
      {showTab && (
        <div className="fixed bottom-0 left-0 w-full">
          <Tab />
        </div>
      )}
    </div>
  );
}

export default LayoutWrapper;
