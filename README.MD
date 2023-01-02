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
### 110. Balanced Binary Tree.ts

- "모든 노드의 서브트리의 depth의 차이가 1이하인 것"인지 확인해야 한다.
- 따라서 루트부터 시작하여 각 노드의 서브 트리를 확인해야 한다.
- 108번과 마찬가지로 재귀함수가 되며, 첫 번째 스텝은 leaf 노드가 null이되는 경우까지 가는 것이다.
- 그리고 다시 재귀함수가 unrolling되면서 두 번째, 세 번째 ... 마지막 N(루트노드)까지 스텝이 올라간다.
- 재밌는 점은, 한 번이라도 depth의 차이가 1초과된다면, 더 이상 볼필요 없다는 점이다.
