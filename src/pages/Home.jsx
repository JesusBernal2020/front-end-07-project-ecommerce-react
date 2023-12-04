import { useState } from 'react';
import { useEffect } from 'react';
import { axiosEcommerce } from '../utils/configAxios';
import Product from '../components/home/Product';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');

  const productsByName = products.filter((product) =>
    product.title.toLowerCase().includes(productName)
  );

  console.log(productsByName);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentProductName = e.target.productName.value;
    setProductName(currentProductName.toLowerCase().trim());
  };

  const handleClickCategory = (e) => {
    setCurrentCategory(e.target.dataset.category);
  };

  useEffect(() => {
    // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1';

    axiosEcommerce
      .get('/categories')
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  /* useEffect(() => {
    // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1';

    axiosEcommerce
      .get('/products')
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, []); */

  useEffect(() => {
    axiosEcommerce
      .get(`/products?categoryId=${currentCategory}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [currentCategory]);

  return (
    <section>
      <form onSubmit={handleSubmit} action="">
        <div>
          <input id="productName" type="text" />
          <button>
            <i className="bx bx-search"></i>
          </button>
        </div>

        <section>
          <h4>Category</h4>
          <ul className="cursor-pointer">
            <li onClick={handleClickCategory} data-category="">
              All
            </li>
            {categories.map((category) => (
              <li
                onClick={handleClickCategory}
                data-category={category.id}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </section>
        <section className="grid gap-10 px-2">
          {productsByName.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      </form>
    </section>
  );
};

export default Home;
