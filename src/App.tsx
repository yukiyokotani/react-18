import './App.scss';
import SuspenseSample from './components/SuspenseSample';
import TransitionSample from './components/TransitionSample';

const App: React.FC = () => {
  return (
    <div>
      <h1>React18 App</h1>
      <SuspenseSample />
      <TransitionSample />
    </div>
  );
};

export default App;
