import { useDispatch, useSelector } from 'react-redux';
import { changeIsShowCart } from '../../store/slice/cart.slice';

const Cart = () => {
  const { isShowCart } = useSelector((store) => store.cart);
  const { token } = useSelector((store) => store.userInfo);

  const dispatch = useDispatch();

  const handleClickChangeShowCart = () => dispatch(changeIsShowCart());

  return (
    <section
      className={`fixed top-0 bg-white p-2 h-screen ${
        isShowCart && token ? 'right-0' : '-right-full'
      } w-[240px] transition-all duration-300 shadow-2xl shadow-black/30 grid grid-rows-[auto_1fr_auto]`}
    >
      <button
        onClick={handleClickChangeShowCart}
        className="absolute top-3 right-3 text-2xl text-emerald-400 hover:text-emerald-500 transition-all duration-300 ease-in-out"
      >
        <i className="bx bxs-x-circle"></i>
      </button>
      <h3 className="font-bold text-xl">Shopping Cart </h3>

      {/*Productos del carrito  */}
      <section></section>
      {/*Productos del carrito  */}
      <section className="border-t-[1px] border-gray-200 p-4 grid grid-cols-2 gap-4">
        <span>total</span>
        <span className="text-end">%250</span>
        <button className=" col-span-2 block w-full text-white py-2 rounded-md bg-emerald-300 hover:bg-emerald-400 transition-all duration-300 ease-in-out">
          checkout
        </button>
      </section>
    </section>
  );
};

export default Cart;
