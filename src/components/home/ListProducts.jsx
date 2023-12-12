import Product from './Product';
import PropTypes from 'prop-types';

const ListProducts = ({ products }) => {
  return (
    <>
      <section className="grid md:grid-cols-[300px_300px] gap-y-10 gap-x-5 px-2 justify-center md:justify-items-center lg:grid-cols-[300px_300px_300px]">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

ListProducts.propTypes = {
  products: PropTypes.array,
};

export default ListProducts;
