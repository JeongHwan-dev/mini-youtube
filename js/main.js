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
const alarmBtns = document.getElementsByClassName('alarm-btns')[0];
const alarmOnBtn = document.getElementById('alarm-on');
const alarmOffBtn = document.getElementById('alarm-off');

// 구독 버튼 클릭 시
subscribeBtn.addEventListener('click', () => {
  subscribeBtn.classList.toggle('clicked');
  alarmBtns.classList.toggle('hidden');
  alarmOnBtn.classList.toggle('hidden');
  alarmOffBtn.classList.toggle('hidden');

  const isClicked = subscribeBtn.classList.contains('clicked');

  if (isClicked) {
    subscribeBtn.innerText = '구독중';
  } else {
    subscribeBtn.innerText = '구독';
  }
});

alarmOnBtn.addEventListener('click', () => {
  alarmOnBtn.classList.toggle('hidden');
  alarmOffBtn.classList.toggle('hidden');
});

alarmOffBtn.addEventListener('click', () => {
  alarmOnBtn.classList.toggle('hidden');
  alarmOffBtn.classList.toggle('hidden');
});
