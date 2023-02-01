import "../styles/globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src="assets/js/vendor/jquery-3.6.0.min.js" />
      <Script async src="assets/js/popper.min.js" />
      <Script async src="assets/js/bootstrap.min.js" />
      <Script async src="assets/js/slick.min.js" />
      <Script async src="assets/js/jquery.magnific-popup.min.js" />
      <Script async src="assets/js/isotope.pkgd.min.js" />
      <Script async src="assets/js/imagesloaded.pkgd.min.js" />
      <Script async src="assets/js/jquery.nice-select.min.js" />
      <Script async src="assets/js/jquery.counterup.min.js" />
      <Script async src="assets/js/jquery.waypoints.js" />
      <Script async src="assets/js/wow.min.js" />
      <Script async src="assets/js/custom.js" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      ;{/* Same as */}
      <ToastContainer />;
      <Component {...pageProps} />
    </>
  );
}
