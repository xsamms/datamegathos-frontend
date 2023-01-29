import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link
          rel="stylesheet"
          href="assets/fonts/fontawesome/css/all.min.css"
        />

        <link rel="stylesheet" href="assets/css/slick.css" />

        <link rel="stylesheet" href="assets/css/nice-select.css" />

        <link rel="stylesheet" href="assets/css/animate.css" />

        <link rel="stylesheet" href="assets/css/default.css" />

        <link rel="stylesheet" href="assets/css/style.css" />

        <link rel="stylesheet" href="assets/css/responsive.css"></link>
      </Head>

      <body data-spy="scroll" data-target=".main-menu" data-offset="0">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
