import './App.css';
import { data } from './data';
import NavTab from './NavTab/NavTab';

function App() {

  const getTabs =()=> {

    const tabs =["All"];

    data.map((item) =>{
      // console.log(item);
      if(!tabs.includes(item.group)){
        tabs.push(item.group);
      }
    
    });
     
    return tabs;
  }
  

  return (
    <div className="App">
      <NavTab
      tabs={getTabs()}
      onChange={()=>{}}
      />
    </div>
  );
}

export default App;
