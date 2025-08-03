import React from "react";

function ProductImges({ product }) {
  const [currentImg, setCurrentImg] = React.useState(product.thumbnail);
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    setCurrentImg(product.thumbnail);
  }, [product]);

  const handleImgChange = (img) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImg(img);
      setFade(false);
    }, 200);
  };

  return (
    <div className="imgs_item">
      <div className="big_img">
        <img
          id="big_img"
          src={currentImg}
          alt={product.title}
          className={fade ? "fade-out" : "fade-in"}
          style={{ transition: "opacity 0.2s" }}
        />
      </div>
      <div className="sml_img">
        {product.images.map((img, index) => (
          <div className="sm-img" key={index}>
            <img
              src={img}
              alt={product.title}
              onClick={() => handleImgChange(img)}
              onMouseOver={() => handleImgChange(img)}
            />
          </div>
        ))}
      </div>
      <style>{`
        .fade-in { opacity: 1; }
        .fade-out { opacity: 0; }
      `}</style>
    </div>
  );
}

export default ProductImges;
