var $select = null;

function printBoard () {
    var $board = document.getElementById('board');
    var boardCount = 16;
    var isWhite = false;
    var className = '';
    var boardLineCount = 4;
    var str = '';

    for(var i = 0; i < boardCount; i++){

        className = (isWhite) ? 'black': 'white';
        // if(isWhite) className = 'black';
        // else className = 'white';
    
        str += '<span class="'+ className +'"></span>';
    
        isWhite = !isWhite;
        // if(isWhite) isWhite = false;
        // else isWhite = true;        
    
        if (i % boardLineCount == boardLineCount-1) {
            isWhite = !isWhite;
        }
    }
    $board.innerHTML = str;
}

function select(event) {

    if($select) {
        $select.className = $select.className.replace(' select', '');
    }

    var el = event.currentTarget;
    el.className += ' select';
    $select = el;
}

function addEvent() {
    var $boards = document.querySelectorAll('span');
    var boardsLength = $boards.length;
    for(var i=0; i < boardsLength; i++){
        $boards[i].addEventListener('click', select);
    }
}

printBoard();
addEvent();



var numArray = [3,6,9,12,15];

function min(numArray) {
    var result = Math.min.apply(null, numArray)
    return result;
}