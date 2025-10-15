export default function BlogPage({ params }) {
  const { id, title, description } = params;
  return (
    <>
      <div>Blog Id: {params.id}</div>
      <div>Blog Title: {title}</div>
      <div>Blog Description: {description}</div>
    </>
  );
}
