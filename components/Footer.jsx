import Link from "next/link";
import Image from "next/image";
import { API_URI } from "../config";

export default function Footer() {
  return (
    <>
      <footer className="footer-area-v1">
        <div className="footer-widget-area">
          <div className="container">
            <div className="footer-top wow fadeInUp">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-4 text-center">
                  <div className="footer-logo text-center mb-20">
                    <Link href="/" className="datapro_logo">
                      <Image
                        src="/assets/img/Logo-Data-Megathos1.png"
                        alt="Data Megathos Logo"
                        width={142}
                        height={80}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="newsletter-item mb-20">
                    <form action="#">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          required
                        />
                        <button className="main-btn">
                          <i className="fa fa-envelope"></i> Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="social-media-links mb-20">
                    <ul>
                      <li>
                        <a
                          href="https://facebook.com/datamegathos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/datamegathos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/18507734"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/datamegathos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-widget pt-85 mb-60">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="widget about-widget mb-45 wow fadeInUp">
                    <h4 className="widget-title">About Us</h4>
                    <p>
                      Data Megathos is a leading website design, mobile app
                      development and digital marketing agency in Lagos,
                      Nigeria. We are a full-service web design, mobile app
                      development and digital marketing agency with offices in
                      Lagos, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="widget widget-categories mb-45 wow fadeInUp">
                    <h4 className="widget-title">Links</h4>
                    <ul className="widget-link">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/privacy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms">Terms and Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="widget recent-post-widget mb-45 wow fadeInUp">
                    <h4 className="widget-title">Feutured Posts</h4>
                    <div className="recent-post">
                      {/* {featured.data.map((feat) => {
                        return (
                          <div key={feat.id} className="post-item">
                            <Image
                              src={
                                feat.attributes.featured_image.data.attributes
                                  .formats.thumbnail.url
                              }
                              alt={
                                feat.attributes.featured_image.data.attributes
                                  .name
                              }
                              width={85}
                              height={66}
                            />
                            <div className="post-content">
                              <span className="post-date">
                                <a href="#">
                                  {moment(feat.attributes.date).format(
                                    "MMM DD YYYY"
                                  )}
                                </a>
                              </span>
                              <h6 className="title">
                                <a href={`/blog/${feat.attributes.slug}`}>
                                  {feat.attributes.title}
                                </a>
                              </h6>
                            </div>
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="widget contact-widget mb-45 wow fadeInUp">
                    <h4 className="widget-title">Contuct Us</h4>
                    <div className="contact-info">
                      <p>
                        <i className="fa fa-map-marker-alt"></i>Villa C,
                        Eleganza Estate, by Chevron, Lekki - Lagos
                      </p>
                      <p>
                        <i className="fa fa-envelope"></i>
                        <a>
                          <span>creative@datamegathos.com</span>
                        </a>
                      </p>
                      <p>
                        <i className="fa fa-phone"></i>
                        <a href="tel:+2349157445743" target="_blank">
                          (+234) 915 744 5743
                        </a>
                      </p>
                      <p>
                        <img
                          src="assets/img/whatsapp.png"
                          alt=""
                          className="whatsapp-i"
                          width="8%"
                          height="8%"
                        />
                        <a
                          href="https://wa.link/6cd8ei"
                          target="_blank"
                          rel="noreferrer"
                        >
                          (+234) 818 260 0002
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text text-center">
                  <p>Copyright © 2023 | Data Megaths - All Right Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Link href="#" className="back-to-top">
        <i className="far fa-angle-up"></i>
      </Link>
    </>
  );
}
