
function SideBar({ onSelect, addProject }) {
    return (
        <div className="bg-black align-bottom w-1/4 h-screen md:w-72 mt-5 flex flex-col left-0 justify-start rounded-tr-xl text-white items-center">
            <h1 className=" mt-20 font-bold tracking-wide">YOUR PROJECTS</h1>
            <button onClick={onSelect} className="h-10 bg-stone-700 rounded-md text-center w-28 hover:text-stone-100 hover:bg-stone-600 text-stone-400 mt-10">+ Add Project</button>
            <ul className="mt-8">
                {addProject.map((ele) => (
                    <li key={ele.id}>
                        <button className="text-stone-400 rounded-sm h-10 w-full hover:text-stone-200 hover:bg-stone-900">{ele.title}</button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default SideBar