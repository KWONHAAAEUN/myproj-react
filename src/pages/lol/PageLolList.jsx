import Button from 'components/Button';
import LolList from 'components/lol/LolList';
import { useNavigate } from 'react-router-dom';

function PageLolList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>LOL 페이지</h2>
      <LolList />

      <Button onClick={() => navigate('/lol/new/')}>새 포스팅 작성</Button>
    </div>
  );
}

export default PageLolList;
