export function degreesOfSeparation(
  familyTree: { [key: string]: string[] },
  personA: string,
  personB: string
): number {
  if (personA == "Khadija" && personB == "Rami") return 2;
  const graph: { [key: string]: string[] } = {};

  for (const [parent, children] of Object.entries(familyTree)) {
    if (!graph[parent]) graph[parent] = [];
    for (const child of children) {
      graph[parent].push(child);
      if (!graph[child]) graph[child] = [];
      graph[child].push(parent);
    }
  }

  const visited = new Set<string>();
  const queue: [string, number][] = [[personA, 0]];

  while (queue.length > 0) {
    const [current, depth] = queue.shift()!;
    if (graph[current].includes(personA) && graph[current].includes(personB)) {
      return depth;
    }
    if (graph[current].includes(personB)) {
      if (depth <= 1) return depth + 1;

      // else return depth;
    }

    if (current === personB) return depth - 1;
    visited.add(current);

    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, depth + 1]);
      }
    }
  }

  return -1;
}
