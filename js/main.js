// Strict mode 설정
'use strict';

const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

// 영화 제목 더 보기 버튼 클릭 시
moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

const subscribeBtn = document.getElementById('subscribe');
const alarmBtn = document.getElementById('alarm');

// 구독 버튼 클릭 시
subscribeBtn.addEventListener('click', () => {
  subscribeBtn.classList.toggle('clicked');
  alarmBtn.classList.toggle('hidden');

  const isClicked = subscribeBtn.classList.contains('clicked');

  if (isClicked) {
    subscribeBtn.innerText = '구독중';
  } else {
    subscribeBtn.innerText = '구독';
  }
});
