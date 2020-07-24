import React, {useState, useEffect} from "react";
import {FlatList} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Page, Post} from "../../components";

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
    <Page pageTitle="Home" hasScroll>
      {timeline.map((item, index) => (
        <Post key={index}
          title={item.title}
          content={item.content} />
      ))}
    </Page>
  );
};

const mapStateToProps = store => ({
  posts: store.postsState.posts,
});

const mapDispatchToProps = dispatch => bindActionCreators({updatePosts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
