var Body = {
    // 이렇게 하면 오류 발생. 커밋 메시지 참고
    // target:document.querySelector('body'),
    // setBackgroundColor:function(color){
    //     this.target.style.backgroundColor = color;
    // },
                
    setBackgroundColor(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor(color){
        document.querySelector('body').style.color = color;
    }
};

var Links = {
    setColor(color){
        var aList = document.querySelectorAll('a');
        for (var i = 0; i < aList.length; i++){
            aList[i].style.color = color;
        }
    }
};

function dayNightHandler(self){
    // conditional statement refactored ver.
    // loop ver.
    // obejct-oriented ver.
    if (self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}