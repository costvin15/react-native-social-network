import React from "react";
import {View, ScrollView} from "react-native";
import Toolbar from "../Toolbar";

import styles from "./styles";

const Page = ({pageTitle, hasScroll = false, children}) => {
  return (
    <View style={styles.flex}>
      <Toolbar title={pageTitle} />
      {console.log(styles)}
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
