# 목적

알고리즘 문제를 푼다. 몰랐던 것, 알았지만 체화되지 않은 것, 떠오른 생각 등을 정리한다.

## 목표

- 문제 하나를 javascript와 typescript로 각각 해결한다.
- 해결하면서 배운 것, 체화되지 않은 것, 찾아본 것 등을 정리한다.
- 해결 후, 다른 사람의 풀이를 보고 다른 점을 찾고 내것으로 만든다.

## 문제

### 13. Roman to Integer.ts

- string 배열에서 reduce를 사용했고 누적 값의 타입은 number이다. 배열의 타입과 accumulator의 타입이 다르다. 이런 경우엔, 초기값을 명시하고 accumulator의 타입을 그에 맞춰서 지정해주면 된다. 또는 초기값만 지정해줘도 타입추론이 발생한다.

- object에 string을 키로 접근하는 것은 허용되지 않는다. 허용되는 것은 string literal로 명시하거나 string literal로 추론되는 것 뿐이다. string literal은 명시적으로 `obj["key"], type KEYS = "key1" | "key2"`처럼 나타내는 것을 의미한다. string literal로 추론되는 것은 `const key = "key"`처럼 string으로 초기화되는 상수만이 가능하다.

- enum의 항목 이름을 문자열로 변경하여 key로 사용하고 싶을 수도 있다. 이를 위해선, keyof와 typeof 연산자와 type assertion을 이용한다. `val as keyof typeof 문자열로뽑고싶은enum`처럼 사용한다.

### 20. Valid Parentheses.ts

- object에 string을 키로 접근하는 것은 허용되지 않는다. 그래서, 직접적으로 string literal을 사용하거나, string literal로 type assertion 해야 한다. 하지만, Map 자료구조를 응용하면 비슷하게 사용 가능하다.

### 21. Merge Two Sorted Lists.ts

- 함수의 파라미터 이름 뒤에 ?가 붙는 것은 optional parameter이다. 함수를 호출할 때 인자를 넘겨주지 않아도 된다. `function Foo(foo?: string)`와 같이 표현한다. 인자를 넘겨주지 않으면, optional parameter는 undefined가 된다. optional parameter를 풀어쓰면,
`function Foo(foo: string | undefined = undefined)`일 것이다.

### 26. Remove Duplicates from Sorted Array.ts

- js의 array는 lexicographic을 기준으로 정렬한다. 예를 들어, 다음과 같은 `array [0, 3, 1000, 2]`가 있다면, sort를 호출한 결과값은 `[0, 1000, 2, 3]`이다. 따라서 comperator을 제공해야한다. comperator를 제공할 때는 반환한 값을 기준으로 두 원소를 정렬 한다. 결과값이 0보다 크면 두 번째 인자, 첫 번째 인자, 결과값이 0보다 작으면 첫 번째 인자, 두 번째 인자 순서이다. 동일하면 순서가 유지된다.

### 35. Search Insert Position.ts

- indexOf함수는 원소를 찾아서 인덱스를 반환한다. 없다면 -1 반환.

### 70. Climbing Stairs.ts

- 피보나치 시퀀스의 문제를 재귀적으로 풀었다.
- c++ vector의 reserve같이 쓰려면 `Array(10).fill(0);` Array(10)은 빈 엘리먼트 10개를 만드는 것이다. 하지만, 이터레이트를 할 수는 없다... 그래서 fill로 채워준다.

### 88. Merge Sorted Array.ts 

- 동일한 값을 허용하는 오름차순이라는 생각에 index를 0부터 봤지만, 이 문제는 마지막 인덱스부터 보는게 맞았다...
### 100. Same Tress, 101. Symmetric Tree.ts 

- 정렬되지 않은 트리에서 inorder traversal하면, 트리를 하나의 배열로 쭉 펴기 쉽다.
- 정렬된 트리에서 inorder traversal하면 정렬된 요소들을 차례로 나열할 수 있다.
 
### 108. Convert Sorted Array to Binary Search Tree.ts

- tree를 만들기 위해서 재귀함수를 사용하였다. 재귀함수는 수학적귀납법과 닮아있다.
- 귀납법은 base 케이스를 증명하고, 그것을 일반화 시키는 과정이다. 첫 번째 스텝, 두 번째 스텝 ... N번째 스텝으로 이어진다.
- 재귀함수는 N번째 스텝을 만족한다고 가정하고, 첫 번째 스텝까지 내려온다. 그리고 첫 번째 스텝이 만족하면, 다시 두 번째 스텝이 만족되는 방식이다.
- 원리는 비슷한데 방향이 반대이다.
- 테크닉적으로 재귀함수는 스스로를 호출하기에 탈출조건이 필요하다.
- 탈출조건은 상당히 중요한데, 결국 첫 번째 스텝인지 확인되면 연쇄적인 탈출이 시작된다.
- 
### 110. Balanced Binary Tree.ts

- "모든 노드의 서브트리의 depth의 차이가 1이하인 것"인지 확인해야 한다.
- 따라서 루트부터 시작하여 각 노드의 서브 트리를 확인해야 한다.
- 108번과 마찬가지로 재귀함수가 되며, 첫 번째 스텝은 leaf 노드가 null이되는 경우까지 가는 것이다.
- 그리고 다시 재귀함수가 unrolling되면서 두 번째, 세 번째 ... 마지막 N(루트노드)까지 스텝이 올라간다.
- 재밌는 점은, 한 번이라도 depth의 차이가 1초과된다면, 더 이상 볼필요 없다는 점이다.

