import { useApiAxios } from 'api/base';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

function LolDetail({ postId }) {
  const navigate = useNavigate();
  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/lol/api/posts/${postId}`,
    { manual: true },
  );

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
    </div>
  );
}

export default LolDetail;
