import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// review: 보여질 리뷰 객체
// handleDelete: 인자 없는 함수, 삭제 버튼 시에 호출을 한다

function BlogDetail({ post }) {
  const { title, content } = post;
  const navigate = useNavigate();

  // TODO: handleEdit/handleDelete 호출에 대한 방어적 코드를 작성

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <span
        onClick={() => navigate('/blog/')}
        className="bg-yellow-400 hover:bg-red-400 mr-1"
      >
        메인으로
      </span>
      <div class="max-w-lg mx-auto">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <img
            class="rounded-t-lg"
            src="https://placeimg.com/640/480/animals"
            alt=""
          />

          <div class="p-5">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {title}
            </h5>
            <p class="font-normal text-gray-700 mb-3">{content}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-xs">
        https://tailwindcomponents.com/component/tailwind-css-blog-card
      </div>
    </div>
  );
}

export default BlogDetail;
