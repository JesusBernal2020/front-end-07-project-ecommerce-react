import { useState } from 'react';
import { useEffect } from 'react';
import { axiosEcommerce } from '../utils/configAxios';
import Product from '../components/home/Product';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1';

    axiosEcommerce
      .get('/categories')
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1';

    axiosEcommerce
      .get('/products')
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <form action="">
        <div>
          <input type="text" />
          <button>
            <i className="bx bx-search"></i>
          </button>
        </div>

        <section>
          <h4>Category</h4>
          <ul>
            <li>All</li>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </section>
        <section className="grid gap-10 px-2">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      </form>
    </section>
  );
};

export default Home;
