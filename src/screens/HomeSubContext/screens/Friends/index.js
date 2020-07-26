import React from "react";
import {View} from "react-native";
import {connect} from "react-redux";

import {styles} from "./styles";
import {UserItem} from "./components";
import {Page} from "../../../../components";

const Friends = ({users}) => {
  return (
    <Page pageTitle="Friends"
      hasScroll>
      
      {users.map((value, index) => (
        <View key={index} style={{
          ...styles.marginTopDefault,
          ...styles.marginHorizontalDefault,
          ...(index === users.length - 1 && {
            ...styles.marginBottomDefault
          })
        }}>
          <UserItem user={value} />
        </View>
      ))}
    </Page>
  );
};

const mapStateToProps = store => ({
  users: store.usersState.users,
});

export default connect(mapStateToProps)(Friends);
