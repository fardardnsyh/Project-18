import { useAppContext } from '../Context/appContext'
import NavLinks from './NavLinks'
import Logo from '../Components/Logo'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
    const { showSidebar } = useAppContext()
    return (
        <Wrapper>
            <div
                className={
                    showSidebar
                        ? 'sidebar-container'
                        : 'sidebar-container show-sidebar'
                }
            >
                <div className='content'>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar
