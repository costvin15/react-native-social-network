import React, {useState, useEffect} from "react";
import {View} from "react-native";
import {
  TextInput,
  Avatar,
  Button,
  Snackbar,
} from "react-native-paper";

import {styles} from "./styles";
import {Page} from "../../components";

const EditProfile = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);
  const {user} = route.params;
  const [name, setName] = useState(user.name); 
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);

  return (
    <Page pageTitle="Edit profile"
      canGoBack={navigation.canGoBack()}
      goBack={navigation.goBack}>
      
      <View style={{
        ...styles.marginHorizontalDefault,
        ...styles.marginVerticalDefault,
        ...styles.flexGrow,
      }}>
        <Avatar.Image source={{uri: user.profilePhoto}}
          style={{
            ...styles.marginHorizontalDefault,
            ...styles.marginVerticalDefault,
            ...styles.alignSelfCenter,
          }} />
        
        <TextInput label="Full name" value={name} onChangeText={text => setName(text)} />
        <TextInput label="Email" value={email} onChangeText={text => setEmail(text)} style={{
          ...styles.marginVerticalDefault
        }} />
        <TextInput label="Status" value={status} onChangeText={text => setStatus(text)} />
        <Button mode="contained"
          onPress={() => {
            setVisible(true);
          }}
          style={{
            ...styles.marginVerticalDefault
          }}>
          Enviar
        </Button>

        <Snackbar visible={visible}
          onDismiss={() => setVisible(!visible)}>
          Ocorreu um erro.
        </Snackbar>
      </View>
    </Page>
  );
};

export default EditProfile;
