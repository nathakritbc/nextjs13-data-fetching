import Clientpage from "../client/page";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const posts = await getData();

  return (
    <main>
      <h1>Posts List</h1>
      <Clientpage posts={posts} />
    </main>
  );
}
