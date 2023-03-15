function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    const dfs = (depth: number, parentheses: string, openCloseSum: number) => {
        if(depth === n * 2) {
            if(openCloseSum === 0) {
                result.push(parentheses);
            }

            return;
        }

        if(openCloseSum === 0) {
            dfs(depth + 1, parentheses + "(", openCloseSum + 1);
        } else if(openCloseSum > 0) {
            if(openCloseSum >= n) {
                dfs(depth + 1, parentheses + ")", openCloseSum  - 1);
            } else {
                dfs(depth + 1, parentheses + "(", openCloseSum  + 1);
                dfs(depth + 1, parentheses + ")", openCloseSum  - 1);
            }
        } else {
            return;
        }
    }

    dfs(0, "", 0);

    return result;
};