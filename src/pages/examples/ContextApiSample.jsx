import { createContext, useContext, useReducer, useState } from 'react';

// 인자: context에서 다룰 값의 ('디폴트 값')
const MessageContext = createContext();

function reducer(prevCount, action) {
  const { type } = action;
  if (type === 'PLUS') return prevCount + 1;
  return prevCount;
}

function ContextApiSample() {
  //   const [count, setCount] = useState(0);
  // reducer 버전
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    // <div>
    //   <h2>ContextApiSample</h2>
    //   <button onClick={() => setCount((prev) => prev + 1)}>1씩 증가</button>
    //   {/* Provider가 감싸고 있는 컴포넌트만 접근할 수 있음 */}
    //   <MessageContext.Provider value={{ count, setCount }}>
    //     {/* 내려주는 형태가 2개로 바뀌면서 {}를 한 번 더 감싸줬으니
    //   아래에서도 {}를 감싸서 받아야한다
    //   (count)->({count}), const count->const {count} */}
    //     <Level1 />
    //   </MessageContext.Provider>
    // </div>
    <div>
      <h2>ContextApiSample</h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>1씩 증가</button>
      <MessageContext.Provider value={{ count, dispatch }}>
        <Level1 />
      </MessageContext.Provider>
    </div>
  );
}

function Level1() {
  return (
    <div>
      <h2>Level1</h2>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div>
      <h2>Level2</h2>
      <Level3 />
    </div>
  );
}

function Level3() {
  return (
    <div>
      <h2>Level3</h2>
      <MessageContext.Consumer>
        {/* 위에서 받은 message 소비 */}
        {({ count }) => count}
      </MessageContext.Consumer>
      <Level4 />
    </div>
  );
}

function Level4() {
  //   const { count, setCount } = useContext(MessageContext);
  const { count, dispatch } = useContext(MessageContext);
  return (
    <div>
      <h2>Level4</h2>
      <div>{count}</div>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>1씩 증가</button> */}
      <button onClick={() => dispatch({ type: 'PLUS' })}>1씩 증가</button>
    </div>
  );
}

export default ContextApiSample;
