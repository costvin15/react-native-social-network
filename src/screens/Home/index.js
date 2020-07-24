import React, {useState, useEffect} from "react";
import {Text} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {View} from "react-native";
import {Appbar} from "react-native-paper";

import {api} from "../../services";
import {updatePosts} from "../../actions";

const Home = ({posts, updatePosts}) => {
  const [timeline, setTimeline] = useState(posts);

  useEffect(() => {
    (async() => {
      const response = await api.get({route: "posts"});
      updatePosts(response);
    })();
  }, [updatePosts]);

  useEffect(() => {
    setTimeline(posts);
  }, [posts]);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
    </View>
  );
};

const mapStateToProps = store => ({
  posts: store.postsState.posts,
});

const mapDispatchToProps = dispatch => bindActionCreators({updatePosts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
