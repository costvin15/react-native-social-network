import React from "react";
import {Card, Paragraph, Avatar} from "react-native-paper";

const Post = ({title, content, user, ...props}) => {
  return (
    <Card {...props}>
      <Card.Title title={title}
        left={props => <Avatar.Image {...props} source={{uri: user?.profilePhoto}}  />} />
      <Card.Content>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Post;
