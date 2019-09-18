import {
    createUser,
    clearMessages,
    addMessage,
    hasErrored,
    removeUser
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

    it("should have a type of HAS_ERRORED", () => {
      let mockMessage = 'oh no';
      let expectedAction = {
        type: "HAS_ERRORED",
        errorMsg: 'oh no'
      };
      
      expect(hasErrored(mockMessage)).toEqual(expectedAction);
    });

    it("should have a type of REMOVE_USER", () => {
      let expectedAction = {
        type: "REMOVE_USER"
      };
      
      expect(removeUser()).toEqual(expectedAction);
    });
})