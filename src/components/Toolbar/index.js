import React from "react";
import {Appbar} from "react-native-paper";

const Toolbar = ({
  title,
  canGoBack = false,
  goBack = () => {},
  actions = [],
}) => {
  return (
    <Appbar.Header>
      {canGoBack && (
        <Appbar.BackAction onPress={goBack} />
      )}
      <Appbar.Content title={title} />
      {actions.map((value, index) => (
        <Appbar.Action key={index} icon={value.icon} onPress={value.onPress} />
      ))}
    </Appbar.Header>
  );
};

export default Toolbar;
