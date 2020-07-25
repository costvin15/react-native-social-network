import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {Page} from "../../components";
import {Profile} from "./components";
import {styles} from "./styles";

const Friend = ({route, navigation, users}) => {
  const {userId} = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const filtered = users.find((value) => value.id === userId);
    setUser(filtered);
  }, [users, userId, setUser]);

  return (
    <Page
      pageTitle={user?.name}
      canGoBack={navigation.canGoBack()}
      goBack={navigation.goBack}
      actions={[{
        icon: "forum",
        onPress: () => navigation.push("Chat", {
          userId,
        }),
      }]}
      hasScroll>
      <Profile 
        user={user}
        style={{
          ...styles.marginHorizontalDefault,
          ...styles.marginVerticalDefault,
        }}
      />
    </Page>
  );
};

const mapStateToProps = store => ({
  users: store.usersState.users,
});

export default connect(mapStateToProps)(Friend);
