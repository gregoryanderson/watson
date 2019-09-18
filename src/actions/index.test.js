import {
    createUser,
    clearMessages,
    addMessage
} from './index'

describe("Actions", () => {
    it("should have a type of CREATE_USER", () => {
      let user = {
            id: 1568665187737,
            firstName: "Travis",
            lastName: "Rollins",
            feeling: "tired"
      };
  
      let expectedAction = {
        type: "CREATE_USER",
        user
      };
  
      expect(createUser(user)).toEqual(expectedAction);
    });

    it("should have a type of CLEAR_MESSAGES", () => {
  
      let expectedAction = {
        type: "CLEAR_MESSAGES",
      };
  
      expect(clearMessages()).toEqual(expectedAction);
    });

    it("should have a type of ADD_MESSAGES", () => {
      let mockMessage = 'hi';
      let mockUser = true
      let expectedAction = {
        type: "ADD_MESSAGE",
        message: mockMessage,
        isUser: mockUser
      };
  
      expect(addMessage(mockMessage, mockUser)).toEqual(expectedAction);
    });
})