import useAuth from 'hook/useAuth';
import { Link } from 'react-router-dom';

function TopNav() {
  const [auth, , , logout] = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {!auth.isLoggedIn && (
          <>
            <li>
              <MyLink to="/accounts/login/">로그인</MyLink>
            </li>
            <li>
              <MyLink to="#">회원가입</MyLink>
            </li>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <li>
              <MyLink to="/accounts/profile/">프로필</MyLink>
            </li>
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          </>
        )}

        <li>
          <MyLink to="/reviews/">리뷰</MyLink>
        </li>
        {/* {/* <li>
          <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
        </li> */}
        <li>
          <MyLink to="/blog/">블로그</MyLink>
        </li>
        {/* <li>
          <MyLink to="/examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-module/">Css module</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-in-js/">Css in js</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api/">Context Api</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api-2/">Context Api2</MyLink>
        </li> */}
        <li>
          <MyLink to="/news/">뉴스</MyLink>
        </li>
        <li>
          <MyLink to="/lol/">리그오브레전드</MyLink>
        </li>
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link
      to={to || ''}
      className="pb-1 text-gray-500 hover:text-red-500
    hover:border-red-500 border-b-4"
    >
      {children}
    </Link>
  );
}

export default TopNav;
