import { useEffect, useState } from "react";
import "./style.css";
function XSlideProduct(props) {
  const [offset, setOfset] = useState(0);
  const [xSlide, setXSlide] = useState(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  useEffect(() => {
    setXSlide(document.getElementById("scroll"));
    setScrollWidth(document.getElementById("scroll").scrollWidth);
    setClientWidth(document.getElementById("scroll").clientWidth);
  }, []);
  const prevHandler = () => {
    console.log(scrollWidth, offset);

    xSlide.scrollTo({ left: offset - props.offset, behavior: "smooth" });
    setOfset(offset - props.offset);
  };
  const nextHandler = () => {
    console.log(scrollWidth, offset);

    xSlide.scrollTo({ left: offset + props.offset, behavior: "smooth" });
    setOfset(offset + props.offset);
  };
  return (
    <>
      <div className="d-flex align-items-center overflow-hidden" id="scroll">
        <button
          onClick={() => {
            prevHandler();
          }}
          style={{
            position: "absolute",
            left: "0",
            zIndex: "9",
            display: offset <= 0 ? "none" : "block",
          }}
          className="btn"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <div id="x-slide" className="d-flex">
          {props.item()}
        </div>
        <button
          onClick={() => {
            nextHandler();
          }}
          style={{
            position: "absolute",
            right: "0",
            zIndex: "9",
            display: offset >= scrollWidth - clientWidth ? "none" : "block",
          }}
          className="btn"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default XSlideProduct;
