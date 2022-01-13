import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import ArticleSummary from './ArticleSummary';
import { ToastContainer } from 'react-toastify';

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
    <div>
      <ToastContainer />
      <h3>뉴스 기사 목록을 보여줄 것입니다</h3>
      {loading && '로딩 중 ..'}
      {error && '로딩 중 에러 발생'}
      {articleList &&
        articleList.map((article) => <ArticleSummary article={article} />)}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}
export default ArticleList;
