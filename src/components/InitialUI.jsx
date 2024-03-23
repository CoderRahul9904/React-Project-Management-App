
function InitialUI({onSelect}) {
    return (
        <div className="h-screen w-full m-auto flex flex-col justify-start items-center gap-5">
            <img className="w-32 h-32 mt-24 object-contain" src="./src/assets/no-projects.png" alt="Notes" />
            <p className="text-stone-600 font-bebas font-bold text-lg">No Projects Selected</p>
            <p className="text-stone-400 text-lg">Select a project or get started with new one</p>
            <button onClick={onSelect} className="bg-stone-800 h-10 w-40 font-semibold text-stone-500 rounded-lg mt-2">Create new Project</button>
        </div>
    )
}

export default InitialUI