import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data';
import NavTab from './NavTab/NavTab';

function App() {

  const [projects,setProjects] = useState(data);
  const [load,setload]=useState(false);
  useEffect(()=>{
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 1000);
  },[projects])

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

  const setProject = (group) => {
    if (group === "All") {
      setProjects(data);
    } else {
      const new__project = data.filter((item) => item.group === group);
      setProjects(new__project);
    }
  };


  return (
    <div className="App">
     <button className='btn btn__primary about'>About Me</button>
      <NavTab
      tabs={getTabs()}
      onChange={setProject}
      />
      <div className='project__container'>
        
        {
          projects.map(({image, title, github,demo},index)=>{
            return(
              <div className = {`project__item ${load ? "zoom_in":""}`} key={index}>
                <div className="project_item_image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='project_item_button'>
                <a href={github} className='btn ' target="_blank">GitHub</a>
                <a href={demo}  className='btn btn__primary' target="_blank"> Live Demo</a>  
                </div>
              </div>
            )

          })
        }

      </div>
    </div>
  );
}

export default App;
