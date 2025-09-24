// src/app/page.js
export default function Home() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          안녕하세요! 👋
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          개발자를 꿈꾸는 창업 교육생입니다
        </p>
        <p className="text-lg text-gray-600">
          주식 투자와 글쓰기를 통한 수익 창출을 목표로 하고 있습니다
        </p>
      </div>

      {/* 간단한 소개 섹션 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">💻 개발</h3>
          <p className="text-gray-700 leading-relaxed">
            Next.js와 React 기반의 인터랙티브 웹 개발을 학습 중입니다.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-green-700">
            📈 투자
          </h3>
          <p className="text-gray-700 leading-relaxed">
            국내 주식 시장 분석과 포트폴리오 전략 수립에 열정을 가지고 있습니다.
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-purple-700">
            ✍️ 글쓰기
          </h3>
          <p className="text-gray-700 leading-relaxed">
            투자 인사이트와 개발 학습 과정을 공유하는 블로그를 운영 중입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
