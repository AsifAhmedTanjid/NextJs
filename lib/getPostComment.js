export default async function getPostComment(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!result.ok) {
    throw new Error("There was an error fetching data");
  }

  return result.json();
}
