// testing redux road

const wagonReducer = require('./index');

describe('wagonReducer', () => {
  it('should return the initial state', () => {
    expect(wagonReducer(undefined, {})).toEqual({
      supplies: 100,
      distance: 0,
      days: 0
    })
  });
});
