import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Page, Profile as ProfileComponent} from "../../../../components";
import {styles} from "./styles";

const Profile = ({currentUser, navigation}) => {
  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <Page pageTitle={currentUser.name}
      actions={[
        {
          icon: "pencil",
          onPress: () => {
            navigation.push("EditProfile", {
              user: currentUser,
            });
          },
        }
      ]}
      hasScroll>
      <ProfileComponent user={currentUser}
        style={{
          ...styles.marginHorizontalDefaut,
          ...styles.marginVerticalDefault
        }} />
    </Page>
  );
};

const mapStateToProps = store => ({
  currentUser: store.usersState.users.find((value) => value.id === 1),
});

export default connect(mapStateToProps)(Profile);
