import './App.css';
import Home from './Home';
import Header from './Header';
import { useFlags } from 'launchdarkly-react-client-sdk';

const App = () => {
  const { SHOW_HOME_DIV } = useFlags();
  console.log(useFlags());
  return (
    <>
      <Header />
      {SHOW_HOME_DIV && <Home />}
    </>
  );
};

export default App;
