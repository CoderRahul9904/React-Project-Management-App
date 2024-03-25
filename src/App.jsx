import { useState, useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import SideBar from "./components/sideBar";
import InitialUI from "./components/InitialUI";
import SelectedProject from "./components/SelectedProject";
function App() {
  const[NewProject, SetNewProject]=useState({
    projects:[],
    SettingProject: undefined,
    SettingTask: [],
  })
  function handleSelectedProject(id){
    SetNewProject((prev) => {
      return {
        ...prev,
        SettingProject: id,
      }
    })
  }
  function handleClick(){
    SetNewProject((prev) => {
      return {
        ...prev,
        SettingProject:null
      }
    })
  }
  function handleDelete(){
    SetNewProject((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== prevState.SettingProject),
        SettingProject: undefined
      }
    })
  }
  function handleAddingTask(Task){
    SetNewProject((prevData) =>{
      const taskId=Math.random()
      const newTask={
        projectId: prevData.SettingProject,
        text: Task,
        id: taskId,
      };
      return{
        ...prevData, 
        SettingTask:[...prevData.SettingTask, newTask]
      }
    })
  }
  function handleDeleteTask(){
    SetNewProject((prev) => {
      return {
        ...prev,
        
      }
    })
  }
  function handleCancel(){
    SetNewProject((prev) => {
      return {
        ...prev,
        SettingProject:undefined
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
  const selectedProject = NewProject.projects.find(project => project.id === NewProject.SettingProject);

  let content=<SelectedProject  onAddTask={NewProject.SettingTask} onTask={handleAddingTask} onDelete={handleDelete} project={selectedProject}/>

  if(NewProject.SettingProject===null){
    content=<ProjectCard onCancel={handleCancel} onAdd={handleAddProject}/>
  }else if(NewProject.SettingProject===undefined){
    content=<InitialUI onSelect={handleClick}/>
  }
  
  return (
    <div className="flex justify-start">
      <SideBar addProject={NewProject.projects} onSelect={handleClick} onSelectProject={handleSelectedProject} selectedProjectId={selectedProject}/>
      {content}
    </div >
  );
}

export default App;
