import PropTypes from 'prop-types';
import { deleteProductCart } from '../../store/slice/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({ cartProduct }) => {
  const dispatch = useDispatch();

  const totalPrice = (cartProduct.quantity * cartProduct.product.price).toFixed(
    2
  );

  const hanldeClickDelete = () => {
    dispatch(deleteProductCart(cartProduct.id));
  };

  return (
    <artilce className="grid p-2 grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto]">
      <div className="h-[80px] aspect-square p-2">
        <img
          className="w-full h-full object-contain"
          src={cartProduct.product.images[0].url}
          alt=""
        />
      </div>

      <div>
        <span className="text-sm line-clamp-2">
          {cartProduct.product.title}
        </span>
        <article className="mb-2">
          <h5 className="text-sm text-gray-300 font-semibold">Quantity</h5>
          <div className="flex border-[1px] justify-center max-w-max">
            <button className="p-1 border-[1px] px-3">-</button>
            <div className="p-1 border-[1px] px-4">{cartProduct.quantity}</div>
            <button className="p-1 border-[1px] px-3">+</button>
          </div>
        </article>
      </div>
      <i
        onClick={hanldeClickDelete}
        className="bx bxs-trash text-end cursor-pointer justify-self-end self-start"
      ></i>
      <span className="col-span-2 text-end text-sm">total:</span>

      <span className="px-2 text-sm">${totalPrice}</span>
    </artilce>
  );
};

CartProduct.propTypes = {
  cartProduct: PropTypes.object,
};

export default CartProduct;
