import React from "react";
import {View, ScrollView} from "react-native";
import Toolbar from "../Toolbar";

import styles from "./styles";

const Page = ({
  pageTitle = "",
  hasScroll = false,
  children = <></>,
  canGoBack = false,
  goBack = () => {},
  actions = [],
}) => {
  return (
    <View style={styles.flex}>
      <Toolbar
        title={pageTitle}
        canGoBack={canGoBack}
        goBack={goBack}
        actions={actions} />
      {hasScroll && (
        <ScrollView contentContainerStyle={{ ...styles.flexGrow }}>
          {children}
        </ScrollView>
      ) || (
        <>
          {children}
        </>
      )}
    </View>
  );
};

export default Page;
