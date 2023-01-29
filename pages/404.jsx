import Layout from "../components/Layout";
import Link from "next/link";

export default function notFoundPage() {
  return (
    <Layout title="Page not found">
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h2 style={{ color: "#fff" }}>404 Error</h2>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Page Not Found</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="error404">
        <h4>Sorry, this page does not exist</h4>
        <Link href="/">Go back Home</Link>
      </section>
    </Layout>
  );
}
