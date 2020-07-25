import React from "react";
import moment from "moment";
import {Card, Paragraph, Avatar} from "react-native-paper";

const Post = ({title, content, user, date, ...props}) => {
  return (
    <Card {...props}>
      <Card.Title title={title}
        subtitle={moment(date).calendar()}
        left={props => <Avatar.Image {...props} source={{uri: user?.profilePhoto}}  />} />
      <Card.Content>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Post;
