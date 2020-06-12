function rnd(max, min) {
    if (isNaN(max) || isNaN(min)) {
        return -1;
    } 
    else {
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }
}

export default rnd;