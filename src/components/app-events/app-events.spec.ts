import { AppEvents } from './app-events';

describe('app', () => {
  it('builds', () => {
    expect(new AppEvents()).toBeTruthy();
  });
});
