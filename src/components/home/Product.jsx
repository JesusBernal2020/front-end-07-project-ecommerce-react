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
    <Link to={`/products/${product.id}`}>
      <div className="h-[200px] overflow-hidden p-4 relative group">
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
      <section>
        <h5>{product.brand}</h5>
        <h4>{product.title}</h4>

        <span>Price</span>
        <span> ${product.price}</span>

        <button onClick={handleClickAddProduct}>
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
//TODO: 50:00 QUEDAMOS AQUI
