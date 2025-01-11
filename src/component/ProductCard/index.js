import { Card, Button } from "react-bootstrap";
import "./style.css";
function ProductCard(props) {
  return (
    <>
      <a
        href={props.href}
        style={Object.assign(props.style, { textDecoration: "none" })}
        className={"d-block m-1 flex-shrink-0 " + props.className}
      >
        <Card>
          <Card.Img variant="top" src={props.src} className={"product-image"} />
          <Card.Body className="p-2 d-flex flex-column">
            <Card.Title className="title fs-6 fw-normal m-0">
              {props.title}
            </Card.Title>
            <Card.Body className="px-0 py-1">
              <p className="m-0 fw-bold">{`Rp${props.price.toLocaleString(
                "id-ID"
              )}`}</p>
              <p className="m-0 text-secondary">{props.place}</p>
            </Card.Body>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default ProductCard;
