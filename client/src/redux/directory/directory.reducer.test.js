import directoryReducer, { initialState } from './directory.reducer';

describe('directoryReducer', () => {
  it('should return initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(initialState);
  });
});