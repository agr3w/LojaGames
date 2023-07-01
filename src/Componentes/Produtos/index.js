import React from 'react';
import './produtos.css';

const productOptions = [
  {
    title: 'Novos Jogos',
    image: 'imgs/imagens-display-1.jpg',
    link: '/novos-jogos',
  },
  {
    title: 'Jogos Usados',
    image: 'imgs/imagens-display-2.jpg',
    link: '/jogos-usados',
  },
  {
    title: 'Gift Cards',
    image: 'imgs/imagens-display-3.jpg',
    link: '/gift-cards',
  },
];

const ProductOption = ({ title, image, link }) => {
  return (
    <div className="product-option">
      <a href={link}>
        <img src={image} alt={title} />
      </a>
      <h3>{title}</h3>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products">
      <h2>Nossos Produtos</h2>
      <p>Uma seleção de jogos incrível</p>
      <div className="product-options">
        {productOptions.map((option, index) => (
          <ProductOption key={index} title={option.title} image={option.image} link={option.link} />
        ))}
      </div>
    </div>
  );
}

export default Products;
