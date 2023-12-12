import { useEffect, useState } from 'react';
import { axiosEcommerce, getConfig } from '../utils/configAxios';
import Purchase from '../components/purchases/Purchase';
import { Link } from 'react-router-dom';

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
      <section className="flex gap-2 items-center py-4 text-base justify-center md:justify-start md:pl-10">
        <Link to="/">Home</Link>
        <div className="h-[6px] aspect-square rounded-full bg-emerald-400"></div>
        <span className="font-bold truncate w-[200px]">Purchases</span>
      </section>
      <h2 className="text-4xl text-center py-8 font-bold text-emerald-400">
        My Purchases
      </h2>
      <section className="grid pl-4 py-8 gap-8">
        {purchasesHistory.map((purchase) => (
          <Purchase key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </section>
  );
};

export default Purchases;
