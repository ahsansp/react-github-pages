import { Row, Col } from "react-bootstrap";
function ContainerProductCard(props) {
  const PrevButton = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{ background: "white", width: "50px", aspectRatio: "1 / 1" }}
      className="m-0 p-0"
    >
      {"<"}
    </div>
  );
  return (
    <>
      <Row className="p-0 m-0">
        <Col className="">
          <div
            id="carouselExampleControls"
            className="carousel slide d-flex align-items-center"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-around ">
                  {props.item()}
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-around ">
                  {props.item()}
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-around ">
                  {props.item()}
                </div>
              </div>
            </div>
            <button
              style={{ width: "50px", aspectRatio: "1 / 1" }}
              type="button"
              className="position-absolute rounded-circle p-0 m-0 btn-primary border-0"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button
              style={{
                width: "50px",
                aspectRatio: "1 / 1",
                right: "0",
              }}
              className="position-absolute rounded-circle p-0 m-0 btn-primary border-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ContainerProductCard;
