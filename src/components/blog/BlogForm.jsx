// fieldValues: 현재의 필드 값 내역
// handleFieldChange: 각 필드 값이 변화 시에 호출
// handleSubmit: 인자 없는 함수 Submit 시에 호출

function BlogForm({ fieldValues, handleFieldChange, handleSubmit, loading }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성 값을 지정해주세요');
    }
  };

  return (
    <div>
      {loading && 'Loading ...'}
      <div>
        <input
          name="title"
          value={fieldValues.title}
          onChange={handleFieldChange}
          className="bg-gray-100 border border-gray-400"
          disabled={loading}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={fieldValues.content}
          onChange={handleFieldChange}
          className="bg-gray-100 border border-gray-400"
          disabled={loading}
        />
      </div>
      <div>
        <button
          className="bg-blue-100 cursor-pointer"
          onClick={() => handleClickedSubmitButton()}
          disabled={loading}
        >
          {loading && '로딩 아이콘'}저장
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
