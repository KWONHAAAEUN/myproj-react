function BlogList({ post, onClick }) {
  const { title, content } = post;

  return (
    <div
      onClick={onClick}
      className="bg-yellow-100 border border-yellow-400 my-1 p-1"
    >
      {title}
    </div>
  );
}

export default BlogList;
