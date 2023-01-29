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
        <meta
          name="google-site-verification"
          content="GvwMlTY33UyXTjry5K25aQpLydorjxlLWh2sD17Yfwg"
        />
        <meta name="msvalidate.01" content="79896EB0E2D3284708D62C3B6C3635AA" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-111472173-1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'UA-111472173-1');`}
        </script>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Best Website design and mobile app development in Lagos, Nigeria - Data Megathos",
  description:
    "Website and Mobile App development agency with office in Lagos Nigeria",
  keyword:
    "Website Design, Mobile App Development, Website design in Lagos, Website Design in Nigeria, Mobile App development in Lagos, Webdite Development, Software development in Lagos Nigeria, SEO Company in Lagos Nigeria, Social Media Management, Google Ads Agency",
};
