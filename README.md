# web-basics
웹 해킹 입문을 위한 웹 기초 공부

# 웹 기초 공부 노트
- HTML, CSS, JS의 각 기술이 '통계적으로' 이용해도 되는지 확인하는 사이트
    - https://caniuse.com/

## 1. HTML 기본 태그
- 기본 구조
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title></title> : 페이지 제목
            <meta charset="utf-8">
        </head>
        <body>
        </body>
    </html>
    ```

- <strong></strong> : 굵게
- <h1> ~ <h6></h1> ~ </h6> : 제목 강조
    - 1이 가장 크고 6이 가장 작음
- <u></u> : 밑줄
- <p></p> : 단락
    - css를 이용한 꾸미기 용이
- <img> : 이미지
    - src = "directory" : 이미지의 출처
    - width = "100%" : 이미지의 크기
- <ol></ol>, <ul></ul> : 정렬, 비정렬 목록
    - <li></li> : 자식 태그, 내용
- <table></table> : 표
    - <tr></tr> : 자식 태그, 행
        - <td></td> : 자식 태그, 열
- <a></a> : 하이퍼링크
    - href : 링크 주소
    - target = "" : 어디에서 열지
        - _self(default) : 현재 탭
        - _blank : 새 탭
    - title = "" : 커서 올리면 나오는 제목
    - rel = "noopener"
        - target = "_blank"를 쓸 때, 열린 새 창이 부모 페이지의 JS 컨텍스트에 접근하지 못하도록 막아주는 보안 속성
        - 악성 스크립트가 부모 창을 조작하는 위험 방지
- <iframe></iframe> : 다른 웹페이지나 콘텐츠 삽입
    - src : URL
    - width/height : 가로/세로 (px 또는 %)
    - frameborder : 테두리 여부, 0은 테두리 없음
    - allowfullscreen: 전체화면 여부 (전체화면 막으려면 명시 X. allowfullscreen="false"로 하지 않음.)
    - loading = "lazy" : 스크롤될 때 로드되게 하여 성능 최적화

### 1-1. 웹호스팅과 웹서버
- 웹호스팅
    - github pages
        - 설정 -> pages -> Branch 설정 및 저장
    - 기타 static web hosting 서비스
        - https://bitballoon.com
        - http://neocities.org
        - Azure Blob
        - Google Cloud Storage
        - Amazon S3
- 웹서버
    - Live Server
        - VSCode 확장 프로그램
        - 하단 바 Go Live 클릭
        - 클라이언트가 요청 시 VSCode의 프로젝트 폴더에서 파일을 찾음
            - 파일을 수정하면 실시간으로 반영됨
        - http://127.0.0.1:5500/projects/html_ex1/1.html -> 1.html 응답
        - http://127.0.0.1:5500/projects/html_ex1/ -> 기본 값으로 index.html 응답
        - PC의 ip 주소를 따고 같은 와이파이에 연결되어 있으면 스마트폰에서도 접속 가능

### 1-2. 댓글 기능
- 댓글 기능 구현은 매우 어렵고 복잡하기 때문에, 다른 회사의 댓글 서비스를 가져다 사용할 수 있다.
- DISQUS라는 사이트에서 코드를 긁어온 뒤 붙여넣기만 해도 구현이 된다.
- local file을 열면 안되고, 서버를 거쳐야 한다. (보안 상의 이유)
    - localhost:5500/html/comments.html
    - localhost는 내 컴퓨터의 IP 주소와 동일

### 1-3. 라이브 채팅 기능
- tawk.to에서 코드를 긁어온 뒤 붙여넣기
- 웹사이트에서 실시간으로 클라이언트와 대화할 수 있다.

### 1-4. 방문자 분석 기능
- Google Analytics 이용
- 사용자 정보 : 연령, 성별, 국가, 장치 등
- 수명주기 : 첫방문(획득), 활동(참여), 구매(수익창출), 재방문(유지)

---
## 2. CSS 기본 스타일링
- 세미콜론으로 각 효과를 구분
- display: none;
    - 화면에서 안 보이게
- font-size는 rem 단위 지향
    - <html>의 font-size를 기준으로 크기 비율 계산
    - ex) 2rem
- margin 및 padding 축약형
    - `margin: 10px;` : 모든 방향 10px
    - `margin: 10px 20px;` : 상하 10px, 좌우 20px
| `margin: 10px 20px 30px;`      | 상 10px, 좌우 20px, 하 30px |
| `margin: 10px 20px 30px 40px;` | 상 10, 우 20, 하 30, 좌 40  |


### 2-1. 효과를 지정하는 여러 가지 방법
1. html의 style *속성*을 태그에 부여
```html
<h1><a href="index.html" style="color:red; text-decoration:none">WEB</a></h1>
```

2. head 태그 안에 style *태그* 삽입
- style 태그 내부는 CSS 코드로 인식
    ```html
    <head>
            <style>
                a {
                    color:orange;
                    text-decoration:none;
                }
            </style>
        </head>
    ```
    - 여기에서 a{}는 선택자(selector)
    - color:orange;는 선언(declaration)
    - 효과 = property

2-1. CSS 파일을 연결(link)
- CODE
    ```html
    <link rel="stylesheet" href="style.css">
    ```
- rel: 현재 문서와 대상 간의 관계(relationship)
    - stylesheet: 외부 파일이 .css

### 2-2. 여러 종류의 선택자
- id 선택자 > class 선택자 > 태그 선택자
    
- id 선택자
    ```css
    #current {
        color: red;
    }```
    - id = "current"가 명시된 태그에 반영됨
    - **단 한 번만** 사용 가능
- class 선택자
    ```css
    .underline {
        text-decoration: underline;
    }```
    - 두 class의 효과가 중복되면, 더 아래에 등장하는 효과가 반영됨
- 태그 선택자
    ```css
    a {
        color:black;
        text-decoration: none;
    }
    ```
- 그 밖에 기호를 이용한 다양한 선택자의 조합이 있음
    - a, h1 {}
        - 모든 <a>와 <h1>에 대해
    - #grid ol {}
        - id = "grid"인 태그의 자식으로 속한 모든 ol 태그에 대해

### 2-3. 박스 모델
- Block-Level Element VS Inline-Level Element
    - display: block; VS display: inline;
        - CSS의 display 속성을 의미함
    - Block: 그 줄 전체를 쓰고 줄넘김
        - EX) <h1>
    - Inline: 줄넘김 없음
        - EX) <a>
- 박스의 구조
    ![이미지](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)
    - contents < padding < border < margin
    - 개발자 도구에서 element를 선택하고 styles를 누르면 확인 가능
        - 어떤 CSS 스타일의 영향을 받고 있는지 정리되어 있음

### 2-4. 그리드
- <div>, <span>
    - 디자인을 위한 '내용이 없는 태그'
    - 영역을 지정해 줌
    - <div>: Block-Level / <span>: Inline-Level
- 배치할 태그들의 **부모 태그**가 필요함
- CODE
    ```css
        #grid {
            display: grid;
            grid-template-columns: 150px 1fr;
        }
    ```
    - 1fr는 150px를 제외한 오른쪽 나머지 공간을 채움
    - 2fr 3fr => 2:3 비율

### 2-5. 반응형 디자인
- 다양한 기기에 맞게 각각 디자인을 다르게 하기 위함
- media query를 이용
- CODE
    ```css
    @media (min-width:800px) {
        div {
            display: none;
        }
    }
    ```
    - 가로 폭이 800px보다 크면 안 보이게
- 조건을 만족하면 해당 스타일이 **덧씌워서** 적용됨
    - 기존에 적용된 스타일이 초기화되는게 아님
    - 후순위로 적용되는 것
    - 윤곽선을 지우려면 ```border: none;```

---
## 3. JavaScript 기본 개념

