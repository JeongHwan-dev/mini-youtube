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

// 다음 영상 데이터
const contentsData = [
  {
    title: '코딩 부트캠프, 엘리스를 선택한 이유는? 첫 번째 이야기!',
    img: 'thumbnail1.jpg',
    name: '엘리스코딩 elice',
    views: '10,376',
    date: '2019. 7. 15.',
  },
  {
    title: '코딩 부트캠프, 엘리스를 선택한 이유는? 두 번째 이야기!',
    img: 'thumbnail2.jpg',
    name: '엘리스코딩 elice',
    views: '3,419',
    date: '2019. 7. 15.',
  },
  {
    title: '코딩 부트캠프, 엘리스를 선택한 이유는? 세 번째 이야기!',
    img: 'thumbnail3.jpg',
    name: '엘리스코딩 elice',
    views: '3,419',
    date: '2019. 7. 16.',
  },
];

// 다음 영상 리스트 섹션 (JS에서 렌더링 하는 방식)
// const upNextSec = document.querySelector('.infoAndUpNext .upNext');
// const contentsList = [];

// contentsList.push('<ul>');

// for (let i = contentsData.length - 1; i >= 0; i--) {
//   contentsList.push(`
//     <li class="item">
//       <div class="img">
//         <img src="img/${contentsData[i].img}" alt="${contentsData[i].title}" />
//       </div>
//       <div class="item__info">
//         <span class="title">
//           ${contentsData[i].title}
//         </span>
//         <span class="name">${contentsData[i].name}</span>
//         <div class="item__data">
//           <span class="views">조회수 ${contentsData[i].views}회</span>
//           <span class="dot">&#183;</span>
//           <span class="date">${contentsData[i].date}</span>
//         </div>
//       </div>
//       <button type="button" class="moreBtn">
//         <i class="fas fa-ellipsis-v"></i>
//       </button>
//     </li>
//   `);
// }

// contentsList.push('</ul>');

// upNextSec.innerHTML = contentsList.join('');
