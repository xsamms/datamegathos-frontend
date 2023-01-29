import Layout from "../components/Layout";
import Link from "next/link";

export default function contact() {
  return (
    <Layout>
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Contact Us</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-information-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-info-item mb-40">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info">
                  <p>
                    <Link
                      href="tel:+2349157445743
                                    "
                    >
                      +234 915 744 5743
                    </Link>
                  </p>
                  <p>
                    <Link href="https://wa.link/6cd8ei" target="_blank">
                      +234 818 260 0002
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-info-item mb-40">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                  <p>
                    <a href="/cdn-cgi/l/email-protection#623b0d17104c2305070c011b22250f030b0e4c210d0f6f68424242424242424242424242424242424242424242424242424242424242424242424242">
                      <span
                        className="__cf_email__"
                        data-cfemail="c891a7bdbae689afada6abb1888fa5a9a1a4e68ba7a5"
                      >
                        creative@datamegathos.com
                      </span>
                    </a>
                  </p>
                  <p>
                    <a href="/cdn-cgi/l/email-protection#fba2948e89d5ba9c9e959882bbbc969a9297d5b89496f6f1dbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdb">
                      <span
                        className="__cf_email__"
                        data-cfemail="64291d4a370c0b14242c0b1009050d084a270b09"
                      >
                        datamegathos@gmail.com
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-info-item mb-40">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info">
                  <p>Villa C, Eleganza Estate, by Chevron, Lekki - Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area-v2 pb-120">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <h2>GET IN TOUCH</h2>
                  <p>
                    Your email address will not be published. All fields are
                    required
                  </p>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="phone"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select className="form_control">
                          <option>Choose a service</option>
                          <option value="Website Design">Website Design</option>
                          <option value="Mobile App Development">
                            Mobile App Development
                          </option>
                          <option value="Google Ads">Google Ads</option>
                          <option value="SEO">
                            Search Engine Optimization
                          </option>
                          <option value="Social Media Management">
                            Social Media Management
                          </option>
                          <option value="Software Development">
                            Software Development
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          name="message"
                          placeholder="Message ..."
                          className="form_control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <button className="main-btn">SEND MESSAGE</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map-section">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5753057921806!2d3.541117714266399!3d6.448532925820565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda844d2464e1f526!2zNsKwMjYnNTQuNyJOIDPCsDMyJzM1LjkiRQ!5e0!3m2!1sen!2sng!4v1672690819109!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
