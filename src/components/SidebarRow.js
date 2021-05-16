import React from 'react'
import "../Css/SidebarRow.css"
function SidebarRow({selected,Icons,title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icons className="sidebarRow_icon" />
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    )
}

export default SidebarRow
