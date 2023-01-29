import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>

        <script src="assets/js/popper.min.js"></script>

        <script src="assets/js/bootstrap.min.js"></script>

        <script src="assets/js/slick.min.js"></script>

        <script src="assets/js/jquery.magnific-popup.min.js"></script>

        <script src="assets/js/isotope.pkgd.min.js"></script>

        <script src="assets/js/imagesloaded.pkgd.min.js"></script>

        <script src="assets/js/jquery.nice-select.min.js"></script>

        <script src="assets/js/jquery.counterup.min.js"></script>

        <script src="assets/js/jquery.waypoints.js"></script>

        <script src="assets/js/wow.min.js"></script>

        <script src="assets/js/custom.js"></script>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Best Website design and mobile app development in Lagos, Nigeria | Data Megathos",
  description:
    "Website and Mobile App development agency with office in Lagos Nigeria",
  keyword:
    "Website Design, Mobile App Development, Website design in Lagos, Website Design in Nigeria, Mobile App development in Lagos, Webdite Development, Software development in Lagos Nigeria, SEO Company in Lagos Nigeria, Social Media Management, Google Ads Agency",
};
