import Product from './Product';
import PropTypes from 'prop-types';

const ListProducts = ({ products }) => {
  return (
    <section className="grid gap-10 px-2">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

ListProducts.propTypes = {
  products: PropTypes.array,
};

export default ListProducts;
