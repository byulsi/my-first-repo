import React, { useState } from "react";
import TabMenu from "../components/TabMenu";
import TabContent from "../components/TabContent";

const tabs = [
  { id: "home", label: "홈", content: <p>홈 콘텐츠입니다.</p> },
  { id: "about", label: "소개", content: <p>소개 콘텐츠입니다.</p> },
  { id: "contact", label: "연락", content: <p>연락처 콘텐츠입니다.</p> },
];

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <TabMenu tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      <TabContent tabs={tabs} activeTab={activeTab} />
    </div>
  );
}
