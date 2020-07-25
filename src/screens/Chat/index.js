import React from "react";
import {Page} from "../../components";
import {GiftedChat} from "react-native-gifted-chat";

const Chat = ({navigation}) => {
  return (
    <Page
      pageTitle="Chat"
      canGoBack={navigation.canGoBack()}
      goBack={navigation.goBack}>
      <GiftedChat messages={[]} />
    </Page>
  );
};

export default Chat;