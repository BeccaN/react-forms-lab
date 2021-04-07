import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageInput: ""
    };
  }

  handleMessage = (e) => {
    this.setState({
      messageInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessage} value={this.state.messageInput} name="message" id="message" />
        <p>{this.props.maxChars - this.state.messageInput.length} characters left...</p>
      </div>
    );
  }
}

export default TwitterMessage;
