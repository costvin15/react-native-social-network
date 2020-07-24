const HOST = "http://my-json-server.typicode.com/costvin15/fakedatabase";

const request = async ({route, param}) => {
  const response = await fetch(`${HOST}/${route}`);
  const data = await response.json();
  return data;
};

export default {
  get: request,
};