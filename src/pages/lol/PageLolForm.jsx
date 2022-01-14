import { useParams, useNavigate } from 'react-router-dom';
import LolForm from 'components/lol/LolForm';

function PageLolForm() {
  const navigate = useNavigate();

  const { postId } = useParams();

  return (
    <LolForm
      postId={postId}
      handleDidSave={(savedPost) => navigate(`/lol/${savedPost.id}/`)}
    />
  );
}
export default PageLolForm;
