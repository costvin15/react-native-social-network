import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {Card} from "react-native-paper";

import {styles} from "./styles";
import {api} from "../../../../services";
import {Page, Post} from "../../../../components";
import {updatePosts, updateUsers} from "../../../../actions";

const Home = ({navigation, posts, users, updatePosts, updateUsers}) => {
  const [timeline, setTimeline] = useState(posts);
  const [profiles, setProfiles] = useState(users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await api.get({route: "posts"});
      updatePosts(response);
    })();
  }, [updatePosts]);

  useEffect(() => {
    (async () => {
      const response = await api.get({route: "users"});
      updateUsers(response);
    })();
  }, [updateUsers]);

  useEffect(() => {
    setTimeline(posts);
  }, [posts]);

  useEffect(() => {
    setProfiles(users);
    setLoading(false);
  }, [users]);

  const getUser = id => {
    return profiles.find((value) => value.id === id);
  };

  return (
    <Page pageTitle="Home" hasScroll={!loading}>
      {(loading && (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width="100%">
            <SkeletonPlaceholder.Item margin={15} height={150} />
            <SkeletonPlaceholder.Item margin={15} height={150} />
            <SkeletonPlaceholder.Item margin={15} height={150} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      )) || (
        timeline.map((item, index) => (
          <Post key={index}
            title={item.title}
            content={item.content}
            user={getUser(item.userid)}
            date={item.timeCreated}
            onProfilePhotoTap={() => {
              navigation.navigate("Friend", {userId: item.userid});
            }}
            style={{
              ...styles.marginHorizontalDefault,
              ...styles.marginTopDefault,
              ...(index === timeline.length - 1 && (styles.marginBottomDefault) || ({}))
            }} />
        ))
      )}
    </Page>
  );
};

const mapStateToProps = store => ({
  posts: store.postsState.posts,
  users: store.usersState.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updatePosts,
  updateUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
