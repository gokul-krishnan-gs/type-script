function lengthOfLastWord(s: string): number {
    let freshString: string = s.trimEnd();
    let stringArray: string[] = freshString.split(" ");
    let lastElementIndex: number = (stringArray).length - 1;
    return stringArray[lastElementIndex].length;
};
