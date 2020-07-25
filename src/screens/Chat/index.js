import React, {useState, useEffect} from "react";
import {Page} from "../../components";
import {GiftedChat} from "react-native-gifted-chat";

import Provider from "./provider";

const Chat = ({route, navigation}) => {
  const {userId} = route.params;

  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    (async () => {
      // For convenience, I always assume that the user who is logged in has an id equal to 1
      const loggedUserId = 1;
      const received = await Provider.getUserMessages(userId, loggedUserId);
      const sent = await Provider.getUserMessages(loggedUserId, userId);
      setMessages([...received, ...sent]);
    })();
  }, []);
  
  return (
    <Page
      pageTitle="Chat"
      canGoBack={navigation.canGoBack()}
      goBack={navigation.goBack}>
      <GiftedChat messages={messages} />
    </Page>
  );
};

export default Chat;