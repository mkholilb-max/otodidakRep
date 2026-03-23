import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../services/product.services";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProducts(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);
return (
  <div className="w-full min-h-screen flex items-center justify-center px-4 py-6">
    {Object.keys(product).length > 0 && (
      <div className="flex flex-col md:flex-row font-sans max-w-3xl w-full bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-4 sm:p-6">
          
          {/* TITLE + PRICE */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <h1 className="text-base sm:text-lg font-semibold text-slate-900">
              {product.title}
            </h1>
            <div className="text-lg font-bold text-green-600">
              ${product.price}
            </div>
          </div>

          {/* RATING */}
          <div className="text-xs sm:text-sm text-slate-600 mt-1">
            ⭐ {product.rating.rate} /5 ({product.rating.count} reviews)
          </div>

          {/* DESCRIPTION */}
          <div className="mt-3 pb-4 border-b border-slate-200 text-sm text-slate-700">
            {product.description}
          </div>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button className="w-full sm:w-auto h-10 px-4 font-semibold rounded-md bg-black text-white">
              Buy Now
            </button>
            <button className="w-full sm:w-auto h-10 px-4 font-semibold rounded-md border border-slate-300 text-slate-900">
              Add to Cart
            </button>
          </div>

          {/* FOOTER */}
          <p className="text-xs text-slate-500 mt-4">
            Free shipping available.
          </p>
        </div>
      </div>
    )}
  </div>
);
};

export default DetailProductPage;
