import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';

    axios
      .get(URL)
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';

    axios
      .get(URL)
      .then(({ data }) => console.log(data))
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
      </form>
    </section>
  );
};

export default Home;
