import { useState } from 'react';
import { useEffect } from 'react';
import { axiosEcommerce } from '../utils/configAxios';
/* import Product from '../components/home/Product'; */
import ListProducts from '../components/home/ListProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const productsByName = products.filter((product) =>
    product.title.toLowerCase().includes(productName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentProductName = e.target.productName.value;
    setProductName(currentProductName.toLowerCase().trim());
  };

  const handleClickCategory = (e) => {
    setCurrentCategory(e.target.dataset.category);
    setShowCategories(false);
  };

  const handleIsShowFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1';

    axiosEcommerce
      .get('/categories')
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axiosEcommerce
      .get(`/products?categoryId=${currentCategory}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [currentCategory]);

  return (
    <section className=" lg:grid lg:grid-cols-[300px_1fr]">
      <article
        className={`fixed top-0 w-[300px] ${
          showFilters ? 'left-0' : '-left-full'
        } transition-all duration-300  bg-white shadow-2xl shadow-black/30 z-20 min-h-screen pt-5 pb-8 lg:w-[320px] mx-auto flex flex-col gap-2 lg:relative lg:left-0 lg:shadow-none`}
      >
        <button
          onClick={handleIsShowFilters}
          className="absolute top-3 left-3 text-2xl text-emerald-400 hover:text-emerald-500 transition-all duration-300 ease-in-out lg:invisible"
        >
          <i className="bx bxs-x-circle"></i>
        </button>
        <div className="flex justify-center pb-8 lg:invisible">
          <h3 className="p-2 px-4 text-emerald-400 text-3xl font-bold">
            Filters
          </h3>
        </div>
        <section className="w-[280px] py-2 px-5 lg:z-40">
          <h4
            className="flex justify-between cursor-pointer font-bold text-lg border-b-2 border-emerald-400"
            onClick={() => setShowCategories(!showCategories)}
          >
            Category
            <span className="pl-4 text-2xl">
              <i
                className={`bx ${
                  showCategories ? 'bx-chevron-up' : 'bx-chevron-down'
                }`}
              ></i>
            </span>
          </h4>
          <ul
            className={`transition-opacity transition-height ${
              showCategories ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            } overflow-hidden duration-300 ease-in-out cursor-pointer`}
          >
            <li
              className="hover:text-emerald-400 transition-all duration-300 ease-in-out"
              onClick={handleClickCategory}
              data-category=""
            >
              All
            </li>
            {categories.map((category) => (
              <li
                className="hover:text-emerald-400 transition-all duration-300 ease-in-out"
                onClick={handleClickCategory}
                data-category={category.id}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-[280px] py-2 px-5 ">
          <h4 className="flex justify-between cursor-pointer font-bold text-lg border-b-2 border-emerald-400">
            Filters
            <span className="pl-4 text-2xl">
              <i className="bx bx-chevron-up"></i>
            </span>
          </h4>
        </section>
      </article>
      <form onSubmit={handleSubmit} className="pt-10 pb-14">
        <article>
          <div className="flex justify-center">
            <input
              id="productName"
              type="text"
              placeholder="What are you looking for..."
              className="border-2 py-2 px-2 w-56 md:w-96 rounded-l-lg outline-none"
            />
            <button className="bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 ease-in-out px-3 text-2xl text-white rounded-r-lg">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </article>
        {/* <h2 className="text-center text-3xl font-bold text-emerald-400 pt-4 pb-10">
          Products
        </h2> */}
        <div className="grid justify-center lg:hidden">
          <h3
            onClick={handleIsShowFilters}
            className="mt-8 mx-5 w-36 flex justify-center text-xl font-bold py-2 px-3 rounded-lg text-white bg-emerald-400 hover:bg-emerald-500"
          >
            <span className="text-2xl pr-3 lg">
              <i className="bx bxs-filter-alt"></i>
            </span>
            Filters
          </h3>
        </div>
        <ListProducts products={productsByName} />
      </form>
    </section>
  );
};

export default Home;
