import { useApiAxios } from 'api/base';
import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import useAuth from 'hook/useAuth';
import useFieldValues from 'hook/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INITIAL_FIELD_VALUES = { username: '', password: '', password2: '' };

function SignupForm() {
  const navigate = useNavigate();

  const [auth] = useAuth();

  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSignup = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then(() => {
      navigate('/');
    });
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <h4>아이디를 입력하세요</h4>
        <input
          type="text"
          name="username"
          onChange={handleFieldChange}
          value={fieldValues.username}
          className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        />
        <h4>비밀번호 입력하세요</h4>
        <input
          type="password"
          name="password"
          onChange={handleFieldChange}
          value={fieldValues.password}
          className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        />
        <h4>비밀번호 재확인</h4>
        <input
          type="password"
          name="password2"
          onChange={handleFieldChange}
          value={fieldValues.password2}
          className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
        />
        <Button>회원가입</Button>
      </form>
      <DebugStates auth={auth} fieldValues={fieldValues} />
    </div>
  );
}
export default SignupForm;
