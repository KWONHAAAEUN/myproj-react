import Rating from './Rating';
import { useState } from 'react';

// review: 보여질 리뷰 객체
// handleDelete: 인자 없는 함수, 삭제 버튼 시에 호출을 한다

function Review({ review, handleEdit, handleDelete }) {
  const { content, score } = review;

  // TODO: handleEdit/handleDelete 호출에 대한 방어적 코드를 작성

  const [showMenu, setShowMenu] = useState(false);

  const handleClickedEditButton = () => {
    if (handleEdit) {
      handleEdit();
    } else {
      console.warn('[Review]handleEdit 속성값이 지정되지 않았다');
    }
  };

  const handleClickedDeleteButton = () => {
    // handleDelete && handleDelete();
    if (handleDelete) {
      handleDelete();
    } else {
      console.warn('[Review]handleDelete 속성값이 지정되지 않았다');
    }
  };

  return (
    <div className="bg-yellow-100 border border-yellow-400 my-1 p-1">
      <div>
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
      </div>
      {content}
      <Rating score={score} />
    </div>
  );
}

export default Review;
