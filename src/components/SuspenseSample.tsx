import { Suspense, useState } from 'react';
import Sleep from './Sleep';

const SuspenseSample: React.VFC = () => {
  const [sleepIsShown, setSleepIsShown] = useState(false);
  const [wakeUpDate, setWakeUpDate] = useState<Date | null>(null);

  return (
    <>
      <h2>Suspense</h2>
      <p>Fall asleep in an instant and take three seconds to wake up. 🛌</p>
      <p>
        {wakeUpDate
          ? `Wake up at ${wakeUpDate?.toLocaleTimeString()} 🤬`
          : 'Now sleeping...😴'}
      </p>
      <Suspense fallback={<p>Waking up...🥱</p>}>
        {sleepIsShown ? <Sleep /> : null}
      </Suspense>
      <div>
        <button
          type="button"
          disabled={sleepIsShown}
          onClick={() => {
            setWakeUpDate(new Date());
            setSleepIsShown(true);
          }}
        >
          Wake Up
        </button>
        <button
          type="button"
          disabled={!sleepIsShown}
          onClick={() => {
            setWakeUpDate(null);
            setSleepIsShown(false);
          }}
        >
          Put to Sleep
        </button>
      </div>
    </>
  );
};

export default SuspenseSample;
