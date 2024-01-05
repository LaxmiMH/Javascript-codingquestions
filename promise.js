function getData() {
  const response = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not able to fetch the data!!!");
        }
        const data = res.json();
        return resolve(data);
      })
      .catch((err) => reject(err));
  });
  return response;
}
const data = getData();
data.then((data) => console.log(data)).catch((err) => console.log(err));

//using asyn and await

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
}
const users = getUsers();
users.then((data) => console.log(data)).catch((err) => console.log(err));

//using fetch + newpromise + asynch and await

const getPosts = async () => {
  const response = await new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not able to fetch the data!!!");
        }
        resolve(res.json());
      })
      .catch((err) => reject(err));
  });
  return response;
};
const posts = getPosts();

posts.then((data) => console.log(data)).catch((err) => console.log(err));
