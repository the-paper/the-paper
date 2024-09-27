
type Rect = {
  width: number;
  height: number;
}

type Paper = Rect & {
  kind: 'Paper';
  weight: number;
}

type Block = Rect & {
  kind: 'Block';
  material: 'Wood' | 'Linoleum' | 'rubber';
}

type Margin = {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export type Calculator = (p: Paper, b: Block) => Promise<Margin>

const calculateMargin: Calculator = (p, b) => {
  return new Promise<Margin>((resolve, reject) => {
    if (p.height > b.height && p.width > b.width) {
      const capHeight = (p.height - b.height) / 2
      const capWidth = (p.width - b.width) / 2

      resolve({
        top: capHeight,
        bottom: capHeight,
        left: capWidth,
        right: capWidth,
      })
    } else {
      reject(`This Paper(${p.width}x${p.height}) is too small for a Block(${b.width}x${b.height})`)
    }
  })
}

export type Rotate = <T extends Rect>(t: T) => T

const rotatePaper: Rotate = (rect) => {
  const { width, height } = rect
  rect.height = width
  rect.height = height

  return rect
}

let block: Block = {
  kind: 'Block',
  material: 'Linoleum',
  width: 300,
  height: 400,
}

block = rotatePaper(block)

