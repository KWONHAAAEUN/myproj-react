import LolList from 'components/lol/LolList';
import { useNavigate } from 'react-router-dom';
import './lol.css';

function PageLolList() {
  const navigate = useNavigate();
  return (
    <div className="lol-list-wrapper">
      <div className="text-center text-white">League of Legends</div>
      <div class="-m-2 text-center mt-2">
        <div class="p-2">
          <div class="inline-flex items-center bg-white leading-none text-black-600 rounded-full p-2 shadow text-teal text-sm">
            <span
              class="inline-flex bg-blue-600 text-white rounded-full h-6 px-3 justify-center items-center cursor-pointer"
              onClick={() => navigate('/lol/new/')}
            >
              생성
            </span>
            <span class="inline-flex px-2">
              새로운 챔피언을 등록해주세요!🧚
            </span>
          </div>
        </div>
      </div>
      <LolList />
    </div>
  );
}

export default PageLolList;
