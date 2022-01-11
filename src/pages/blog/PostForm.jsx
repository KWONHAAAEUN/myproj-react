import useFieldValuesBlog from 'hook/useFieldValuesBlog';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DebugStates from 'components/DebugStates';
import BlogForm from 'components/blog/BlogForm';

function PostForm() {
  // 상탯값 정의. 훅 호출
  const navigate = useNavigate();
  // route할 때 :으로 시작했던 값들을 가져올 수 있다
  const { postId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 훅 호출
  const { fieldValues, handleFieldChange, setFieldValues, clearFieldValues } =
    useFieldValuesBlog({
      title: '',
      content: '',
    });

  // async 버전
  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);

      const url = `http://127.0.0.1:8000/blog/api/posts/${postId}/`;
      try {
        const response = await Axios.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (postId) fetchReview();
    else clearFieldValues();
  }, [postId, setFieldValues, clearFieldValues]);

  // async-await 짝꿍
  const savePost = async () => {
    setLoading(true);
    setError(null);

    const url = !postId
      ? 'http://127.0.0.1:8000/blog/api/posts/'
      : `http://127.0.0.1:8000/blog/api/posts/${postId}/`;

    try {
      if (!postId) {
        await Axios.post(url, fieldValues);
      } else {
        await Axios.patch(url, fieldValues);
      }
      navigate(`/blog/`);
    } catch (e) {
      setError(e);
      console.error(e);
    }

    setLoading(false);
  };

  // jsx로 표현
  return (
    <div>
      <h2>
        Post Form
        {postId ? '수정' : '생성'}
      </h2>
      <BlogForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={savePost}
        disabled={loading}
      />
      <DebugStates reviewId={postId} fieldValues={fieldValues} />
    </div>
  );
}
export default PostForm;
