import { useEffect } from 'react';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import LolSummary from './LolSummary';
import { ToastContainer } from 'react-toastify';

function LolList() {
  const [{ data: postList, loading, error }, refetch] = useApiAxios(
    '/lol/api/posts',
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="my-5">
      <ToastContainer />
      {loading && 'Loading..'}
      {error && '로딩 중에 에러 발생'}
      {postList && (
        <div>
          {postList.map((post) => (
            <div
              key={post.id}
              className=" w-full transition-transform hover:-translate-y-5 duration-300"
            >
              <LolSummary post={post} />
            </div>
          ))}
        </div>
      )}
      <DebugStates postList={postList} loading={loading} error={error} />
    </div>
  );
}

export default LolList;
