import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LolDetail({ postId }) {
  const navigate = useNavigate();
  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/lol/api/posts/${postId}`,
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deletePost] =
    useApiAxios(
      {
        url: `/lol/api/posts/${postId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('정말 챔피언을 처치하시겠습니까?ಥ_ಥ')) {
      deletePost().then(() => {
        navigate('/lol/');
        toast.success(`${post.champion}: 끄앙o(TヘTo)`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {error && '로딩 중에 에러 발생'}
      {post && (
        <>
          <h3 className="text-2xl">{post.champion}</h3>
          <h5 className="text-1xs">{post.role}</h5>
          {post.photo && (
            <img src={post.photo} alt={post.photo} className="w-100 h-100" />
          )}
          <div className="text-center">
            {post.story.split(/[\r\n]+/).map((line, index) => (
              <p className="my-2" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/lol/" className="hover:text-blue-400">
          목록으로
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default LolDetail;
