import Carousel from "react-bootstrap/Carousel";
import AdsImages from "../../asset/sans-ads";
import "./style.css";

function AdsSlide() {
  return (
    <Carousel>
      <Carousel.Item className="car-page">
        <img className="ads-images" src={AdsImages.FirstAds} />
      </Carousel.Item>
      <Carousel.Item className="car-page">
        <img className="ads-images" src={AdsImages.SecondAds} />
      </Carousel.Item>
      <Carousel.Item className="car-page">
        <img className="ads-images" src={AdsImages.ThirdAds} />
      </Carousel.Item>
    </Carousel>
  );
}

export default AdsSlide;
