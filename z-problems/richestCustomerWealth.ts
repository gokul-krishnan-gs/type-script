function maximumWealth(accounts: number[][]): number {
    let m: number= accounts.length;
    let n: number = accounts[0].length;
    let maxWealth : number = 0;
    let i: number = 0;
    let j: number = 0;
    for(i = 0;i<m;i++){
        let wealth: number = 0;
        for(j = 0;j<n;j++){
            wealth += accounts[i][j];
            if(wealth > maxWealth)
                maxWealth = wealth;
        };
    };
    return maxWealth;
};
