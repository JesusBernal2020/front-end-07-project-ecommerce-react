import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProductCart } from '../../store/slice/cart.slice';
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickAddProduct = (e) => {
    e.preventDefault();
    const productToAdd = { quantity: 1, productId: product.id };
    dispatch(addProductCart(productToAdd));
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="w-[280px] border-2 rounded-lg shadow-lg"
    >
      <div className="h-[200px] overflow-hidden p-4 py-6 relative group">
        <img
          className="w-full h-full object-contain opacity-100 group-hover:opacity-0 trasition-opacity duration-500"
          src={product.images[0].url}
          alt={product.title}
        />
        <div className="absolute top-0 left-0 w-full h-full p-4 opacity-0 group-hover:opacity-100 trasition-opacity duration-500">
          <img
            className=" w-full h-full object-contain "
            src={product.images[1].url}
            alt={product.title}
          />
        </div>
      </div>
      <section className="border-t-2 p-4 relative">
        <h5 className="text-gray-400 font-bold">{product.brand}</h5>
        <h4 className="font-bold">{product.title}</h4>
        <span className="text-gray-400 font-bold">Price</span> <br />
        <span className="font-bold"> $ {product.price}</span>
        <button
          onClick={handleClickAddProduct}
          className="absolute right-7 bottom-4 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 ease-in-out text-white w-12 text-2xl grid items-center aspect-square"
        >
          <i className="bx bxs-cart"></i>
        </button>
      </section>
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
