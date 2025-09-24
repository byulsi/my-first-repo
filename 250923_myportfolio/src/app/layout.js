// src/app/layout.js
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "나의 포트폴리오",
  description: "개발자 창업 교육생의 포트폴리오 사이트입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white border-b shadow-sm">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
            >
              Snooze
            </Link>
            <div className="flex space-x-12">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                홈
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-green-600 transition"
              >
                프로젝트
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                블로그
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                연락하기
              </Link>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-white border-t mt-16 py-4">
          <div className="container mx-auto text-center text-sm text-gray-500">
            © 2025 Snooze. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
