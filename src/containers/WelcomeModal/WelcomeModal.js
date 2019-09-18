import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createUser, hasErrored, addMessage } from "../../actions";
import { startConversation } from "../../apiCalls";
import "./WelcomeModal.css";

export class WelcomeModal extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      feeling: "",
      error: ""
    };
  }

  //
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { firstName, lastName, feeling } = this.state;
    e.preventDefault();
    if (firstName && lastName && feeling) {
      this.props.createUser({
        id: Date.now(),
        firstName,
        lastName,
        feeling
      });
      this.connectToChatBot();
    } else {
      this.setState({error: "Please fill out all fields"})
    }
  };

  connectToChatBot = async () => {
    try {
      //apicalls: line 1
      const firstMessage = await startConversation(this.state.feeling);
      console.log(firstMessage.message)
      //app: line 19
      // console.log('welcome', this.props)
      this.props.addMessage(firstMessage.message, false);
    } catch ({ message }) {
      //index.js of actions
      this.props.hasErrored(message);
    }
  };

  render() {
    const { firstName, lastName, feeling, error } = this.state;
    return (
      <form className="welcome-modal">
        <legend>Welcome to Survey Bot! Please enter your name.</legend>
        {error && <p className="error-msg">{error}</p>}
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </label>
        <select name="feeling" value={feeling} onChange={this.handleChange}>
          <option value="">How are you feeling currently?</option>
          <option value="happy">Happy</option>
          <option value="tired">Tired</option>
          <option value="stressed">Stressed</option>
          <option value="frustrated">Frustrated</option>
        </select>
        <button onClick={this.handleSubmit}>Take 5 minutes to check in!</button>
      </form>
    );
  }
}

export const mapStateToProps = ({ user, messages }) => ({
  user,
  messages
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ createUser, hasErrored, addMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeModal);
