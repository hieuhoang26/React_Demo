import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/ListUser/MyComponents';
import Header from './components/Header/Header';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header></Header>
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet />
        </div>
      </div>
    </div>

  );
}

export default App;
// <MyComponent></MyComponent>
// <div className="App-container">
//   HelloWorld
//   <button className='btn btn-primary'>Submit</button>
// </div>
