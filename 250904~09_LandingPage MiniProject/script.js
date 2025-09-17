// scripts.js
// 탭 전환 기능
document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.tabs button.active').classList.remove('active');
    btn.classList.add('active');
    // 탭 콘텐츠 표시 로직 추가
  });
});

// 스크롤 애니메이션, 슬라이더 초기화 등 추가
