import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  }, [width]);

  return (
    <>
      <header className="header-area-v1 transparent-header">
        <div className="header-navigation d-flex">
          <div className="site-branding">
            <div className="brand-logo">
              {width < 600 ? (
                <a href="/">
                  <Image
                    src="/assets/img/data-megathos-logo.png"
                    alt="Data Megathos Logo"
                    width={150}
                    height={80}
                  />
                </a>
              ) : (
                <Link href="/">
                  <Image
                    src="/assets/img/data-megathos-logo.png"
                    alt="Data Megathos Logo"
                    width={150}
                    height={80}
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="navigation-area">
            <div className="top-header-area">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="top-left">
                    <ul>
                      <li>
                        <span>
                          <i className="fal fa-map-marker-alt"></i>Villa C,
                          Eleganza Estate, by Chevron, Lekki - Lagos
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-envelope"></i>
                          <Link href="/">
                            <span>creative@datamegathos.com</span>
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="top-right">
                    <ul>
                      <li>
                        <Link
                          href="https://facebook.com/datamegathos"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/datamegathos"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/18507734"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/datamegathos"
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="primary-menu">
              <div className="nav-menu d-flex justify-content-between">
                <div className="navbar-close">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>

                {width < 600 ? (
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <a href="/" className="nav-link page_scroll  active">
                          Home
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/about" className="nav-link">
                          About
                        </a>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#" className="nav-link">
                          Services
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/website-design">Website Design</a>
                          </li>
                          <li>
                            <a href="/mobile-app-development">
                              Mobile App Development
                            </a>
                          </li>
                          <li>
                            <a href="/google-ads">Google Ads</a>
                          </li>
                          <li>
                            <a href="/seo">SEO</a>
                          </li>
                          <li>
                            <a href="/social-media-management">
                              Social Media Management
                            </a>
                          </li>
                          <li>
                            <a href="/software-development">
                              Software Development
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="/contact" className="nav-link">
                          Contact
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/blog" className="nav-link">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </nav>
                ) : (
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <Link href="/" className="nav-link page_scroll  active">
                          Home
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/about" className="nav-link">
                          About
                        </Link>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link href="#" className="nav-link">
                          Services
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/website-design">Website Design</Link>
                          </li>
                          <li>
                            <Link href="/mobile-app-development">
                              Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/google-ads">Google Ads</Link>
                          </li>
                          <li>
                            <Link href="/seo">SEO</Link>
                          </li>
                          <li>
                            <Link href="/social-media-management">
                              Social Media Management
                            </Link>
                          </li>
                          <li>
                            <Link href="/software-development">
                              Software Development
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link href="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/blog" className="nav-link">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}

                <div className="nav-button">
                  <Link
                    href="https://wa.link/6cd8ei"
                    className="main-btn"
                    target="_blank"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="nav-toggle">
                <div className="navbar-toggler float-right">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
