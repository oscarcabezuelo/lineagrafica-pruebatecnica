export default function Buttons() {

    function changeView(format) {
        const list = document.getElementById("view")
        if (list.classList.value === "list" && format === "grid") {
            list.classList.remove("list")
            list.classList.add("grid")
        }
        if (list.classList.value === "grid" && format === "list") {
            list.classList.remove("grid")
            list.classList.add("list")
        }
    }

    return (
        <div className="buttons">
            <button className='button' onClick={() => changeView('grid')}>Formato rejilla</button>
            <button className='button' onClick={() => changeView('list')}>Formato lista</button>
        </div>
    )
}