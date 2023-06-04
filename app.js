import axios from "axios";

export default async function getApi(i) {
  const user = await axios(`https://jsonplaceholder.typicode.com/users/${i}`);
  const post = await axios(`https://jsonplaceholder.typicode.com/posts/${i}`);
  user.posts = post.data;
  console.log(user);
}
