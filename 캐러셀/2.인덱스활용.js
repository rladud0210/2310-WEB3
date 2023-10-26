const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;
//childElementCount 에는 html 요소가 가진 자식의 갯수가 들어있다.
const 슬라이드갯수 = contentsWrapper.childElementCount
console.log(슬라이드갯수)

// prev 버튼을 누르면 인덱스가 1 감소하게
// next 버튼을 누르면 인덱스가 1 증가하게

prevButton.addEventListener('click', ()=>{
    index--;
    if(index < 0){
        index = 슬라이드갯수-1;
    }
    
    
    위치적용(); 
})

nextButton.addEventListener('click', ()=>{
    index++;
    if(index > 슬라이드갯수-1){
        index = 0
    }
    // 배열은 0부터 시작. 2번 다음으로 못 넘어가게
    
    위치적용();   
})


function 위치적용() {
    contentsWrapper.style.transform = 
    `translateX(${index * -300}px)`
    // index 0 : 값 0
    // index 1 : 값 -300
    // ...

    // index * -300
    
    nowPage.innerText = index+1;
}






// 나우페이지 가져오기
// 토탈 페이지 가져오기

// 인덱스에 따라 나우페이지가 변하게끔
// 토탈페이지는 전체 슬라이드 갯수로 설정해주세요

// 나우페이지는 prev, next 버튼 누를 때마다 갱신되어야 합니다.

const nowPage = document.querySelector('.now-page');
const totalPage = document.querySelector('.total-page');

totalPage.innerText = 슬라이드갯수;


const 페이지 = pageContainer.childElementCount
console.log(페이지)





