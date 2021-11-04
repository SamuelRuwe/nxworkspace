import { SsnFormatPipe } from './ssn-format.pipe';

describe('SsnFormatPipe', () => {

  const pipe = new SsnFormatPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms empty input into "XXX-XX-XXXX" ', () => {
    expect(pipe.transform()).toBe("XXX-XX-XXXX");
  })

  it('transforms 4-digit input into partial SSN. ex: "XXX-XX-1234"', () => {
    expect(pipe.transform(1234)).toBe("XXX-XX-1234");
  })

  it('transforms 9-digit input into full SSN with dashes', () => {
    expect(pipe.transform(123456789)).toBe("123-45-6789");
  })

  it('transforms any other input into fully masked ssn', () => {
    expect(pipe.transform(1234567890)).toBe("XXX-XX-XXXX");
  })

});
