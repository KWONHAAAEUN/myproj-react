import { useEffect } from 'react';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import LolSummary from './LolSummary';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LolList() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const [{ data: postList, loading, error }, refetch] = useApiAxios(
    `lol/api/posts/${query ? '?query=' + query : ''}`,

    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);

  const getQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const searchChampion = (e) => {
    if (e.key === 'Enter') {
      refetch();
    }
  };
  return (
    <div className="my-5">
      <ToastContainer />
      <div className="text-center mb-2">
        <input
          type="text"
          onChange={getQuery}
          placeholder="챔피언을 입력해주세요."
          onKeyPress={searchChampion}
        />
      </div>

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
