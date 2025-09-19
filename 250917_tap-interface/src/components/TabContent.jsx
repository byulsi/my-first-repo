import React from "react";

export default function TabContent({ tabs, activeTab }) {
  const active = tabs.find((tab) => tab.id === activeTab);
  if (!active) return null;

  return <div className="p-4">{active.content}</div>;
}
