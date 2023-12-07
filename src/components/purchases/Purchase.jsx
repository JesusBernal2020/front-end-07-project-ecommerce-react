import PropTypes from 'prop-types';
import { formatDDMMYYYY } from '../../utils/date';

const Purchase = ({ purchase }) => {
  const totalPrice = (purchase.product.price * purchase.quantity).toFixed(2);

  return (
    <article className="grid grid-cols-2 gap-2 text-sm items-center">
      {/*seccion izquierda */}
      <section className="flex items-center gap-2">
        <div className="h-[50px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={purchase.product.images[2].url}
            alt=""
          />
        </div>
        <span>{purchase.product.title}</span>
      </section>
      {/*seccion derecha */}
      <section className="grid text-center justify-center gap-3 font-semibold sm:grid-cols-3">
        <span>{formatDDMMYYYY(purchase.createdAt)}</span>
        <span className="p-1 px-4 border-[1px] border-gray-400 ">
          {purchase.quantity}
        </span>
        <span>${totalPrice}</span>
      </section>
    </article>
  );
};

Purchase.propTypes = {
  purchase: PropTypes.object,
};

export default Purchase;
