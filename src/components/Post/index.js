import React from "react";
import {Card, Paragraph} from "react-native-paper";

const Post = ({title, content}) => {
  return (
    <Card>
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Post;
