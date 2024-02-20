const searchEl = document.querySelector('.search');
// El은 element의 약자. document라는 객체는 HTML의 document를 말한다, 즉, HTML 자체라고 보아도 무방하다.
// 변수 searchEl은 .search의 내용물을 말하는데,
// 이 내용물은 document 안에서, querySelector 기능을 이용해 고른 것이다.

const searchInputEl = searchEl.querySelector('input');
// 위와 같이 쓰면 searchEl이라는 변수 안에서 search의 하위 요소인 input을 찾아준다. 멍청한데 생각보다 똑똑하네?
// 변수 searchInputEl은 input 안의 내용물을 말하는데,
// 이는 input의 조상인 .search와 관련된 변수 searchEl을 통했으며, querySelector 기능을 이용해 고른 것이다.

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
//searchEl이라는 변수에 addEventListner 기능을 적용해
//클릭했을 때 함수가 실행되도록 만들 것이다. 그 함수의 내용은 다음과 같다.
//"click했을 때 searchInputEl을 focus하겠다는 명령을 내린다."

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '이게 바로 통합검색이다');
});
// 그리고, searchInputEl에 addEventListener 기능을 또 적용해
// 클릭했을 때 함수가 실행되도록 만들 것이다. 내용은 다음과 같다.
// "click했을 때 변수 searchEl에서 찾아낸 클래스명 'search' 뒤에 'focused'를 추가한다."
// (변수를 거슬러 거슬러 올라가 가장 처음 나온 것에 적용)
// "변수 searchInputEl에서 찾은 input이라는 태그에 HTML 속성을 덧붙인다.
// 속성은 placeholder이며, 들어가는 문구는 '이게 바로 통합검색이다'이다."
// (attribute는 HTML의 속성을 말한다.)

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
//blur는 focus가 해제되었을 때를 뜻함.
//빈 문자를 작성할 때는 따옴표만 써준다.

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  // console.log('scroll!!');
  // window는 window 객체. 우리가 보고 있는 화면 그 자체를 의미하기도 함.
  // 브라우저가 가지고 있는 여러 명령들을 가지고 있는 기능임.
  // 화면이 scroll되면 함수를 실행한다. 실행 내용은 콘솔 창에 scroll!!를 띄우는 것.
  // console을 제어하기 위해 lodash 기능 중 throttle을 이용한다. _.throttle
  // _.throttle()을 쓰고 괄호 안에 함수를 넣어줌. 함수의 끝에는 쉼표를 찍고 숫자를 쓰는데 이 숫자는 0.3초(300밀리초)
  // throttle 기능은 스크롤 기능에서 많이 사용되는데, 스크롤을 할 때마다 함수가 굉장히 많이 실행되기 때문임.
  // _.throttle(함수, 시간)과 같이 쓰면 됨.
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // gsap.to(요소, 지속 시간(초), 옵션);
    // gsap은 애니메이션 라이브러리. 위와 같이 써서 요소들의 애니메이션을 만들어줄 수 있다.

    // badgeEl.style.display = 'none';
    // window 내에서 scroll이 어느 위치에 있는지 갱신해 알려준다.
    // 스크롤 위치가 500 이하일 때는 badge가 안 보이게 해준다.
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
  // badgeEl.style.display = 'block';
}, 300));
// 아닐 때는 배지가 보인다.


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 0.3) * 0.7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

//new는 생성자. new Swiper(선택자, 옵션);

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //사이 여백
  cneteredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promition');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  //isHidePromotion = !isHidePromotion --> 느낌표를 붙이면 값이 반대가 되게 만들어 달라는 뜻이 됨.
  // 이 값이 기존의 함수에 재할당된다.
  //즐, isHidePromotion = false;의 반댓값이므로 true가 된다.
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
    //true가 되면 숨김 처리, 
  } else {
    // false가 되면 else 코드가 실행되는데, 이때 보임 처리를 해준다.
    promotionEl.classList.remove('hide');
  }
});


