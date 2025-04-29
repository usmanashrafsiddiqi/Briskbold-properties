import React from 'react';
import 'react-whatsapp-widget/dist/index.css';
import { WhatsAppWidget } from 'react-whatsapp-widget'; 

const WhatsAppChat = () => {
  return (
    <WhatsAppWidget
      phoneNumber="+971569242326"
      message="Welcome! Looking to buy or rent a property? Let us know how we can assist you!"
      companyName="BriskBold-Properties"
      textReplyTime="Usually replies in a few minutes"
    /> //comnt
  );
};

export default WhatsAppChat;
