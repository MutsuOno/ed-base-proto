import React from "react";

const Item = ({ item }) => {
  const title = !item.fields.content_name
    ? "タイトルなし"
    : item.fields.content_name[0];
  const description = !item.fields.description
    ? "--"
    : item.fields.description[0];
  const url = !item.fields.url ? "--" : item.fields.url[0];

  function handleClick() {
    window.open(url, "_blank");
  }

  return (
    <div className="item">
      <h2>{title}</h2>
      <p className="description">{description}</p>
      {!url.includes("http") || (url.match(/http/g) || []).length > 1 ? (
        <div className="link-error">リンクエラー</div>
      ) : (
        <button className="link-button" type="button" onClick={handleClick}>
          詳細を見る
        </button>
      )}
      {/* <a href={url} target="_blank" rel="noopener">
        {url}
      </a> */}
    </div>
  );
};

export default Item;
