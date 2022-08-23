import React from "react";

export const MenuItems = ({ items }) => {
  return (
    <>
      <div className="products-container">
        {items.map((items) => {
          return (
            <article className="product" key={items.id}>
              <img src={items.image} className="product-img img" alt="" />
              <footer>
                <h5 className="product-name">{items.title}</h5>
                <span className="product-price">${items.price}</span>
              </footer>
            </article>
          );
        })}
      </div>
    </>
  );
};
