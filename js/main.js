$(function () {
    

  document.addEventListener("touchstart", function () { }, true);

  $(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault(); });

  //cont02 play

  const DDay = document.querySelector("#DDay");

  function find_day() {
      const iltenore = new Date("2024-03-29");  //디데이 설정
      const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000

      day_gap = iltenore - today;

      const day = Math.floor(day_gap / (1000 * 60 * 60 * 24));  //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
      const hour = Math.floor(day_gap / (1000 * 60 * 60) % 24);
      const min = Math.floor(day_gap / (1000 * 60) % 60);
      const sec = Math.floor(day_gap / 1000 % 60);

      DDay.innerText = `${day}`;
  }
  find_day();
  setInterval(find_day, 1000);  //초마다 디데이 기능 실행

  //kyuhyun
  const time = document.querySelector("#time");

  function find_day1() {
      const kyuhyun = new Date("2024-03-08");  //디데이 설정
      const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000

      day_gap = kyuhyun - today;  //크리스마스까지 남은 밀리세컨드 초 값

      const day = Math.floor(day_gap / (1000 * 60 * 60 * 24));  //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
      const hour = Math.floor(day_gap / (1000 * 60 * 60) % 24);
      const min = Math.floor(day_gap / (1000 * 60) % 60);
      const sec = Math.floor(day_gap / 1000 % 60);

      time.innerText = `${day}`;
  }
  find_day1();
  setInterval(find_day1, 1000);  //초마다 디데이 기능 실행

  //road
  const time2 = document.querySelector("#time2");

  function find_day2() {
      const kyuhyun = new Date("2024-03-16");  //디데이 설정
      const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000

      day_gap = kyuhyun - today;  //크리스마스까지 남은 밀리세컨드 초 값

      const day = Math.floor(day_gap / (1000 * 60 * 60 * 24));  //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
      const hour = Math.floor(day_gap / (1000 * 60 * 60) % 24);
      const min = Math.floor(day_gap / (1000 * 60) % 60);
      const sec = Math.floor(day_gap / 1000 % 60);

      time2.innerText = `${day}`;
  }
  find_day2();
  setInterval(find_day2, 1000);  //초마다 디데이 기능 실행

  //cont04 

  let MoreItem = $('.item_wrap li');

  MoreItem.mouseenter(function () {
      MoreItem.removeClass('on');
      $(this).addClass('on');
  });

  //image_box 
  let imageBoxImage = document.querySelectorAll('.image_box figure');
  let imageBoxPage = document.querySelector('.image_box .slide_pagination');
  let imageBoxBtn = document.querySelector('.image_box .slide_btn');

  for (let i = 0; i < imageBoxImage.length; i++) {
      imageBoxPage.innerHTML += '<li></li>';
  }

  let pageBtn = document.querySelectorAll('.slide_pagination li');
  pageBtn[0].classList.add('on');

  //페이징 버튼 클릭 시 진행
  for (let i = 0; i < pageBtn.length; i++) {
      pageBtn[i].addEventListener('click', () => {
          imageBoxImage.forEach((item) => {
              item.classList.remove('on');
          });
          imageBoxImage[i].classList.add('on');

          pageBtn.forEach((btn) => {
              btn.classList.remove('on');
          });
          pageBtn[i].classList.add('on');
      });

      //imageBoxBtn 다음버튼 (화살표아이콘)
      let index = 0;
      imageBoxBtn.addEventListener('click', () => {
          index++;

          if (index >= pageBtn.length) {
              index = 0;
          }

          imageBoxImage.forEach((item) => {
              item.classList.remove('on');
          });
          imageBoxImage[index].classList.add('on');

          pageBtn.forEach((item) => {
              item.classList.remove('on');
          });
          pageBtn[index].classList.add('on');

      });

      setInterval(() => {
          index++;
          if (index >= pageBtn.length) {
              index = 0;
          }

          imageBoxImage.forEach((item) => {
              item.classList.remove('on');
          });
          imageBoxImage[index].classList.add('on');

          pageBtn.forEach((item) => {
              item.classList.remove('on');
          });
          pageBtn[index].classList.add('on');

      }, 3000); //setInterval
  } //for

  //footer

  let depth01 = $('.site .depth01 > a');
  let depth02 = $('.site .depth02');
  let depth01Image = $('.site .depth01 a >img')

  for (let i = 0; i < depth01.length; i++) {
    depth01[i].addEventListener('click', () => {
        depth01[i].classList.toggle('on');
        depth01[i].nextElementSibling.classList.toggle('on');
    });
}

depth01.click(function () {
    if ($(this).next().css("display") === "none") {
        $(".site .depth01 a >img").attr({ src: "img/icon_plus.png" });
       
 
      } else {
        
        $(".site .depth01 a >img").attr({ src: "img/icon_minus.png" });
      }
    });

  

  /* header */

  let menuBtn = $('.header .menu-btn');
  let mobileGnb = $('.header .gnb-mobile');
  let closeBtn = $('.header .menu_close');

  menuBtn.click(function(){
      mobileGnb.animate({
          'right' : '0'
      },1000); //,1000 => 슬라이드 시간 조절
  });//menuBtn click

  closeBtn.click(function(){
      mobileGnb.animate({
          'right' : '-100%'
      },1000);
      
  });//closeBtn

  let depth01Menu = $('.header .depth01 > a');
  let depth02Menu = $('.header .depth02');
  let depth01Icon = $('.header .depth01>a>img');
  

  depth01Menu.click(function () {
    if ($(this).next().css("display") === "none") {
        $(this).next().slideDown();
       
        $(depth01Menu).removeClass("on");
        $(this).addClass("on");
 
      } else {
        $(this).next().slideUp();
        $(this).removeClass("on"); 
      }
    });




}); //jquery end