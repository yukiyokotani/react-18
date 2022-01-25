import './App.scss';
import Description from './components/Description';
import SuspenseSample from './components/SuspenseSample';
import TransitionSample from './components/TransitionSample';

const App: React.FC = () => {
  return (
    <div>
      <h1>React 18 Demo App</h1>
      <SuspenseSample />
      <TransitionSample />
      <Description />
    </div>
  );
};

export default App;
