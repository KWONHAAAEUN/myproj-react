import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from 'components/blog/BlogList';

function PageBlog() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://localhost:8000/blog/api/posts/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        setPostList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Blog List</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400 mr-1"
      >
        새로고침
      </button>

      <button
        onClick={() => navigate('/blog/new/')}
        className="bg-blue-400 hover:bg-slate-400"
      >
        새 포스팅 작성
      </button>

      <div className="">
        {postList.map((post) => (
          <BlogList key={post.id} post={post} />
        ))}
      </div>

      <hr />
      <DebugStates loading={loading} error={error} postList={postList} />
    </div>
  );
}

export default PageBlog;
