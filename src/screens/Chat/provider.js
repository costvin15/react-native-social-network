import api from "../../services/api";
import {Store} from "../../store";

export const getUserMessages = async (from, to) => {
  const state = Store.getState();
  const users = state.usersState.users;
  const user = users.find((value) => value.id === from);

  const {messages} = await api.get({route: "users", param: from});

  if (typeof messages === "undefined") {
    return [];
  }
  
  let response = messages.find((value) => value.to === to);
  response = response.messages;
  
  response = response.map(value => ({
    _id: value.timeCreated,
    text: value.message,
    createdAt: new Date(value.timeCreated),
    user: {
      _id: from,
      name: user.name,
      avatar: user.profilePhoto,
    },
  }));

  return response;
}

export default {
  getUserMessages
};
