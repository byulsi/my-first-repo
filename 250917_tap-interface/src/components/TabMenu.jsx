import React from "react";
import clsx from "clsx";

export default function TabMenu({ tabs, activeTab, onTabClick }) {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          className={clsx(
            "flex-1 py-2 text-center font-medium",
            activeTab === tab.id
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
