import { EmailFormatterPipe } from './email-formatter.pipe';

describe('EmailFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
