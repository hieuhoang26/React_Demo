import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponents';
import HandleForm from './components/HandleForm';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    //<MyComponent></MyComponent>
    // <HandleForm></HandleForm>

    <div className="App-container">
      HelloWorld
      <button className='btn btn-primary'>Submit</button>
    </div>

  );
}

export default App;
