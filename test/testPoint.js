const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('Should give the distance to given point', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(0, 1);

    let actual = point1.distance(point2);
    assert.deepStrictEqual(actual, 1);

    actual = point1.distance(point1);
    assert.deepStrictEqual(actual, 0);
  });

  it('Should validate points having same instance and state', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(0, 0);
    assert.ok(point1.equals(point2));
  });
});
