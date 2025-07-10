# web-basics
웹 해킹 입문을 위한 웹 기초 공부

# 웹 기초 공부 노트

## 1. HTML 기본 태그
- 기본 구조
    `<!DOCTYPE html>
    <html>
        <head>
            <title></title> : 페이지 제목
            <meta charset="utf-8">
        </head>
        <body>
        </body>
    </html>`

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

## 2. CSS 기본 스타일링

## 3. JavaScript 기본 개념

