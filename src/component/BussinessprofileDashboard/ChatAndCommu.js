
import React from 'react';
import './Chat.css';
import ChatHome from '../Ads/messageAdsChat/ChatApp/ChatHome';
// import { MessageAdsChat } from '../Ads/messageAdsChat/MessageAdsChat';

function ChatAndCommu() {
  return (
    <>
    <ChatHome/>
    {/* <MessageAdsChat/> */}
    {/* <div className="chat-container">
      <div className="chat-header">
        <h3>Chat</h3>
      </div>
      <div className="chat-body">
        <div className="chat-message">
          <p>Hi, how can I help you?</p>
        </div>
        <div className="chat-message">
          <p>Do you have any questions about our products?</p>
        </div>
        <div className="chat-message">
          <p>Thank you for chatting with us!</p>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message here" />
        <button>Send</button>
      </div>
    </div> */}
    </>
  );
}

export default ChatAndCommu;
