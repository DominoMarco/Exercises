const animals = [
  {
    name: 'fly',
    comment: '',
  },
  {
    name: 'spider',
    comment: 'It wriggled and jiggled and tickled inside her.',
    extra: ' that wriggled and jiggled and tickled inside her',
  },
  {
    name: 'bird',
    comment: 'How absurd to swallow a bird!',
  },
  {
    name: 'cat',
    comment: 'Imagine that, to swallow a cat!',
  },
  {
    name: 'dog',
    comment: 'What a hog, to swallow a dog!',
  },
  {
    name: 'goat',
    comment: 'Just opened her throat and swallowed a goat!',
  },
  {
    name: 'cow',
    comment: "I don't know how she swallowed a cow!",
  },
  {
    name: 'horse',
    comment: "She's dead, of course!",
  },
];

export function verse(n: number): string {
  const index = n - 1;
  const animal = animals[index];
  let result = `I know an old lady who swallowed a ${animal.name}.\n`;

  if (animal.comment) {
    result += `${animal.comment}\n`;
  }

  if (animal.name === 'horse') return result;

  for (let i = index; i > 0; i--) {
    const current = animals[i];
    const prev = animals[i - 1];

    let line = `She swallowed the ${current.name} to catch the ${prev.name}`;
    if (prev.extra) line += prev.extra;
    line += '.\n';
    result += line;
  }

  result += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  return result;
}

export function verses(start: number, end: number): string {
  const all = [];
  for (let i = start; i <= end; i++) {
    all.push(verse(i).trimEnd());
  }
  return all.join('\n\n') + '\n';
}
