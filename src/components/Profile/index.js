import React from "react";
import {View, TouchableOpacity, Linking, Image} from "react-native";
import {
  Card,
  Avatar,
  Title,
  Caption,
  IconButton,
} from "react-native-paper";
import moment from "moment";

import {styles} from "./styles";

const Profile = ({
  user = null,
  ...props
}) => {
  return (
    <View {...props}>
      <Card style={{
        ...styles.paddingHorizontalDefault,
        ...styles.paddingVerticalDefault,
        ...styles.marginBottomDefault,
      }}>
        <View style={{...styles.flexDirectionRow}}>
          <View style={{...styles.alignItemsCenter, ...styles.justifyContentCenter}}>
            <Avatar.Image source={{uri: user?.profilePhoto}} />
          </View>

          <View style={{...styles.paddingHorizontalDefault}}>
            <Title>{user?.name}</Title>
            <View style={{...styles.flexDirectionRow, ...styles.alignItemsCenter}}>
              <IconButton icon="comment-quote" size={15} style={{...styles.noMargin}} />
              <Caption>{user?.status}</Caption>
            </View>
            <View style={{...styles.flexDirectionRow, ...styles.alignItemsCenter}}>
              <IconButton icon="email" size={15} style={{...styles.noMargin}} />
              <Caption>{user?.email}</Caption>
            </View>
            <View style={{...styles.flexDirectionRow, ...styles.alignItemsCenter}}>
              <IconButton icon="at" size={15} style={{...styles.noMargin}} />
              <Caption>{user?.username}</Caption>
            </View>
          </View>
        </View>

        <Caption>Last access: {moment(user?.lastAccess).calendar()}</Caption>
      </Card>

      <Card style={{
        ...styles.paddingHorizontalDefault,
        ...styles.paddingVerticalDefault,
        ...styles.marginBottomDefault,
      }}>
        <Title>Social networks</Title>
        {user?.socialnetworks.map((value, index) => (
          <TouchableOpacity key={index} onPress={() => Linking.openURL(value.url)}>
            <View style={{...styles.flexDirectionRow, ...styles.alignItemsCenter}}>
              <IconButton icon={value.name.toLowerCase()} />
              <Title>{value.name}</Title>
            </View>
          </TouchableOpacity>
        ))}
      </Card>

      <Card style={{
        ...styles.paddingHorizontalDefault,
        ...styles.paddingVerticalDefault,
      }}>
        <Title>Photos</Title>
        <View style={{...styles.marginTopDefault}}>
          {user?.photos.map((value, index) => (
            <Image key={index} source={{uri: value}} style={{height: 200}} />
          ))}
        </View>
      </Card>
    </View>
  );
};

export default Profile;
