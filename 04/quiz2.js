var board = document.getElementById("board");

var color;
var sum;

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        var span = document.createElement('span');

        sum = i + j; // x,y 좌표 합이 홀수 일 경우 흰색
        if (sum % 2 === 1) 
        {
            color = " white";
        } else 
        {
            color = " black";
        }

        span.setAttribute('class', color); // span id에 "white" 또는 "black" 정의
        board.appendChild(span);
    }
}

var paintRed = function(e) {

    if (this.red != null) {
        if ((this.red.id % 2) == 1) 
        {
            this.red.className = this.red.className.replace(" red", " white"); 
                       
        } else if ((this.red.id % 2) == 0) 
        {
            this.red.className = this.red.className.replace(" red", " black");           
        }
    }
    e.target.className += " red";
    this.red = e.target;    
};

var red = null;
board.addEventListener('click', paintRed);

