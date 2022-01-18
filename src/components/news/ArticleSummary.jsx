import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div className="bg-gray-100 border-gray-100 border-2 rounded-lg overflow-hidden mb-10">
      {article.photo && (
        <img src={article.photo} alt={article.title} className="w-full" />
      )}
      <div className="p-8 sm:p-9 md:p-7 xl:p-9">
        <h3>
          {/* a 태그를 사용하면 리액트가 종료되고 새로 시작하는것이 보이는데
      Link를 사용하면 그렇게 보이지 않음 ->SPA  */}
          <Link to={`/news/${article.id}/`} className="font-semibold text-dark">
            {article.title}
          </Link>
        </h3>
        <p>by {article.author.username}</p>
      </div>
    </div>
  );
}

export default ArticleSummary;
