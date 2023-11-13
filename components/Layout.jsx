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
          src="https://www.googletagmanager.com/gtag/js?id=G-B1QMFN7LCB"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-B1QMFN7LCB');`}
        </script>


        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-B1QMFN7LCB"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-B1QMFN7LCB');
        </script> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10775302462"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10775302462');`}
        </script>

        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-10775302462/xW14COak6YoYEL6iiJIo'});`}
        </script>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Website design and mobile app development in Nigeria - Data Megathos",
  description:
    "Website Design, Mobile App development and digital marketing agency in Lagos Nigeria",
  keyword:
    "Website Design, Mobile App Development, Website design in Lagos, Website Design in Nigeria, Mobile App development in Lagos, Webdite Development, Software development in Lagos Nigeria, SEO Company in Lagos Nigeria, Social Media Management, Google Ads Agency",
};