### 111. Minimum Depth of Binary Tree.ts

- 루트 노드에서 리프 노드까지의 거리인 minimum depth를 구한다.
- 이 문제의 재밌었던 점은 리프 노드를 정확하게 판별해야 한다는 점이다.
- 그저 서브트리를 구하듯이 하면, 리프 노드인 경우도 있고 아닌 경우도 있기에 어떤 케이스는 맞고 어떤 케이스는 틀린 답이 나온다.
- 그러므로, "left child, right child가 없는" 리프 노드를 정확히 판별하고, 리프 노드의 depth만을 유효 숫자로 봐야 했다.

### 112. Path Sum.ts

- 111번과 원리는 같다. 눈여겨볼 점은 node의 child가 하나인 경우에 어떻게 처리할 것인가...
- 결론적으로, 하나의 path라도 정답이 존재한다면, 나머지 path가 모두 틀려도 괜찮으니, node의 child가 한 쪽 분이라면 나머지는 불가능하다고 쳐도 된다.
- child가 하나인 node까지의 path에서 정답이 존재하더라도, leaf가 아니므로 정답이 아니니까.

### 118. Pascal's Triangle.ts

- 문제 자체는 쉽게 풀었는데, 속도가 하위 13%였다. 어떤 차이인지 확인
- 다른 풀이를 보면 push로만 호출해서 끝났는데, 내 풀이는 중간에 splice를 호출하였음. 이게 문제로 보임.
- 함수 호출에 대한 비용 + splice 내부동작의 비용인데, splice는 원소를 중간에 끼어넣기에 그 뒤에 있는 원소들이 한 칸 뒤로 미는 과정에서 발생하는 비용이 커보임
### 119. Pascal's Triangle II.ts

- 118과 연계되는 문제. row n을 계산하려면 n - 1이 필요하고, 다시 반복... 따라서 타임 리미트를 초과하지 않으려면 계산 값을 저장해야 한다.
- 이를 위하여 2차원 배열을 썼다.
- 그런데, `new Array<Array<number>>(rowIndex + 1).fill(new Array<number>());` 이런 식으로 2차원 배열을 만들었더니, fill에 들어간 인자를 모두 참조하는 2차원 배열이 되어버린 문제가 있었다.
- 그 외에는 특별한 점은 없었던 것 같다.

### 121. Best Time to Buy and Sell Stock.ts

- 브루트 포스로 풀었더니 타임 리미트가 발생.
- 그래서 생각해보니... buy 이후에 sell을 하니까, buy 이전의 인덱스는 다시 살펴볼 필요가 없다.
- 즉, min값을 찾아서 차이가 최대인 구간을 찾되, min이 갱신되면, 다시 처음부터 시작하여 최대 구간을 찾아서 이전과 비교하면 된다.
- 어쨌든 배열의 앞을 살펴볼 필요는 없으니까...

### 136. Single Number.ts

- 비트연산을 사용. 같은 숫자를 xor로 연산하면 0이 나오는 특징을 이용하였다.

### 141. Linked List Cycle.ts

- set 자료구조를 이용하여 풀었다. 속도에선 88%로 위에 있었지만, 메모리는 14.7%로 많은 공간을 사용하였다.
- 다른 사람의 풀이를 보니 포인터를 2개 들고 간다 하나의 fast 포인터로 next를 2번씩, 다른 하나는  slow 포인터로 1번씩 확인하며, fast가 slow를 따라잡으면 싸이클이 생성된 것이라 본다.

### 168. Excel Sheet Column Title.ts

- leetcode의 discussion파트에서 10진수를 26진수로 바꾸는 것이라는 말이 와닿았다.
- 별생각없이 풀었는데...
- 그리고.. C에선 아스키코드와 숫자를 변경하는 것이, char을 이용해서 문자로 취급할지 정수로 취급할 지 결정하면 되는 것이었음.
- 하지만, js에선 이렇게 취급할 수 없었고 String.fromCharCode라는 메소드를 이용하여 해결

### 169. Majority Element.ts

- 문제는 쉽게 풀었는데, 추가 요구 사항이 어려웠다. 시간복잡도: O(n), 공간복잡도: O(1)....
- 기존에 정렬해서 중간값을 취하는 것은 시간복잡도가 O(nlogn)이라 탈락.
- 결국 힌트를 봤는데, 무어의 투표 알고리즘이란게 있어서 이것을 사용하였음.
- 원리는... 새롭게 나타나면 +1, 다른게 나타나면 -1하여, 결국 최대한 많이 나타나는 것을 찾는 알고리즘이었음.
- 재밌네

### 190. Reverse Bits.ts

- 문자열과 숫자를 서로 변환화는 과정이 있었다.
- 숫자를 문자열로 변환할 때 쓰는 .toString(radix), 똑같은 문자를 채울 때 쓰는 repeat, 문자열을 arry에 넣기 위해 [...문자열], 
- 마지막으로 뒤집기 위해서 배열을 뒤집고 join으로 문자열을 만들고 이것을 다시 parseInt로 숫자로 바꿔주었다.
- 하나하나 다 하려면 코드가 길어지는데 이미 함수들이 있어서 짧게 되었다.