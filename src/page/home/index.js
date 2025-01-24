import {
  NavBar,
  AdsSlide,
  IconApps,
  ProductCard,
  XSlideProduct,
} from "../../component";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Logo } from "../../asset";
import "./style.css";
import AuthUser from "../../component/AuthUser";
import { useEffect, useState } from "react";
import api from "../../component/api";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.post("/product").then((response) => {
      setProducts(response.data.data);
    });
  }, []);
  return (
    <>
      <NavBar />
      <section>
        <div className="hero">
          <Row className="p-0 m-0">
            <Col sm={12} lg={6} className="p-0">
              <Card
                className="m-4 p-5 d-flex align-items-start hero-card"
                style={{ background: "transparent" }}
              >
                <h1
                  className="text-lg-start fs-1 text-sm-center mt-2 "
                  style={{ fontFamily: "Inter, serif" }}
                >
                  Sans-buy
                </h1>
                <h2 className="text-lg-start fs-5 text-sm-center fw-light mb-3">
                  Cari, pilih, dan beli produk favoritmu dengan kemudahan yang
                  tak terbatas di Sans-Buy! Temukan barang impianmu, nikmati
                  pengalaman berbelanja online yang lebih baik, dan rasakan
                  kepuasan berbelanja dengan Sans-Buy.
                </h2>
                <Button
                  variant="outline-primary"
                  className="rounded-pill my-2 mx-3 shop px-4 mb-2"
                  style={{ transition: "0.2s" }}
                >
                  Go Shop
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Button>
              </Card>
            </Col>
            <Col sm={0} lg={6}></Col>
          </Row>
        </div>
      </section>
      {/* ads section */}
      <section>
        <Row className="p-0 m-0">
          <Col lg={10} sm={12} className="py-2 pe-1">
            <AdsSlide />
          </Col>
          <Col lg={2} sm={0} className="py-2 ps-1">
            <Card className="w-100 h-100 p-2">
              <Row className="p-0 m-0">
                <Col lg={12} className="p-0">
                  <img
                    src={Logo}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                    }}
                    className="rounded"
                    alt=""
                  />
                  <Col className="p-2">
                    <Button className="rounded-pill">
                      Sans Ads<i className="ms-2 fa-solid fa-arrow-right"></i>
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="p-0 m-0 d-flex flex-column align-items-center">
          <Col lg={8}>
            <Row className="justify-content-center px-3">
              <IconApps
                src={Logo}
                title={"Top Up Pulsa"}
                className="col-lg-1 col-md-2 col-4"
              />
              <IconApps
                src={Logo}
                title={"Bayar Tagihan Listrik"}
                className="col-lg-1 col-md-2 col-4"
              />
              <IconApps
                src={Logo}
                title={"Transfer"}
                className="col-lg-1 col-md-2 col-4"
              />
              <IconApps
                src={Logo}
                title={"Top Up Sans-Pay"}
                className="col-lg-1 col-md-2 col-4"
              />
              <IconApps
                src={Logo}
                title={"Bayar Asuransi"}
                className="col-lg-1 col-md-2 col-4"
              />
              <IconApps
                src={Logo}
                title={"Cari Makanan"}
                className="col-lg-1 col-md-2 col-4"
              />
            </Row>
          </Col>
        </Row>
      </section>
      <section>
        <XSlideProduct
          offset={600}
          item={() => (
            <>
              {products?.map((item) => (
                <ProductCard
                  src={item.image_url}
                  style={{ width: "12rem" }}
                  title={item.name}
                  price={item.price}
                  place={"Bandung"}
                  href={"/#"}
                />
              ))}
            </>
          )}
        />
      </section>
      <section>
        <XSlideProduct
          offset={600}
          item={() => (
            <>
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
              <ProductCard
                src={Logo}
                style={{ width: "12rem" }}
                title={"Product Name kana aksa aksna ajdskha asiajh"}
                price={20000}
                place={"Bandung"}
                href={"/#"}
              />
            </>
          )}
        />
      </section>
    </>
  );
}

export default AuthUser(Home);
