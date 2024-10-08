import './ProductPage.css';
import like from '../../../assets/homeimg/heart.png';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../Services/apiservices'; 
import { CartContext } from '../../../assets/Context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);
        setProductDetails(product);
        setMainImage(product.images[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!productDetails) return <div>Product not found</div>;

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className='productpage'>
      <div className="left">
        <div className="imgsel">
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={`/images/${image}`} // Ensure this path is correct for your backend
              alt={`Shoe ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>

        <div className="image">
          <img src={`/images/${mainImage}`} alt="Main" /> {/* Ensure this path is correct for your backend */}
        </div>
      </div>

      <div className="right-side">
        <div className="title">
          <h2>{productDetails.title}</h2>
          <p>{productDetails.usage}</p>
        </div>
        <div className="price">
          <p className='currentprice'>{productDetails.price}</p>
          <p className='mrp'>MRP : ₹ 7095.00</p>
          <div className='tax'>
            <p>Inclusive of all taxes</p>
            <p>(Also includes all applicable duties)</p>
          </div>
        </div>

        <div className="size">
          <button>UK 5</button>
          <button>UK 6</button>
          <button>UK 7</button>
          <button>UK 8</button>
        </div>

        <div className="action-but">
          <button className='buynow' onClick={() => addToCart(productDetails)}>Add To Cart</button>
          <button className='fav'>
            Favourite <img src={like} alt="Favorite icon" />
          </button>
        </div>

        <div className='description'>
          <p>{productDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
