import { useState, useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import SideBar from "./components/sideBar";
import InitialUI from "./components/InitialUI";
function App() {
  const[NewProject, SetNewProject]=useState({
    projects:[],
    SettingProject: undefined
  })
  // const[AddTitle,SetAddTitle]=useState(null)
  function handleClick(){
    SetNewProject((prev) => {
      return {
        ...prev,
        SettingProject:null
      }
    })
  }
  function handleAddProject(projectData){
    SetNewProject((prevData) =>{
      const newProject={
        ...projectData,
        id: Math.random(),
      };
      return{
        ...prevData,
        SettingProject: undefined,
        projects:[...prevData.projects, newProject]
      }
    })
  }
  let content;
  if(NewProject.SettingProject===null){
    content=<ProjectCard onAdd={handleAddProject}/>
  }else if(NewProject.SettingProject===undefined){
    content=<InitialUI onSelect={handleClick}/>
  }
  return (
    <div className="flex justify-start">
      <SideBar addProject={NewProject.projects} onSelect={handleClick}/>
      {content}
    </div >
  );
}

export default App;
