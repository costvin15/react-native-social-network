import React from "react";
import {View, TouchableOpacity} from "react-native";
import {Card, Avatar, Title, Caption} from "react-native-paper";
import moment from "moment";

import {styles} from "./styles";

const UserItem = ({
  user = {},
  onPress = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
            <Caption>{moment(user?.lastAccess).calendar()}</Caption>
            <Caption>Status: {user?.status}</Caption>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default UserItem;
