function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let goalIndex = 0;
    let cards1Index = 0;
    let cards2Index = 0;

    while(true) {
        const target = goal[goalIndex++];

        if(cards1Index < cards1.length && target === cards1[cards1Index]) {
            cards1Index++;
        } else if(cards2Index < cards2.length && target === cards2[cards2Index]) {
            cards2Index++;
        } else {
            answer = "No";

            break;
        }

        if(goalIndex === goal.length) {
            break;
        }
    }

    return answer;
}