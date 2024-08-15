import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'


const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
    <img src={img} alt="Error" />
    <h2>Ohh! Page not found</h2>
    <p>We can't seem to find the page you're looking for</p>
    <Link to="/">Back to Home</Link>
    </div>
    </Wrapper>
  )
}

export default Error