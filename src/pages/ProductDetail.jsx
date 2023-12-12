import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { axiosEcommerce } from '../utils/configAxios';
import ListProducts from '../components/home/ListProducts';
import { sliderStyles } from '../utils/sliderStyles';
import { addProductCart } from '../store/slice/cart.slice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [imageToShow, setImageToShow] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  const hanldeClickPlus = () => setQuantity(quantity + 1);
  const hanldeClickless = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClickNextImage = () => {
    if (imageToShow < 3) {
      setImageToShow(imageToShow + 1);
    }
  };

  const handleClickPriviusImage = () => {
    if (imageToShow > 1) {
      setImageToShow(imageToShow - 1);
    }
  };

  const handleClickAddProduct = () => {
    const productToAdd = {
      quantity,
      productId: product.id,
    };
    dispatch(addProductCart(productToAdd));
  };

  useEffect(() => {
    axiosEcommerce
      .get(`/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (product) {
      axiosEcommerce
        .get(`/products?categoryId=${product.categoryId}`)
        .then(({ data }) => {
          const productsFiltered = data.filter((item) => item.id != product.id);
          setSimilarProducts(productsFiltered);
        })
        .catch((err) => console.log(err));
    }
  }, [product]);

  return (
    <section className="p-2 max-w-[1000px] mx-auto">
      <section className="flex gap-2 items-center py-4 text-base justify-center md:justify-start md:pl-10">
        <Link to="/">Home</Link>
        <div className="h-[6px] aspect-square rounded-full bg-emerald-400"></div>
        <span className="font-bold truncate w-[200px]">{product?.title}</span>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 items-center">
        {/*slider */}
        <article className="overflow-hidden relative">
          <section
            className={`flex w-[300%] transition-all duration-300 ${sliderStyles[imageToShow]} `}
          >
            <div className="p-14 h-[300px]  w-[calc(100%_/_3)]">
              <img
                className="w-full h-full object-contain"
                src={product?.images[0].url}
                alt=""
              />
            </div>
            <div className="p-14 h-[300px] w-[calc(100%_/_3)]">
              <img
                className="w-full h-full object-contain"
                src={product?.images[1].url}
                alt=""
              />
            </div>
            <div className="p-14 h-[300px] w-[calc(100%_/_3)]">
              <img
                className="w-full h-full object-contain"
                src={product?.images[2].url}
                alt=""
              />
            </div>
          </section>
          <button
            onClick={handleClickPriviusImage}
            className="absolute top-1/2 left-2 text-2xl bg-emerald-400 h-[30px] rounded-full aspect-square text-white -translate-y-1/2"
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            onClick={handleClickNextImage}
            className="absolute top-1/2 right-2 text-2xl bg-emerald-400 h-[30px] rounded-full aspect-square text-white -translate-y-1/2"
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </article>
        {/*detalle del producto */}
        <article className="grid px-4 gap-6">
          <div>
            <h4 className="text-gray-300 font-semibold">{product?.brand}</h4>
            <span className="font-bold block text-xl ml-2">
              {product?.title}
            </span>
          </div>

          <section className="grid grid-cols-2">
            <article>
              <h4 className="text-gray-300 font-semibold">Price</h4>
              <span className="font-bold block text-lg ml-2">
                ${product?.price}
              </span>
            </article>

            <article>
              <h5 className="text-sm text-gray-300 font-semibold">Quantity</h5>
              <div className="flex border-[1px] justify-center max-w-max">
                <button
                  className="p-1 border-[1px] px-3"
                  onClick={hanldeClickless}
                >
                  -
                </button>
                <div className="p-1 border-[1px] px-4">{quantity}</div>
                <button
                  className="p-1 border-[1px] px-3"
                  onClick={hanldeClickPlus}
                >
                  +
                </button>
              </div>
            </article>
          </section>
          <button
            onClick={handleClickAddProduct}
            className="block w-full text-white py-2 rounded-md bg-emerald-300 hover:bg-emerald-400 transition-all duration-300 ease-in-out"
          >
            Add to cart <i className="bx bxs-cart"></i>
          </button>

          <p className="text-sm">{product?.description}</p>
        </article>
      </section>
      <section className="py-20">
        <h3 className="px-4 pb-14 text-2xl text-emerald-400 font-bold">
          Discorver Similar items
        </h3>
        <ListProducts products={similarProducts} />
      </section>
    </section>
  );
};

export default ProductDetail;
