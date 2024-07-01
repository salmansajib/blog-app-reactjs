/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Nav({ isAuth, signUserOut }) {
  return (
    <nav className=''>
      <Link className='' to='/'>
        Home
      </Link>
      <Link className='' to='/createpost'>
        Create Post
      </Link>
      {!isAuth ? (
        <Link className='' to='/login'>
          Login
        </Link>
      ) : (
        <button onClick={signUserOut}>Log Out</button>
      )}
    </nav>
  );
}

export default Nav;