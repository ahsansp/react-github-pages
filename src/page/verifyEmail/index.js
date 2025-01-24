import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../../component/api";
function VerifiyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    if (token) {
      api
        .post("/verify", {
          token: token,
        })
        .then((response) => {
          console.log(response);
          if (response.data.massage === "success") {
            setIsVerified(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);
  return (
    <>
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="p-5 d-flex flex-column border rounded"
          style={{ width: "30rem" }}
        >
          <h1 className="align-self-center">Sigin sans</h1>
          <div
            className={["alert", "alert-success"].join(" ")}
            style={{ textAlign: "justify" }}
            role="alert"
          >
            {() => {
              if (!isVerified) {
                return `Terima kasih telah mendaftar di Sans-buy. Untuk menyelesaikan proses
            pendaftaran, kami memerlukan verifikasi email Anda. Silakan buka
            kotak masuk email Anda dan klik tautan verifikasi yang telah kami
            kirimkan. Jika Anda tidak menemukan email kami, pastikan untuk
            memeriksa folder spam atau promosi.`;
              } else {
                return `Verifikasi email berhasil, untuk tahap selanjutnya anda dapat melakukan
             login untuk melanjutkan berbelanja`;
              }
            }}
            {!isVerified &&
              `Terima kasih telah mendaftar di Sans-buy. Untuk menyelesaikan proses
            pendaftaran, kami memerlukan verifikasi email Anda. Silakan buka
            kotak masuk email Anda dan klik tautan verifikasi yang telah kami
            kirimkan. Jika Anda tidak menemukan email kami, pastikan untuk
            memeriksa folder spam atau promosi.`}
            {isVerified &&
              `Verifikasi email berhasil, untuk tahap selanjutnya anda dapat melakukan
             login untuk melanjutkan berbelanja`}
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default VerifiyEmail;
