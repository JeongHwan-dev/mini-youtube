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

const likeBtn = document.getElementById('like-btn');
const likeIcon = document.querySelector('.info .actions #like-btn i');
const likeCntEl = document.querySelector('.info .actions #like-btn span');
let likeCnt = 10;

likeCntEl.innerText = likeCnt;

// 좋아요 버튼 클릭 시
likeBtn.addEventListener('click', () => {
  likeIcon.classList.toggle('active');

  if (likeIcon.classList.contains('active')) {
    likeCnt++;
  } else {
    likeCnt === 0 ? 0 : likeCnt--;
  }

  likeCntEl.innerText = likeCnt;
});

const dislikeBtn = document.getElementById('dislike-btn');
const dislikeIcon = document.querySelector('.info .actions #dislike-btn i');
const dislikeCntEl = document.querySelector('.info .actions #dislike-btn span');
let dislikeCnt = 0;

dislikeCntEl.innerText = dislikeCnt;

// 싫어요 버튼 클릭 시
dislikeBtn.addEventListener('click', () => {
  dislikeIcon.classList.toggle('active');

  if (dislikeIcon.classList.contains('active')) {
    dislikeCnt++;
  } else {
    dislikeCnt === 0 ? 0 : dislikeCnt--;
  }

  dislikeCntEl.innerText = dislikeCnt;
});
