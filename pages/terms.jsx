import Layout from "../components/Layout";
import Link from "next/link";

export default function terms() {
  return (
    <Layout
      title="Terms and Conditions - Data Megathos"
      description="Terms and Conditions of Data Megathos"
    >
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Terms and Conditions</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Terms and Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
