import React from "react";

export const Callmenu = ({ filterData, callItem }) => {
  return (
    <>
      <h5>Company</h5>
      <article className="companies">
        {callItem.map((elem, index) => {
          return (
            <button
              key={index}
              className="company-btn"
              onClick={() => {
                filterData(`${elem}`);
              }}
            >
              {elem}
            </button>
          );
        })}
      </article>
    </>
  );
};
