import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  // 지원 되는 것을 개별적으로 뽑아내기 위해 {}
  // 첫 값은 상탯값 두 번째는 refetch
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    '/news/api/articles/',
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="my-5">
      <ToastContainer />
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList && (
        <div className="flex flex-wrap">
          {articleList.map((article) => (
            <div
              key={article.id}
              className="w-full md:w-1/2 xl:w-1/3 px-4 transition-transform hover:-translate-y-5 duration-300"
            >
              <ArticleSummary article={article} />
            </div>
          ))}
        </div>
      )}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}
export default ArticleList;
