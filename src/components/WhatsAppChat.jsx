// src/components/WhatsAppChat.js
import React from 'react';
import 'react-whatsapp-widget/dist/index.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';

const WhatsAppChat = () => {
  return (
    <div>
      {/* WhatsAppWidget is a component that renders the floating button */}
      <WhatsAppWidget
        phoneNumber="+971569242326" // Replace with your WhatsApp number including the country code
        message="Welcome! Looking to buy or rent a property? Let us know how we can assist you!" // Default message to appear in the chat input
        companyName="BriskBold-Properties"
        textReplyTime="Usually replies in a few minutes"
      />
    </div>
  );
};

export default WhatsAppChat;
