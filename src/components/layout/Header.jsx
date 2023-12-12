import { Link } from 'react-router-dom';
import { changeIsShowCart } from '../../store/slice/cart.slice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const handleCLickShowCart = () => {
    dispatch(changeIsShowCart());
  };

  return (
    <header className="flex justify-between items-center p-5 border-b-2 shadow-md">
      <Link to="/" className="font-bold text-emerald-400 text-2xl md:text-3xl">
        E-commerce
      </Link>

      <nav className="text-gray-400">
        <Link
          to="/login"
          className="text-2xl hover:text-emerald-500 transition-all duration-300 ease-in-out pr-3 md:pr-10 md:text-3xl"
        >
          <i className="bx bxs-user"></i>
        </Link>
        <Link
          to="/purchases"
          className="text-2xl hover:text-emerald-500 transition-all duration-300 ease-in-out pr-3 md:pr-10 md:text-3xl"
        >
          <i className="bx bxs-box"></i>
        </Link>
        <button
          onClick={handleCLickShowCart}
          className="text-2xl hover:text-emerald-500 transition-all duration-300 ease-in-out  md:text-3xl"
        >
          <i className="bx bxs-cart"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
