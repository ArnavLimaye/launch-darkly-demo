import './App.css';
import Home from './Home';
import Header from './Header';
import Notification from './Notification';
import { useFlags } from 'launchdarkly-react-client-sdk';

const App = () => {
  const { SHOW_HOME_DIV, SHOW_NOTIFICATION } = useFlags();
  console.log(useFlags());
  return (
    <>
      <Header />
      {SHOW_HOME_DIV && <Home />}
      {SHOW_NOTIFICATION && <Notification />}
    </>
  );
};

export default App;
