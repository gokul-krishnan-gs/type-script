function mostWordsFound(sentences: string[]): number {
    let maxWord: number = 0;
    let i:number = 0;
    for(let i=0 ;i<sentences.length;i++){
        let wordCount: number = sentences[i].split(" ").length;
        if(wordCount > maxWord)
            maxWord = wordCount;
    };
    return maxWord;
};
