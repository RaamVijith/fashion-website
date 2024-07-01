import React from 'react';
import './product_listing.css';

const ProductListing = () => {
  const products = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/716g97ysusL._AC_SL1500_.jpg',
      title: 'Stylish Dress',
      price: '$49.99',
    },
    {
      id: 2,
      image: 'https://cf.shopee.ph/file/74f6792326f4fdcd8f866ded313769a1',
      title: 'Casual Shirt',
      price: '$29.99',
    },
    {
      id: 3,
      image: 'https://image.dhgate.com/0x0s/f2-albu-g9-M01-81-27-rBVaWFzyQIqABN6uAAC37Pcy1qY879.jpg/new-summer-boys-clothing-sets-kids-boys-geometry.jpg',
      title: 'Elegant Blouse',
      price: '$39.99',
    },
    {
      id: 4,
      image: 'https://ae01.alicdn.com/kf/H9c4ffebe730449dba970af2cf18ba2f4c.jpg_640x640Q90.jpg_.webp',
      title: 'Trendy Jacket',
      price: '$79.99',
    },
    {
      id: 5,
      image: 'https://ph-live-01.slatic.net/p/64e2621ed75c330822f618094f37f14e.jpg',
      title: 'Classic Pants',
      price: '$59.99',
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/51wdF-KljCL._AC_UY1100_.jpg',
      title: 'Summer Hat',
      price: '$19.99',
    },
    {
      id: 7,
      image: 'https://ae01.alicdn.com/kf/HTB1dY8XXRSD3KVjSZFqq6A4bpXaq.jpg_640x640Q90.jpg_.webp',
      title: 'Classic Pants',
      price: '$59.99',
    },
    {
      id: 8,
      image: 'https://sc04.alicdn.com/kf/H96df3ea31dbe432e93d0f6777371eefbO.jpg',
      title: 'Summer Hat',
      price: '$19.99',
    }
  ];

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
