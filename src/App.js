import './App.css';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';

function App() {


  
  return (
    <div className="App">
      <div>
        <UserList />
      </div>
      <div><UserDetail/></div>
    </div>
  );
}

export default App;
