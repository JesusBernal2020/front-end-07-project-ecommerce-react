import { Link } from 'react-router-dom';
import { changeIsShowCart } from '../../store/slice/cart.slice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const handleCLickShowCart = () => {
    dispatch(changeIsShowCart());
  };

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
        <button onClick={handleCLickShowCart}>
          <i className="bx bxs-cart"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
