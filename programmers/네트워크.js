function dfs(cur, root, computers, visited, length) {
  // 현재 노드 갔다옴 표시
  visited[cur] = root;
  // 갈수있는 노드 검색
  for (let dst = 0; dst < length; dst += 1) {
    // 현재 노드 제외, 연결안되어있는 노드 제외, 이미 탐색한 노드 제외
    if (dst !== cur && computers[cur][dst] === 1 && visited[dst] !== root) {
      dfs(dst, root, computers, visited, length);
    }
  }
}

function solution(n, computers) {
  const visited = computers.map(() => -1);
  for (let i = 0; i < n; i += 1) {
    dfs(i, i, computers, visited, n)
  }
  console.log(visited);
  console.log(new Set(visited).size);
}

solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])

// n번째 컴퓨터들을 각각 접근가능한 노드의 인덱스 값으로 삽입
// 서로 다른 인덱스 값을 가진 컴퓨터의 갯수를 셈
