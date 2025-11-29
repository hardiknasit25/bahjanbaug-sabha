import { Component } from "react";
import { Link, useLocation } from "react-router";
import { tabsConfig } from "~/config/tabs.config";
import type { TabItem } from "~/types/tab.interface";

class Tab extends Component {
  render() {
    return <TabRenderer />;
  }
}

function TabRenderer() {
  const location = useLocation();

  return (
    <div className="h-16 w-full flex justify-around items-center bg-primaryColor shadow-lg">
      {tabsConfig
        .filter((tab: TabItem) => tab.show !== false)
        .map((tab: TabItem) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex flex-col items-center gap-1 ${
                isActive ? "text-selectionColor" : "text-white"
              }`}
            >
              <Icon size={22} strokeWidth={2} />
              <span className="text-[9px] uppercase">{tab.label}</span>
            </Link>
          );
        })}
    </div>
  );
}

export default Tab;
