import './Navbar.css'

export const SubMenu = ({items}) =>{
    return(
        <>
            <div className="nav-submenu">
            <div className="sub-menu-inner">
              <ul>
                {items.map((item, index)=>(
                <li key={index}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
    )
}