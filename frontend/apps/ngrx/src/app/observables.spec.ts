import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

describe('Observables Examples', () => {

  it('Should allow subscriptions to pass data through', () => {
    const result: Array<number> = [];
    of([1, 2, 3]).subscribe(x => result.push(...x));
    expect(result).toEqual([1, 2, 3]);
  });

  test('Pipe operator should be able to modify values', () => {
    const result: Array<number> = [];
    of([1, 2, 3]).pipe(map(x => x.map(x => x * 2))).subscribe(x => result.push(...x));
    expect(result).toEqual([2, 4, 6]);
  });

  test('Marble Testing Example', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    testScheduler.run((helpers) => {

      const {cold, expectObservable} = helpers;
      const values = {a: 1, b: 2, c: 3};
      const source = cold('-a-b-c-|', values);

      const expectedMarble = '-x-y-z-|';
      const expectedValues = {x: 2, y: 3, z: 4};

      // Second way to test. Less clean in my opinion
      // const expectedMarble = '-0-1-2-|';
      // const expectedValues = [2, 3, 4];

      const result = source.pipe(map(x => x + 1));

      expectObservable(result).toBe(expectedMarble, expectedValues);
    });

  });

  test('Marble Testing Example 2', () => {
    const values = {a: 1, b: 2};
    // no place to get cold from
    // const source = cold('')
  });

});
