function BlogList({ post, onClick, handleEdit, handleDelete }) {
  const { title, content } = post;

  const handleClickedEditButton = () => {
    if (handleEdit) {
      handleEdit();
    } else {
      console.warn('[Review]handleEdit 속성값이 지정되지 않았다');
    }
  };

  const handleClickedDeleteButton = () => {
    if (handleDelete) {
      handleDelete();
    } else {
      console.warn('[Review]handleDelete 속성값이 지정되지 않았다');
    }
  };

  return (
    <div className="">
      <div>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://placeimg.com/640/480/animals"
            />
          </div>
          <div>
            <h2
              className="text-gray-800 text-3xl font-semibold"
              onClick={onClick}
            >
              {title}
            </h2>
            <p className="mt-2 text-gray-600" onClick={onClick}>
              {content}
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-xs font-medium text-indigo-500">
              <span
                onClick={() => handleClickedEditButton()}
                className="hover:text-blue-400 cursor-pointer mr-1"
              >
                수정
              </span>
              <span
                onClick={() => handleClickedDeleteButton()}
                className="hover:text-red-400 cursor-pointer"
              >
                삭제
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
