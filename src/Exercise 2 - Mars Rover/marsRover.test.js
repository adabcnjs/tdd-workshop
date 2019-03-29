import { Rover, Direction, Position } from './marsRover';

describe("A rover facing North receives the command Forward", () => {
  const initialPosition = new Position(1, 1);
  const initialDirection = Direction.North;
  const rover = new Rover(initialPosition, initialDirection);

  rover.execute('F');

  it("moves one position up in Y axis", () => {
    expect(rover.position).toEqual(new Position(1, 2));
  });

  it("does not change its direction", () => {
    expect(rover.direction).toBe(Direction.North);
  });
});