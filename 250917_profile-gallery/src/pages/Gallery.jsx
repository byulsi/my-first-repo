// src/pages/Gallery.jsx
import React from "react";
import ProfileCard from "../components/ProfileCard";

// 샘플 프로필 데이터
const profileData = [
  {
    id: 1,
    name: "김민수",
    role: "프론트엔드 개발자",
    bio: "React와 TypeScript를 사용해 사용자 친화적인 웹 애플리케이션을 만듭니다.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    name: "이지은",
    role: "UX/UI 디자이너",
    bio: "사용자 중심의 디자인으로 직관적이고 아름다운 인터페이스를 설계합니다.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=200&h=200&fit=crop&crop=face",
    tags: ["Figma", "Prototyping", "Design System"],
  },
  {
    id: 3,
    name: "박준호",
    role: "백엔드 개발자",
    bio: "확장 가능한 서버 아키텍처와 API 설계를 전문으로 합니다.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    tags: ["Node.js", "Python", "AWS"],
  },
  {
    id: 4,
    name: "최서영",
    role: "데이터 사이언티스트",
    bio: "머신러닝과 데이터 분석을 통해 비즈니스 인사이트를 제공합니다.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    tags: ["Python", "ML", "Data Analysis"],
  },
  {
    id: 5,
    name: "정대현",
    role: "풀스택 개발자",
    bio: "프론트엔드부터 백엔드까지 전체 웹 애플리케이션 개발을 담당합니다.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    name: "한소희",
    role: "모바일 개발자",
    bio: "iOS와 Android 앱 개발로 모바일 사용자 경험을 개선합니다.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    tags: ["React Native", "Swift", "Kotlin"],
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* 헤더 영역 */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          팀 소개
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          우리 팀의 멋진 멤버들을 만나보세요. 각자의 전문 분야에서 뛰어난 역량을
          발휘하고 있습니다.
        </p>
      </div>

      {/* 프로필 카드 그리드 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}
