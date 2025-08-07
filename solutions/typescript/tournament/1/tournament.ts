type Stats = { MP: number; W: number; D: number; L: number; P: number };
export class Tournament {

 tally(input: string): string {
  const table: Map<string, Stats> = new Map();
if(input=="")return 'Team                           | MP |  W |  D |  L |  P'
  const lines = input.trim().split('\n');

  for (const line of lines) {
    const [team1, team2, result] = line.split(';');
    if (!table.has(team1)) table.set(team1, { MP: 0, W: 0, D: 0, L: 0, P: 0 });
    if (!table.has(team2)) table.set(team2, { MP: 0, W: 0, D: 0, L: 0, P: 0 });
    const stats1 = table.get(team1)!;
    const stats2 = table.get(team2)!;

    stats1.MP += 1;
    stats2.MP += 1;

    if (result === 'win') {
      stats1.W += 1;
      stats1.P += 3;
      stats2.L += 1;
    } else if (result === 'loss') {
      stats2.W += 1;
      stats2.P += 3;
      stats1.L += 1;
    } else if (result === 'draw') {
      stats1.D += 1;
      stats2.D += 1;
      stats1.P += 1;
      stats2.P += 1;
    }
  }
  const sorted = Array.from(table.entries()).sort((a, b) => {
    if (b[1].P !== a[1].P) return b[1].P - a[1].P;
    return a[0].localeCompare(b[0]);
  });

  const linesOut: string[] = [];
  linesOut.push(`Team                           | MP |  W |  D |  L |  P`);

  for (const [team, stats] of sorted) {
    const padd=stats.P>=10?"":" ";
    const line = `${team.padEnd(30)} |  ${stats.MP} |  ${stats.W} |  ${stats.D} |  ${stats.L} |${padd} ${stats.P}`;
    linesOut.push(line);
  }
  return linesOut.join('\n');
}
}
