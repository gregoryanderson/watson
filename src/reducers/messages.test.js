import { messages } from "./messages";

describe("messages", () => {
  it("should return the default state", () => {
    let expected = [];
    let result = messages(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the action's messages", () => {
    let mockAction = {
      type: "ADD_MESSAGE",
      message: "Heyo",
      isUser: true
    };

    let mockStore = [{ message: "hi", isUser: false }];

    let expected = [
      { message: "hi", isUser: false },
      { message: "Heyo", isUser: true }
    ];

    let result = messages(mockStore, mockAction);
    expect(result).toEqual(expected);
  });

  it("should clear the messages", () => {
    let mockAction = {
      type: "CLEAR_MESSAGES"
    };

    let mockStore = [{ message: "hi", isUser: false }];

    let expected = [];

    let result = messages(mockStore, mockAction);
    expect(result).toEqual(expected);
  });
});
