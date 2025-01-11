import { useEffect, useState } from "react";
import "./style.css";
function XSlideProduct(props) {
  const [offset, setOfset] = useState(0);
  const [xSlide, setXSlide] = useState(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    setXSlide(document.getElementById("scroll"));
  }, []);
  useEffect(() => {
    console.log(xSlide);
    setScrollWidth(xSlide);
  }, [setXSlide]);
  const prevHandler = () => {
    console.log(scrollWidth);
    xSlide.scrollTo({ left: offset - props.offset, behavior: "smooth" });
    setOfset(offset - props.offset);
  };
  const nextHandler = () => {
    xSlide.scrollTo({ left: offset + props.offset, behavior: "smooth" });
    setOfset(offset + props.offset);
  };
  return (
    <>
      <div className="d-flex align-items-center overflow-auto" id="scroll">
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
          hello
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
            display: offset >= props.maxOffset ? "none" : "block",
          }}
          className="btn"
        >
          hai
        </button>
      </div>
    </>
  );
}

export default XSlideProduct;
