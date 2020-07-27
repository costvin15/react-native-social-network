import React from "react";
import {View} from "react-native";
import {Card, Avatar, Title, Caption} from "react-native-paper";
import moment from "moment";

import {styles} from "./styles";

const UserItem = ({user, ...props}) => {
  return (
    <Card {...props} style={{
      ...styles.paddingHorizontalDefault,
      ...styles.paddingVerticalDefault,
    }}>
      <View style={{...styles.flexDirectionRow}}>
        <Avatar.Image source={{uri: user.profilePhoto}} />
        <View style={{
          ...styles.paddingHorizontalDefault,
          ...styles.justifyContentCenter,
        }}>
          <Title>{user.name}</Title>
          <Caption>{moment(user.lastAccess).calendar()}</Caption>
        </View>
      </View>
    </Card>
  );
};

export default UserItem;
