import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import useFieldValues from 'hook/useFieldValues';

const INIT_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const { fieldValues, setFieldValues, handleFieldChange } =
    useFieldValues(INIT_FIELD_VALUES);

  const [{ data: loginData }, refetch] = useApiAxios(
    {
      url: 'http://localhost:8000/accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleLogin = (e) => {
    e.preventDefault();
    refetch({ data: fieldValues }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="w-100 h-screen flex justify-center items-center bg-gray-100">
        <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
          <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
          <input
            className="mb-5 p-3 w-80 focus:border-yellow-400 rounded border-2 outline-none"
            placeholder="ID"
            required
            name="username"
            type="text"
            value={fieldValues.username}
            onChange={handleFieldChange}
          />
          <input
            className="mb-5 p-3 w-80 focus:border-yellow-400 rounded border-2 outline-none"
            placeholder="Password"
            required
            name="password"
            type="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
          />
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold p-2 rounded w-80"
            id="login"
            type="submit"
            onClick={handleLogin}
          >
            <span>Login</span>
          </button>
        </form>
      </div>

      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PageLogin;
