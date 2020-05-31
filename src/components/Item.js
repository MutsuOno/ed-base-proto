import React from "react";

const Item = ({ item }) => {
  const title = !item.fields.content_name
    ? "タイトルなし"
    : item.fields.content_name[0];
  const description = !item.fields.description
    ? "--"
    : item.fields.description[0];
  return (
    <div className="item">
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Item;
