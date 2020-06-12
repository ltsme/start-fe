function avg(...number) {
    let sum = 0;
    let cnt = 0;

    function avgNumber(a) {
        a.forEach((a) => {
            if (!isNaN(a)) {
                sum += a;
                cnt ++;
            } else if (Array.isArray(a)) {
                avgNumber(a);
            }            
        });
    }
    
    avgNumber(number);

    return sum / cnt;
}

export default avg;