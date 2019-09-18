import { user } from "./user";

describe("user", () => {
  it("should return the default state", () => {
    let expected = null;
    let result = user(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should create a user", () => {
    let mockAction = {
      type: "CREATE_USER",
      user: {
        id: 1568665187737,
        firstName: "Travis",
        lastName: "Rollins",
        feeling: "tired"
      }
    };

    let mockStore = null;
    let expected = {
      id: 1568665187737,
      firstName: "Travis",
      lastName: "Rollins",
      feeling: "tired"
    };

    let result = user(mockStore, mockAction);
    expect(result).toEqual(expected);
  });

  it("should remove a user", () => {
    let mockAction = {
      type: "REMOVE_USER"
    };

    let mockStore = {
      user: {
        id: 1568665187737,
        firstName: "Travis",
        lastName: "Rollins",
        feeling: "tired"
      }
    };

    let expected = null;
    let result = user(mockStore, mockAction);
    expect(result).toEqual(expected);
  });
});
