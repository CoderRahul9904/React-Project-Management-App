
function SideBar({ onSelect, addProject, selectedProjectId, onSelectProject }) {
    return (
        <div className="bg-black align-bottom w-1/4 h-screen md:w-72 mt-5 flex flex-col left-0 justify-start rounded-tr-xl text-white items-center">
            <h1 className=" mt-20 font-bold tracking-wide">YOUR PROJECTS</h1>
            <button onClick={onSelect} className="p-1 bg-stone-700 rounded-md text-center w-28 hover:text-stone-100 hover:bg-stone-600 text-stone-400 mt-10">+ Add Project</button>
            <ul className="mt-8">
                {addProject.map((ele) =>{
                    let styleCss="text-stone-400 rounded-sm w-full p-2 mb-2 hover:text-stone-200 hover:bg-stone-900"
                    if(ele.id === selectedProjectId){
                        styleCss+="bg-stone-900 text-stone-200"
                    }
                return (
                    <li key={ele.id}>
                        <button onClick={() => onSelectProject(ele.id)} className={styleCss}>{ele.title}</button>
                    </li>
                )}
                )}
            </ul>
        </div>
    )
}

export default SideBar