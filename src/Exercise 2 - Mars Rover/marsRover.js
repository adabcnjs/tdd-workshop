export const Direction = {
  North: 'N'
};

export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  x() {
    return this.x
  }

  y() {
    return this.y
  }
}


export class Rover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  position() {
    return this.position;
  }

  direction() {
    return this.direction;
  }

  execute() {
    this.position = new Position(1, 2);
  }
}