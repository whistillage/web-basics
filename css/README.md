# 🎨 CSS 정리

## 1. 효과를 지정하는 여러 가지 방법
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
3. CSS 파일을 연결(link)
- CODE
    ```html
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    ```
- rel: 현재 문서와 대상 간의 관계(relationship)
    - stylesheet: 외부 파일이 .css

## 2. 여러 종류의 선택자
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

## 3. 박스 모델
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

## 4. 그리드
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

## 5. 반응형 디자인
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

## 6. 기타
- 세미콜론으로 각 효과를 구분
- display: none;
    - 화면에서 안 보이게
- font-size는 rem 단위 지향
    - <html>의 font-size를 기준으로 크기 비율 계산
    - ex) 2rem
- margin 및 padding 축약형
    - `margin: 10px;` : 모든 방향 10px
    - `margin: 10px 20px;` : 상하 10px, 좌우 20px
    - `margin: 10px 20px 30px;` : 상 10px, 좌우 20px, 하 30px
    - `margin: 10px 20px 30px 40px;` : 상 10, 우 20, 하 30, 좌 40
