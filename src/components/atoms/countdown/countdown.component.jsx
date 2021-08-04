import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Wrapper, Colon, Circle, Digit, Number } from './countdown.styles';

const calcDiff = (unix) => {
  const diff = unix - dayjs().unix();
  if (!diff || diff < 0) return { h: 0, m: 0, s: 0 };
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff - h * 3600) / 60);
  const s = Math.floor(diff - h * 3600 - m * 60);
  return {
    h,
    m,
    s,
  };
};

function Countdown({ startUnix }) {
  const [state, setState] = useState(calcDiff(startUnix));

  useEffect(() => {
    const interval = setInterval(() => {
      setState(calcDiff(startUnix));
    }, 500);
    return () => clearInterval(interval);
  }, [startUnix]);

  return (
    <Wrapper>
      <Number>
        <Digit>{Math.floor(state.h / 10)}</Digit>
        <Digit>{state.h % 10}</Digit>
      </Number>

      <Colon>
        <Circle />
        <Circle />
      </Colon>

      <Number>
        <Digit>{Math.floor(state.m / 10)}</Digit>
        <Digit>{state.m % 10}</Digit>
      </Number>

      <Colon>
        <Circle />
        <Circle />
      </Colon>

      <Number>
        <Digit>{Math.floor(state.s / 10)}</Digit>
        <Digit>{state.s % 10}</Digit>
      </Number>
    </Wrapper>
  );
}

export default Countdown;
