import { act } from "react-dom/test-utils"
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector"

let dummyCollection = null,
    result = null,
    result2 = null;

afterEach(() => {
  dummyCollection = null;
  result = null;
  result2 = null;
})

describe(('Flatten Collection'), () => {
  it('should collection become empty array when input null', () => {
    act(() => {
      result = selectCollectionsForPreview(null);
    })

    expect(result).toEqual([]);
  })

  it('should collection become empty array when input emptry array', () => {
    act(() => {
      result = selectCollectionsForPreview([]);
    })

    expect(result).toEqual([]);
  })

  it('should collection become empty array when input undefined', () => {
    act(() => {
      result = selectCollectionsForPreview({});
    })

    expect(result).toEqual([]);
  })

  it('should collection become empty array when input unexpected type (string/number)', () => {
    expect.assertions(2);

    act(() => {
      result = selectCollectionsForPreview(1);
      result2 = selectCollectionsForPreview('a');
    })

    expect(result).toEqual([]);
    expect(result2).toEqual([]);
  })

  it('should collection become array with object', () => {
    expect.assertions(3);

    dummyCollection = {
      a: { title: 'Womens', items: [] },
      b: { title: 'Hats', items: [] },
      c: { title: 'Sneakers', items: [] },
      d: { title: 'Jackets', items: [] },
      e: { title: 'Mens', items: [] },
    }

    act(() => {
      result = selectCollectionsForPreview(dummyCollection);
      result2 = selectCollectionsForPreview(dummyCollection);
    })

    expect(result.length).toEqual(5);
    expect(result2.some(val=> val.title === 'Womens')).toEqual(true);
    expect(result2.some(val=> val.title === 'hehe')).toEqual(false);
  })
})