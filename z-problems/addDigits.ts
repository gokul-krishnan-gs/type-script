function addDigits(num: number): number {
    while(num >= 10){
        let sum: number = 0;
        while(num > 0){
            let digit: number = num % 10;
            num = Math.floor(num / 10);
            sum += digit;
        };
        num = sum;
    };
    return num;
};
