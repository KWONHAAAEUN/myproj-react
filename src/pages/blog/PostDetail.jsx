import Axios from 'axios';
import BlogDetail from 'components/blog/BlogDetail';
import DebugStates from 'components/DebugStates';
import useFieldValuesBlog from 'hook/useFieldValuesBlog';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from 'api/base';

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

    const url = `/blog/api/posts/${postId}/`;

    axiosInstance
      .get(url)
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
      <h2>Post</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <div className="">
        <BlogDetail post={postList} />
      </div>

      <hr />
      <DebugStates loading={loading} error={error} postList={postList} />
    </div>
  );
}

export default PostDeatil;
