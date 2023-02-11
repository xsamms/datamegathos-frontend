import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <Layout
      title="About - Data Megathos"
      description="Data Megathos is a leading website design, mobile app development and digital marketing agency in Lagos, Nigeria."
    >
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>About us</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area-v3 pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box mb-50">
                <div className="section-title mb-20">
                  <span className="span">ABOUT DATA MEGATHOS</span>
                  <h2>Something About us</h2>
                </div>
                <h5>
                  Data Megathos is a leading website design, mobile app
                  development and digital marketing agency in Lagos, Nigeria. We
                  are a full-service web design, mobile app development and
                  digital marketing agency with offices in Lagos, Nigeria.
                </h5>
                <p>
                  We help you build your brand online through our range of
                  digital marketing services including website design and
                  development, mobile app development, Google ads, SEO services
                  and more. Our team has over 10+ years experience in the
                  industry and we work with businesses of all sizes to create
                  powerful websites that drive results.
                </p>
                <div className="progress-list mb-10">
                  <div className="single-progress">
                    <div className="progress-title">
                      <h5>
                        Website Design <span>90%</span>
                      </h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="single-progress">
                    <div className="progress-title">
                      <h5>
                        Mobile App Development <span>85%</span>
                      </h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="single-progress">
                    <div className="progress-title">
                      <h5>
                        Google Ads <span>95%</span>
                      </h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="single-progress">
                    <div className="progress-title">
                      <h5>
                        Search Engine Optimization <span>85%</span>
                      </h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="single-progress">
                    <div className="progress-title">
                      <h5>
                        Social Media Management <span>90%</span>
                      </h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="single-progress">
                    <div className="progress-title">
                      <h5>
                        S0ftware Development <span>80%</span>
                      </h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <p>
                  Not only do these blocks serve as our model for our services,
                  but they’ve created a culture that values team unity and
                  collaboration.
                </p>
                <Link href="/contact" className="main-btn">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-box mb-50">
                <div className="shape">
                  <Image
                    src="/assets/img/grid.png"
                    alt="shape"
                    width={300}
                    height={236}
                  />
                </div>
                <div className="about-img">
                  <Image
                    src="/assets/img/about-1.jpg"
                    alt="About Image"
                    width={570}
                    height={559}
                  />
                </div>
                <div className="experience-box">
                  <div className="content">
                    <h2>10</h2>
                    <h4>Years Of Experience</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-110 pb-80 work-process work-process-bc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-65 wow fadeInUp">
                <h2>Our Work Process</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process mb-40 wow fadeInUp" data-num="01">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/process-1.svg"
                    alt="Collecting Info Data"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="info">
                  <h5>Collecting Info Data</h5>
                  <p>
                    This process involves asking and collecting data about the
                    project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process mb-40 wow fadeInUp" data-num="02">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/process-2.svg"
                    alt="Setup Work Target"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="info">
                  <h5>Setup Work Target</h5>
                  <p>
                    This process involves setting up the goal to achieve in the
                    project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process mb-40 wow fadeInUp" data-num="03">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/process-3.svg"
                    alt="Creative Ideas"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="info">
                  <h5>Creative Ideas </h5>
                  <p>
                    This process involves brainstorming and creating ideas for
                    the project
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process mb-40 wow fadeInUp" data-num="04">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-4.svg"
                    alt="Initialize Project"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="info">
                  <h5>Initialize Project</h5>
                  <p>
                    This process involves setting up the project and going to
                    work
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process mb-40 wow fadeInUp" data-num="05">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-6.svg"
                    alt="Test Project"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="info">
                  <h5>Test Project</h5>
                  <p>
                    This process involves testing and adjusting the final
                    project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process mb-40 wow fadeInUp" data-num="06">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-1.svg"
                    alt="Deploy Project"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="info">
                  <h5>Deploy Project </h5>
                  <p>
                    This process involves rolling out the project for the client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area-v4 pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-65 wow fadeInUp">
                <h2>Meet our Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-member mb-30 wow fadeInUp">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/sam.jpg"
                    alt="Samuel Williams"
                    width={370}
                    height={440}
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h5>Samuel Williams</h5>
                  <p className="position">Head, Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-member mb-30 wow fadeInDown">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/Sarah.jpg"
                    alt="Sarah"
                    width={370}
                    height={440}
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h5>Sarah Uduak</h5>
                  <p className="position">Head, Administration</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-member mb-30 wow fadeInUp">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/Moris.jpg"
                    alt="Moris"
                    width={370}
                    height={440}
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h5>Moris Nwajei</h5>
                  <p className="position">Head, PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
