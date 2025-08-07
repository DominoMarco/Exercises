export function convert(input: string): string {
  const numbers: string[] = [
    " _ | ||_|   ", // 0
    "     |  |   ", // 1
    " _  _||_    ", // 2
    " _  _| _|   ", // 3
    "   |_|  |   ", // 4
    " _ |_  _|   ", // 5
    " _ |_ |_|   ", // 6
    " _   |  |   ", // 7
    " _ |_||_|   ", // 8
    " _ |_| _|   ", // 9
  ];
  const lines = input.split("\n");
  if (lines.length < 4) return "?";

  const resultGroups: string[] = [];

  for (let i = 0; i < lines.length; i += 4) {
    const groupLines = lines.slice(i, i + 4);
    if (
      groupLines.length < 4 ||
      groupLines.every((line) => line.trim() === "")
    ) {
      continue;
    }

    const numDigits = Math.floor(groupLines[0].length / 3);
    let groupResult = "";

    for (let d = 0; d < numDigits; d++) {
      let digitStr = "";
      for (let l = 0; l < 4; l++) {
        const line = groupLines[l] || "";
        digitStr += line.slice(d * 3, d * 3 + 3).padEnd(3, " ");
      }

      let found = false;
      for (let j = 0; j < 10; j++) {
        if (numbers[j] === digitStr) {
          groupResult += j.toString();
          found = true;
          break;
        }
      }
      if (!found) groupResult += "?";
    }

    resultGroups.push(groupResult);
  }

  return resultGroups.join(",");
}
