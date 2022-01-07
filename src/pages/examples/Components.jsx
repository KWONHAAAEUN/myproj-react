import Alert from 'components/Alert';

function Components() {
  return (
    <div>
      <h2 className="text-xl border-l-8 border-blue-500 pl-1 mb-2">
        Components
      </h2>
      <h3 className="text-lg border-l-4 border-blue-300 pl-1 mb-2">Alerts</h3>
      <Alert type="info" message="info 메세지 입니다" />
      <Alert type="success" message="success 메세지 입니다" />
      <Alert type="ex" message="Ex 메세지 입니다" />
    </div>
  );
}
export default Components;
