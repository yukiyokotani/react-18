import { useSleep } from '../utils/sleep';

const Sleep: React.VFC = () => {
  const awakedDate = useSleep(3000);

  return (
    <div>
      <p>Awaked at {awakedDate} 🤩</p>
    </div>
  );
};

export default Sleep;
