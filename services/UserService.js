export async function getUser() {
  const response = await fetch("/api/user/userList");
  return await response.json();
}

export async function getData() {
  const response = await fetch("/api/user/signupNumber");
  return await response.json();
}

export async function getTotalData() {
  const response = await fetch("/api/user/signupNumberTotal");
  return await response.json();
}

// export async function createUser(data) {
//   console.log("data!!!!!!!!!!! : " + data);
//   const response = await fetch(`/user/signIn`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ user: data }),
//   });
//   console.log("fetch data : " + response);
//   return await response.json();
// }
