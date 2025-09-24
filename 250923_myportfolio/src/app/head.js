// src/app/head.js
export const metadata = {
  title: "나의 포트폴리오",
  description: "개발자 창업 교육생의 포트폴리오 사이트입니다.",
  keywords: ["포트폴리오", "Next.js", "React", "투자", "블로그"],
  authors: [{ name: "당신의 이름", url: "https://yourdomain.com" }],
  openGraph: {
    title: "나의 포트폴리오",
    description: "개발자 창업 교육생의 포트폴리오 사이트입니다.",
    url: "https://yourdomain.com",
    siteName: "나의 포트폴리오",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "포트폴리오 대표 이미지",
      },
    ],
    locale: "ko-KR",
    type: "website",
  },
};
