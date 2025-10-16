export default async function BlogPage({ params }) {
  const { id } = params;
  return (
    <>
      <div>Blog Id: {id}</div>
    </>
  );
}
