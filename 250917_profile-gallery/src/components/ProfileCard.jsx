// src/components/ProfileCard.jsx
import React from "react";

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* 프로필 이미지 영역 */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 프로필 정보 영역 */}
      <div className="p-4">
        {/* 이름 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {profile.name}
        </h3>

        {/* 직업/역할 */}
        <p className="text-sm text-primary font-medium mb-2">{profile.role}</p>

        {/* 소개글 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {profile.bio}
        </p>

        {/* 태그들 */}
        <div className="flex flex-wrap gap-2">
          {profile.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
