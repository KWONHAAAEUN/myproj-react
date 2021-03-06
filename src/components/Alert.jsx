// https://tailwind-elements.com/docs/standard/components/alerts/

import Info from './icons/Info';
import Check from './icons/Check';
import Ex from './icons/Ex';

const MAPPING = {
  info: ['blue', <Info />],
  success: ['green', <Check />],
  ex: ['red', <Ex />],
};

function Alert({ type, message }) {
  const [colorCode, icon] = MAPPING[type];

  return (
    <div
      className={`bg-${colorCode}-100 rounded-lg py-5 px-6 mb-3 text-base text-${colorCode}-700 inline-flex items-center w-full`}
      role="alert"
    >
      <span className="mr-2">{icon}</span>
      {message}
    </div>
  );
}

// 선언되어 있지는 않지만 테일윈드가 해당 부분을 찾는다
function Cheat() {
  return (
    <div className="bg-blue-100 text-blue-700 bg-green-100 text-green-700 bg-red-100 text-red-700" />
  );
}

export default Alert;
