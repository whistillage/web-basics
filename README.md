# web-basics
웹 해킹 입문을 위한 웹 기초 공부

## 📂 디렉토리별 학습 내용
- [HTML 정리](./html/README.md)
- [CSS 정리](./css/README.md)
- [JavaScript 정리](./js/README.md)
- [HTTP 정리](./http/README.md)
- [프로젝트 모음](./projects/)

## ✅ 공부 순서
1. HTML
2. CSS
3. 프로젝트: HTML + CSS
4. JavaScript
5. HTTP

## 기타 메모
- HTML, CSS, JS의 각 기술이 '통계적으로' 이용해도 되는지 확인하는 사이트
    - https://caniuse.com/

### 1. 라이브러리
- 작업에 필요한 부품을 가져다 쓰는 느낌
- 대표적인 예: jQuery
    - CDN(Content Delivery Network)을 이용하면 웹 주소만 갖고도 라이브러리 이용 가능
        ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>```
    - 훨씬 쉽고 간단한 코딩 가능
        ```$('a').css('color', "powderblue");```

### 2. API(Application Program Interface)
- 프로그래밍할 때 사용하는 조작 장치
- alert의 경고창처럼과 같은 웹브라우저의 여러 기능
- 애플리케이션: 프로그램에 따라 API를 실행하는 것

### 3. 기타 검색어
- DOM, document
    - 특정 태그를 삭제하거나 자식 태그를 추가하고 싶을 때
    - document는 DOM의 일부
- window
    - 웹브라우저를 제어하고 싶을 때
    - 새 창 열기
    - 창의 크기 알아내기
    - 현재 열려 있는 웹페이지의 주소 알아내기
- ajax
    - 웹페이지를 리로드하지 않고 정보를 변경하고 싶을 때
- cookie
    - 웹페이지가 리로드되어도 현재 상태를 유지하고 싶을 때
    - 사용자에게 개인화된 서비스 제공 가능
- offline web appliation
    - 인터넷 없이 동작하는 웹 페이지를 만들고 싶을 때
- webRTC
    - 화상 통신 웹 앱 개발
- speech
    - 사용자의 음성 인식 및 음성으로 정보 전달
- webGL
    - 3차원 그래픽 게임 개발
- webVR
    - 가상현실
