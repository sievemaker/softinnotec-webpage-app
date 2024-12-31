import { VatIDFormatterPipe } from './vat-idformatter.pipe';

describe('VatIDFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new VatIDFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
