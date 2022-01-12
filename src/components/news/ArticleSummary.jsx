import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div>
      요약:
      {/* a 태그를 사용하면 리액트가 종료되고 새로 시작하는것이 보이는데
      Link를 사용하면 그렇게 보이지 않음 ->SPA  */}
      <Link to={`/news/${article.id}`}>{article.title}</Link>
    </div>
  );
}

export default ArticleSummary;