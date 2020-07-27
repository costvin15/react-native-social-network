import React from "react";
import {Page} from "../../components";

const EditProfile = ({navigation}) => {
  return (
    <Page pageTitle="Edit profile"
      canGoBack={navigation.canGoBack()}
      goBack={navigation.goBack}>
      
    </Page>
  );
};

export default EditProfile;
