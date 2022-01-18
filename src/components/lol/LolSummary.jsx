import { Link } from 'react-router-dom';

function LolSummary({ post }) {
  return (
    <div className="m-auto px-4 py-4 max-w-xl">
      <div className="bg-white shadow-2xl">
        <div>
          {post.photo && (
            <img src={post.photo} alt={post.champion} className="w-full" />
          )}
        </div>
        <div className="px-4 py-2 mt-2 bg-white cursor-pointer">
          <h2 className="font-bold text-2xl text-gray-800">
            <Link to={`/lol/${post.id}/`}>{post.champion}</Link>
          </h2>
          <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3 cursor-pointer">
            <Link to={`/lol/${post.id}/`}>{post.story.slice(0, 100)}...</Link>
          </p>
        </div>
        <p>by {post.author.username}</p>
      </div>
    </div>
  );
}

export default LolSummary;
