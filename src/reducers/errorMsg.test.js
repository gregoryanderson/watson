import { errorMsg } from "./errorMsg";

describe("errorMsg", () => {
  it("should return the default state", () => {
    let expected = '';
    let result = errorMsg(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error message', () => {
    let mockAction = {
        type: "HAS_ERRORED",
        errorMsg: 'There is an error'
      };
    let expected = 'There is an error'

    let result = errorMsg('', mockAction)
    expect(result).toEqual(expected)
  })
});
