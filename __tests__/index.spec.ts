import { adultWords } from '../src';
import unfilteredWords from '../src/adult-words.json';

describe('AdultWords', () => {
  it('should return unique adult words', (done) => {
    const words = adultWords;
    const unfiltered = unfilteredWords;
    expect(words).toHaveLength(new Set(unfiltered).size);
    done();
  });
});
