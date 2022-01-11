import { useEffect, useState } from 'react';
import './Clock.css';

const WEEKDAYS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(
    // 이 함수는 현 컴포넌트가 mount 시에 호출
    () => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
      // 리턴된 함수는 현 컴포넌트 unmount 시에 호출
      return () => {
        clearInterval(interval);
      };
    },
    [],
  );

  return (
    <div className="clock-wrapper">
      <h2>시계</h2>
      <div class="clock">
        <p class="date">{WEEKDAYS[date.getDay()]}</p>
        <p class="time">{date.toLocaleTimeString()}</p>
        <p class="text">리액트 우우우잉</p>
      </div>
    </div>
  );
}

export default Clock;
