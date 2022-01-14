const { default: LolDetail } = require('components/lol/LolDetail');
const { useParams } = require('react-router-dom');

function PageLolDeatil() {
  const { postId } = useParams();
  return (
    <div>
      <LolDetail postId={postId} />
    </div>
  );
}

export default PageLolDeatil;
