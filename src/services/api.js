const HOST = "http://my-json-server.typicode.com/costvin15/react-native-social-network";

const request = async ({route, param = null}) => {
  let url = `${HOST}/${route}`;
  
  if (param) {
    url += `/${param}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default {
  get: request,
};