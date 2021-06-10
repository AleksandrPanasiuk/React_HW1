import './App.css';
import IziComponent from './HvComponent/IziComponent'
import {MediumComponent} from './HvComponent/MediumComponent'
import {list, todoList} from './HvComponent/ComponetValue'
import HardComponent1 from "./HvComponent/HardComponent1";


function App() {
  return (
    <div className="App">
      <IziComponent firstName="Alex" lastName="Panasiuk"/>
        <br/>
      <MediumComponent text={list}/>
        <br/>
      <HardComponent1 todoList={todoList} />
    </div>
  );
}

export default App;
