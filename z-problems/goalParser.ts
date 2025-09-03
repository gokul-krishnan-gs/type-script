function interpret(command: string): string {
    let parser: string[] = [];

    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            parser.push('G');
        } 
        else if (command[i] === '(' && command[i + 1] === ')') {
            parser.push('o');
            i = i + 1;
        } 
        else if (
            command[i] === '(' && 
            command[i + 1] === 'a' && 
            command[i + 2] === 'l' && 
            command[i + 3] === ')'
        ) {
            parser.push('al');
            i = i + 3;
        }
    }

    return parser.join('');
}