import './App.css';
import Home from './Home';
import Header from './Header';
import useFlags from './context/useFlags';

const App = () => {
  const { SHOW_HOME_DIV } = useFlags();
  return (
    <>
      <Header />
      {SHOW_HOME_DIV && <Home />}
    </>
  );
};

export default App;
