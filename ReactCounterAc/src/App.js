import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Car from './components/Car';
import Counter from './components/Counter';

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  const ar = [4,6,"hi"]
  return (
    <>
    {/* <Home car = {carInfo} bike = {ar}/> */}
    <Counter></Counter>
    </>
  );
}
export default App;
