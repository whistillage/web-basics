# ⚙️ JavaScript 정리

## 1. 스크립트를 지정하는 여러 가지 방법
1. <script> 태그
    - 파일을 따로 저장하고 불러오는 방법
        ```<script src="colors.js"></script>```
2. 이벤트
    - 웹 브라우저 위에서 일어나는 일
    - ex) onclick, onchange, onkeydown 등
    - 웹 브라우저가 기억해놨다가 event 발생 시 실행
3. 콘솔
    - 검사 -> Console
        - Esc 누르면 하단에 뜸
    - 현재 웹페이지를 대상으로 실행됨

## 2. 문자열과 변수
- 문자열
    - '' or ""
    - property
        ```"string".length```
    - method
        ```js
            "string".toUpperCase();
            "string".indexOf('s');
            "     string     ".trim();
- 변수
    ```js
        var name = "whist";
    ```

## 3. 태그 제어하기
```js
    document.querySelector('mytag').style.backgroundColor = 'black';
    document.querySelector('.myclass').style.backgroundColor = 'black';
    document.querySelector('#myid').style.backgroundColor = 'black';
```

## 4. 조건문과 반복문
- 조건문
    ```js
        if(true){

        } else {

        }
    ```
- 배열
    ```js
        var arr = ['a', 'b'];
        arr.push('c');
        arr.length;
    ```
- 반복문
    ```js
        var nList = document.querySelectorAll('a'); // NodeList 반환
        while(i < nList.length){}
        for(var i = 0; i < nList.length; i++){}
    ```
    
## 5. 객체
- 중괄호로 선언
    - property나 method는 ,로 구분
    - **this는 해당 객체를 지칭**
- property 선언하는 법
    ```js
        var myObject = {
            name1:"taehyun",
            "name2":"juha"
        };
        myObject.name3 = "sungrak";
        myObject[special name] = "mom";
        
        document.write(myObject.name3);
        document.write(myObject[special name]);
    ```
    - 공백이 있는 property는 대괄호로 선언 및 호출
    - ***문자열은 따옴표 생략해도 됨***
- 반복문을 통한 property 접근
    ```js
        for(var key in myObject) {
            document.write(key+' : '+myObject[key]+'<br>');
        }
    ```
    - 변수를 통해 접근하려면 .가 아닌 []로 접근
        - .는 문자열
- method 선언하는 법
    - object 선언할 때
        ```js
        var myObject = {
            "name1":"taehyun",
            "name2":"juha",
            // 첫 번째 방법
            "showAll":function(){
                for(var key in this) {
                    document.write(key+' : '+this[key]+'<br>');
                }
            }
            // 두 번째 방법(축약형)
            showAll(){
                for(var key in this) {
                    document.write(key+' : '+this[key]+'<br>');
                }
            }
        };
        ```
    - 나중에 추가할 때
        ```js
            myObject.showAll = function(){
                for(var key in this) {
                    document.write(key+' : '+this[key]+'<br>');
                }
            }
            myObject.showAll();
        ```

## 6. 기타
- 연산자
    - 산술 연산자: +, -, *, /
    - 비교 연산자: ===, >, <
- 리팩토링
    - 변수의 이용
        ```js
        var target = document.querySelector('body');
        target.style.color = 'white';
        ```
    - this
        - 해당 스크립트가 실행되는 태그를 지칭
        ```js
        if (this.value === 'night'){
            this.value = 'day';
        }
        ```
    - 함수
        ```js
            function myFunc(parameter){
                // 리턴값이 명시되지 않으면 undefined를 반환
                // 다른 값을 리턴할 때도 선언문은 동일
            }
        ```
