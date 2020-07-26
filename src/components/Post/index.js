import React from "react";
import {TouchableOpacity} from "react-native";
import moment from "moment";
import {Card, Paragraph, Avatar} from "react-native-paper";

const Post = ({
  title = "",
  content = "",
  user = null,
  date = Date.now(),
  onProfilePhotoTap = () => {},
  ...props}) => {
  return (
    <Card {...props}>
      <Card.Title title={title}
        subtitle={moment(date).calendar()}
        left={props => 
          ( 
            <TouchableOpacity onPress={onProfilePhotoTap}>
              <Avatar.Image {...props} source={{uri: user?.profilePhoto}}  />
            </TouchableOpacity>
          )
        } />
      <Card.Content>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Post;
