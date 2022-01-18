import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from 'hook/useAuth';

function ArticleDetail({ articleId }) {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [{ data: article, loading, error }, refetch] = useApiAxios(
    {
      url: `/news/api/articles/${articleId}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/news/api/articles/${articleId}/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      },
      { manual: true },
    );

  const handleDelete = () => {
    // e.preventDeafault();
    if (window.confirm('정말 삭제할거야? 진짜 진짜 진짜?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없다
      deleteArticle().then(() => {
        navigate('/news/');
        toast.success('🦄 삭제 되었습니다!', {
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

  // const notify = () => toast('Wow so easy!');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중..</LoadingIndicator>}
      {error &&
        `로딩 중 에러(${deleteError.response.status} ${deleteError.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생 (${deleteError.response.status} ${deleteError.response.statusText})`}
      {article && (
        <>
          {/* <button onClick={notify}>Notify!</button> */}

          <h3 className="text-2xl my-5">{article.title}</h3>
          {article.photo && (
            <img
              src={article.photo}
              alt={article.photo}
              className="w-100 h-100"
            />
          )}
          <div>
            {article.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-2" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/news/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/news/${articleId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
        {/* <ToastContainer /> */}
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

export default ArticleDetail;
