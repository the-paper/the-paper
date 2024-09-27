

type Bottle = {
  // country: 'Scotch' | 'Irish' | 'American' | 'Canadian' | 'Japanese';
  statute: '';
  // region?: 'Islay' | 'Speyside' | 'Islands' | 'Highland' | 'Lowland' | 'Cambeltown'
  distillery: string;
  name: string;
  flavor: string[];
  owner: string;
  alcochol: number;
  volume: number;
  price: number | 'open price';
}

type Scotch = Bottle & {
  kind: 'Scotch';
  region: 'Islay' | 'Speyside' | 'Islands' | 'Highland' | 'Lowland' | 'Cambeltown'
}

type Irish = Bottle & {
  kind: 'Irish';
}

type American = Bottle & {
  kind: 'American';
}

type Canadian = Bottle & {
  kind: 'Canadian';
}

type Japanese = Bottle & {
  kind: 'Japanese';
}

type Whiskey = Scotch | Irish | American | Canadian | Japanese

const we: Whiskey[] = [];
const first = we[0];

if (first.kind === 'Scotch') {
  console.log(first.region)
}
