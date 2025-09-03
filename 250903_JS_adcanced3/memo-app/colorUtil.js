// colorUtil.js
import randomColor from 'randomcolor';

// 랜덤 색상 생성 함수들
export function getRandomLightColor() {
    return randomColor({ luminosity: 'light' });
}

export function getRandomDarkColor() {
    return randomColor({ luminosity: 'dark' });
}

export function getRandomColorSet(count = 5) {
    return randomColor({ count: count });
}

// 테스트
console.log(randomColor({ luminosity: 'light'}));
