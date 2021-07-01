const availableRoutes = [];

function dfs(current, tickets, route, maxRoute) {
  if (route.length === maxRoute) {
    availableRoutes.push(route);
    return;
  }
  const availableTickets = tickets.filter((ticket) => ticket[0] === current);
  availableTickets.forEach((ticket) => {
    tickets.splice(
      tickets.findIndex(
        (element) => element[0] === ticket[0] && element[1] === ticket[1]
      ),
      1
    );
    dfs(ticket[1], tickets, [...route, ticket[1]], maxRoute);
    tickets.push(ticket);
  });
}

function solution(tickets) {
  dfs('ICN', tickets, ['ICN'], tickets.length + 1);
  availableRoutes.sort((a, b) => {
    for (let i = 0; i < a.length; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (a[i][j] > b[i][j]) return 1;
        if (a[i][j] < b[i][j]) return -1;
      }
    }
    return 0;
  });
  console.log(availableRoutes[0]);
}

solution([
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
]);
