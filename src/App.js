import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/ListUser/MyComponents';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <MyComponent></MyComponent>

    // <div className="App-container">
    //   HelloWorld
    //   <button className='btn btn-primary'>Submit</button>
    // </div>

  );
}

export default App;
