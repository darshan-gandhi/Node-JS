import { CustomLowercasePipe } from './custom-lowercase.pipe';

describe('CustomLowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomLowercasePipe();
    expect(pipe).toBeTruthy();
  });
});
