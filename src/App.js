import './App.scss';
import { Switch } from 'react-router-dom';

// components
import Login from './pages/Login';
import Private from './Private';
import Public from './Public';
import Main from './pages/Main';






function App() {
  return (
    <div className="App">
      <Switch>
        <Private path={"/admin"} component={Main}></Private>
        <Public path={"/"} exact component={Login}/>
        <Public path={"*"}>Error</Public>
      </Switch>
     
    </div>
  );
}

export default App;
