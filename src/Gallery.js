import React, { useState } from "react";
import { Callmenu } from "./Callmenu";
import { MenuItems } from "./MenuItems";
import { Products } from "./Product";

let allCatVal = [...new Set(Products.map((elem) => elem.company)), "All"];

export const Gallery = () => {
  const [items, setitems] = useState(Products);
  const [callItem, setCallItem] = useState(allCatVal);

  const filterData = (category) => {
    if (category === "All") {
      setitems(Products);
    } else {
      let updateData = Products.filter((elem) => {
        return elem.company === category;
      });
      setitems(updateData);
    }
  };

  const inputHandler = (event) => {
    let inputD = event.target.value;

    const updateData = Products.filter((elem) => {
      return elem.title.toLowerCase().includes(inputD);
    });
    setitems(updateData);
  };
  return (
    <>
      {/* <!-- products --> */}
      <section className="products">
        {/* <!-- filters --> */}
        <div className="filters-container">
          {/* <!-- search --> */}
          <form className="input-form">
            <input
              type="text"
              className="search-input"
              placeholder="search..."
              onChange={inputHandler}
            />
          </form>
        </div>
        {/* <!-- categories --> */}
        <Callmenu filterData={filterData} callItem={callItem} />
        {/* <!-- products --> */}
        <MenuItems items={items} />
      </section>
    </>
  );
};
