import { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../Context/appContext'
import Logo from './Logo'

const Navbar = () => {
    const { user, toggleSidebar, logoutUser } = useAppContext()
    const [showLogout, setShowLogout] = useState(false)
    return (
        <Wrapper>
            <div className='nav-center'>
                <button className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className='logo-text'>Dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button
                        className='btn'
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle />
                        {user && user.name}
                        <FaCaretDown />
                    </button>
                    <div
                        className={
                            showLogout ? 'dropdown show-dropdown' : 'dropdown'
                        }
                    >
                        <button className='dropdown-btn' onClick={logoutUser}>
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar
