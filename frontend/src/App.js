// App.js
import React, { Component } from "react";
 
import { Widget, addResponseMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import "./App.css";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import { connect, sendMsg } from "./api";
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    addResponseMessage('Hi there. Welcome to Sastec Support Chat!');
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }
  
  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    sendMsg(newMessage);
  };

  render() {
    return ( 
     <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <Widget 
          handleNewUserMessage={this.handleNewUserMessage}
          title="Des questions ? Discutons !"
          subtitle="Réponse sous 1 heure"
          senderPlaceHolder="Entrez votre message"
          titleAvatar={logo}
        />
      </div>
    );
  }
}

export default App;