import React, { Component } from "react";
import Message from "../Message";
import "./ChatHistory.scss";

class ChatHistory extends Component {
    render() {
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map(function ( msg, i ){ return <Message message={msg.data}  key={i} />} );
      
        return (
          <div className='ChatHistory'>
            <h2>Chat History</h2>
            {messages}
          </div>
        );
      };
}

export default ChatHistory;