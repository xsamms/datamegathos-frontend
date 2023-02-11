import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { API_URI } from "../config";
import BlogCard from "../components/BlogCard";

export default function Home({ posts }) {
  return (
    <Layout>
      <section
        className="hero-area-v2 bg_cover"
        style={{ backgroundImage: "url(assets/img/hero-bg3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-content">
                <span className="span wow fadeInUp" data-wow-delay=".5s">
                  Welcome to Data Megathos
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  Best Website design and Mobile App development services
                </h1>
                <Link
                  href="https://wa.link/6cd8ei"
                  className="main-btn"
                  target="_blank"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-v2 pt-110 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content-box mb-60">
                <div className="section-title mb-20 wow fadeInUp">
                  <span className="span">Who we are</span>
                  <h2>We Are A Leading Web & Digital Agency</h2>
                </div>
                <p>
                  Data Megathos is a leading website design, mobile app
                  development and digital marketing agency in Lagos, Nigeria. We
                  are a full-service web design, mobile app development and
                  digital marketing agency with offices in Lagos, Nigeria. We
                  help you build your brand online through our range of digital
                  marketing services including website design and development,
                  mobile app development, Google ads, SEO services and more. Our
                  team has over 10+ years experience in the industry and we work
                  with businesses of all sizes to create powerful websites that
                  drive results.
                </p>

                <div className="about-list-item wow fadeInUp">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-item">
                        <li>Website design</li>
                        <li>Mobile App development </li>
                        <li>Software development </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-item">
                        <li>Google Ads</li>
                        <li>Search Engine Optimization </li>
                        <li>Social Media Management </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="main-btn wow fadeInUp">
                  Get A Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img mb-60  wow fadeInRight">
                <Image
                  src="/assets/img/about-v4.jpg"
                  alt="Data Megathos staff"
                  width={652}
                  height={530}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-area service-area-v2 pt-110">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-65 wow fadeInUp">
                <span className="span">what we&apos;re offering</span>
                <h2>
                  We shape the <br /> perfect solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-service-item wow fadeInUp">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/process-3.svg"
                    alt="service-icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="service-text">
                  <h5>Website Design</h5>
                  <p>Outstanding and functional website development</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-service-item wow fadeInUp">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/process-1.svg"
                    alt="service-icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="service-text">
                  <h5>Mobile App Development</h5>
                  <p>Native and cross platform Mobile App</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-service-item wow fadeInUp">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-2.svg"
                    alt="service-icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="service-text">
                  <h5>Google Ads</h5>
                  <p>Target and reach the right audience for your business</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-service-item wow fadeInUp">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-1.svg"
                    alt="service-icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="service-text">
                  <h5>SEO</h5>
                  <p>Rank and be seen in search engine result pages</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-service-item wow fadeInUp">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-6.svg"
                    alt="service-icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="service-text">
                  <h5>Social Media Management</h5>
                  <p>Create a loyal and active community of customers</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-service-item wow fadeInUp">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-5.svg"
                    alt="service-icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="service-text">
                  <h5>Software Development</h5>
                  <p>Meet your business goals with easy-to-use software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-area-v1" style={{ margin: "40px 0px" }}>
        <div className="container">
          <div className="row no-gutters cta-wrapper-one">
            <div className="col-lg-6 col-md-12 item-bg-one">
              <div className="cta-item item-one d-flex align-items-center">
                <div className="info">
                  <h3>Digital marketing made easy</h3>
                </div>
                <div className="button">
                  <Link href="/contact" className="main-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 item-bg-two">
              <div className="cta-item item-two d-flex align-items-center">
                <div className="info">
                  <span>Digital marketing</span>
                  <h3>Need Some Help?</h3>
                </div>
                <div className="button">
                  <Link
                    href="https://wa.link/6cd8ei"
                    className="main-btn"
                    target="_blank"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="portfolio-area-v2 pt-110 pb-90">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title section-title-white text-center mb-70 wow fadeInUp">
                <span className="span">Portfolio</span>
                <h2>Case Study</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-slider-one wow fadeInUp d-flex">
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/oshversity.jpg"
                      alt="OSHversity"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="http://oshversity.com"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="http://oshversity.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            OSHversity.com
                          </a>
                        </span>
                        <h5>
                          <a
                            href="http://oshversity.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Training & Development Company
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/judesblawg.jpg"
                      alt="Judesblawg"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="http://judesblawg.com"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="http://judesblawg.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Judesblawg.com
                          </a>
                        </span>
                        <h5>
                          <a
                            href="http://judesblawg.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Law & Political blog
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/mogaga.jpg"
                      alt="Mogaga.ng"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="https://www.mogaga.ng/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="https://www.mogaga.ng/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Mogaga.ng
                          </a>
                        </span>
                        <h5>
                          <a
                            href="https://www.mogaga.ng/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Mogaga Regalia
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/australiaelectrohub.jpg"
                      alt="Australia Electrohub"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="http://www.australiaelectrohub.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="http://www.australiaelectrohub.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Australiaelectrohub.com
                          </a>
                        </span>
                        <h5>
                          <a
                            href="http://www.australiaelectrohub.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Australian Electronics
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-slider-one wow fadeInUp d-flex">
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/zahariworkspace.jpg"
                      alt="Zahari Work Space"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="https://zahariworkspace.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="https://zahariworkspace.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            zahariworkspace.com
                          </a>
                        </span>
                        <h5>
                          <a
                            href="https://zahariworkspace.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Co-Working Space
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/oshafrica.jpg"
                      alt="OSHAfrica.africa"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="https://oshafrica.africa/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="https://oshafrica.africa/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            oshafrica.africa
                          </a>
                        </span>
                        <h5>
                          <a
                            href="https://oshafrica.africa/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Occupational Safety and Health Africa Foundation
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/harroldsproperties.jpg"
                      alt="Harrolds Properties"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="http://www.harroldsproperties.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="http://www.harroldsproperties.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            harroldsproperties.com
                          </a>
                        </span>
                        <h5>
                          <a
                            href="http://www.harroldsproperties.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Harrolds Properties and Investment Ltd
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src="/assets/img/case-study/pistis.jpg"
                      alt="Pistis Global Education"
                      width={308}
                      height={323}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <a
                          href="http://www.pistisglobaleducation.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                        <span className="tag">
                          <a
                            href="http://www.pistisglobaleducation.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            pistisglobaleduction.com
                          </a>
                        </span>
                        <h5>
                          <a
                            href="http://www.pistisglobaleducation.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Pistis Global Educational Services
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="testimonials-area-v1 pb-120 bg_cover"
        style={{ backgroundImage: "url(assets/img/testimonial-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title section-title-white text-center mb-75 wow fadeInUp">
                <span className="span">Client Testimonials</span>
                <h2>What our clients say </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider-one wow fadeInUp d-flex">
                <div className="single-testimonial">
                  <div className="testimonial-user-info mb-50">
                    <div className="user-thumb-title">
                      <div className="thumb">
                        <Image
                          src="/assets/img/ehi-iden.jpg"
                          alt="Ehi Iden"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="title">
                        <h5>Ehi Iden</h5>
                        <p className="position">CEO OHSM</p>
                      </div>
                    </div>
                    <div className="quote">
                      <i className="fa fa-quote-left"></i>
                    </div>
                  </div>
                  <p>
                    Data Megathos has been a blessing in our online presence
                    journey. They have built amazing websites for us. I highly
                    recommend them.
                  </p>
                </div>
                <div className="single-testimonial">
                  <div className="testimonial-user-info mb-50">
                    <div className="user-thumb-title">
                      <div className="thumb">
                        <Image
                          src="/assets/img/barr-jude.jpg"
                          alt="Barrister Jude Igbanoi"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="title">
                        <h5>Barr. Jude Igbanoi</h5>
                        <p className="position">MD - Judesblawg</p>
                      </div>
                    </div>
                    <div className="quote">
                      <i className="fa fa-quote-left"></i>
                    </div>
                  </div>
                  <p>
                    I love how reliable and efficient Data Megathos is. I have
                    worked with them for many years and I'm satisfied with the
                    works. We have great relationship with them.
                  </p>
                </div>
                <div className="single-testimonial">
                  <div className="testimonial-user-info mb-50">
                    <div className="user-thumb-title">
                      <div className="thumb">
                        <Image
                          src="/assets/img/kenedy-mogaga.jpg"
                          alt="Kenedy Mogaga"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="title">
                        <h5>Kenedy Mogaga</h5>
                        <p className="position">MD - Mogaga Regalia</p>
                      </div>
                    </div>
                    <div className="quote">
                      <i className="fa fa-quote-left"></i>
                    </div>
                  </div>
                  <p>
                    It's been nice working with Sam of Data Megathos. He has
                    helped us with our social media and also built our website.
                    Kindly patronize them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-area-v2 pt-110 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-70 wow fadeInUp">
                <span className="span">Latest Blog</span>
                <h2>Our Insights & Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {posts.data.map((item) => {
              return (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <BlogCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="our-clients pt-125 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="clients-content-box mb-40">
                <div className="section-title mb-15 wow fadeInUp">
                  <h2>Our Professional Clients</h2>
                </div>
                <p>
                  Some of our awesome professional clients. Do you wish to
                  become one of them?
                </p>
                <Link href="/contact" className="site-btn">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="clients-img-box mb-40 wow fadeInUp">
                <ul className="clients-imgs">
                  <li>
                    <a href="#">
                      <Image
                        src="/assets/img/mogaga-logo.jpg"
                        alt="Mogaga Logo"
                        width={95}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/assets/img/oshversity-logo.jpg"
                        alt="Oshversity Logo"
                        width={95}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/assets/img/judesblawg-logo.jpg"
                        alt="Judesblawg logo"
                        width={95}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/assets/img/ohsm.jpg"
                        alt="OHSM"
                        width={95}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/assets/img/pistis-logo.jpg"
                        alt="Pistis Global"
                        width={95}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/assets/img/nawajob.jpg"
                        alt="Nawajob"
                        width={95}
                        height={30}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URI}/api/posts?sort=date:DESC&pagination[limit]=3&populate=*`
  );
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 1,
  };
}
