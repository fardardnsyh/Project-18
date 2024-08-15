import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = (props) => {
    return (
        <div className='nav-links'>
            {links.map((link) => {
                const { text, path, id, icon } = link

                return (
                    <NavLink
                        to={path}
                        key={id}
                        onClick={props.toggleSidebar}
                        className={({ isActive }) => {
                            return isActive ? 'nav-link active' : 'nav-link'
                        }}
                        end
                    >
                        <span className='icon'>{icon}</span>
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default NavLinks
