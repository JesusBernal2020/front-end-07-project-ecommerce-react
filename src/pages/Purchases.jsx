import { useEffect, useState } from 'react';
import { axiosEcommerce, getConfig } from '../utils/configAxios';
import Purchase from '../components/purchases/Purchase';

const Purchases = () => {
  const [purchasesHistory, setPurchasesHistory] = useState([]);

  useEffect(() => {
    axiosEcommerce
      .get('/purchases', getConfig())
      .then(({ data }) => {
        const orderPurcahses = data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPurchasesHistory(orderPurcahses);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-[700px] mx-auto">
      <h3>My Purchases</h3>

      <section className="grid pl-4 gap-8">
        {purchasesHistory.map((purchase) => (
          <Purchase key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </section>
  );
};

export default Purchases;
