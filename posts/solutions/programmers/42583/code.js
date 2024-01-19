function solution(bridge_length, weight, truck_weights) {
  const bridge = []; // [[[weight], [location]], ...]
  const trucks = [...truck_weights];
  let answer = 0;
  while (bridge.length || trucks.length) {
    // Dequeue
    if (bridge.length && bridge[0][1] === bridge_length) {
      bridge.shift();
    }

    // Update location of trucks
    bridge.forEach(c => c[1]++);

    // Enqueue
    if (
      trucks.length &&
      bridge.reduce((acc, [w]) => acc + w, 0) + trucks[0] <= weight
    ) {
      bridge.push([trucks.shift(), 1]);
    }

    answer++;
  }

  return answer;
}
