import './App.css';
//always remember to import your components
//import and define them with capital letters
import Button from "./components/Button" 
import Title from './components/Title';
import MyMap from './components/MyMap';
import Animals from './components/Animals';

function App() {

  return (
    <div className="App">
      {/* rendering the same component twice with different info */}
      <Title text="My first Title"/>
      <Title text="Another Title"/>
      <Button/>
      {/* simple map */}
      <MyMap/>
      <br/>
      {/* map using a card component */}
      <Animals/>
    </div>
  );
}

export default App;
