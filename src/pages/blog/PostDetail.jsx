import Axios from 'axios';
import BlogDetail from 'components/blog/BlogDetail';
import DebugStates from 'components/DebugStates';
import useFieldValuesBlog from 'hook/useFieldValuesBlog';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PostDeatil() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postList, setPostList] = useState({
    title: '',
    content: '',
  });
  const navigate = useNavigate();

  const { postId } = useParams();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = `http://localhost:8000/blog/api/posts/${postId}/`;

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

  const deletePost = (deletingPost) => {
    const url = `http://localhost:8000/blog/api/posts/${postId}/`;

    setLoading(true);
    setError(null);

    Axios.delete(url)
      .then(() => {
        console.log('삭제 성공');
        setPostList((prevReviewList) =>
          prevReviewList.filter((post) => post.id !== postId),
        );
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Post</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <div className="">
        <BlogDetail post={postList} handleDelete={deletePost} />
      </div>

      <hr />
      <DebugStates loading={loading} error={error} postList={postList} />
    </div>
  );
}

export default PostDeatil;
