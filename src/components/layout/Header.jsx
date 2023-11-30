import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">E-commerce</Link>

      <nav>
        <Link to="/login">
          <i className="bx bxs-user"></i>
        </Link>
        <Link to="/purchases">
          <i className="bx bxs-box"></i>
        </Link>
        <button>
          <i className="bx bxs-cart"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
