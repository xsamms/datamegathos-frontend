import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function WebsiteDesign() {
  const form = useRef();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wn76fqg",
        "template_5w0v6ib",
        form.current,
        "vm7EWYoc_fXz6jzMy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast.success("Message sent successfully");
    router.push({ pathname: "/" });
  };
  return (
    <Layout title="Website design and development - Data Megathos">
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Website Design</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Website Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cta-area-v1" style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="row no-gutters cta-wrapper-one">
            <div className="col-lg-6 col-md-12 item-bg-one">
              <div className="cta-item item-one d-flex align-items-center">
                <div className="info">
                  <h3>Get a website today!</h3>
                </div>
                <div className="button">
                  <Link href="#website" className="main-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 item-bg-two">
              <div className="cta-item item-two d-flex align-items-center">
                <div className="info">
                  <span>Website Design</span>
                  <h3>You can't afford to lose business</h3>
                </div>
                <div className="button">
                  <a
                    href="https://wa.link/6cd8ei"
                    className="main-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-area-v1 pt-120 pb-40">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="about-img mb-80 wow fadeInLeft">
                <Image
                  src="/assets/img/website-design-success.jpg"
                  alt=""
                  width={445}
                  height={578}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-80">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="span">Website Design</span>
                  <h2>Your website is your chance to tell your story</h2>
                </div>
                <p>
                  A website is your chance to tell your story. It should be a
                  reflection of your brand, and it should reflect the kind of
                  person you are. Your website should be easy to navigate, as
                  well as easy on the eyes—both in terms of design and content.
                </p>
                <p>
                  It's also a place where you can stay competitive, help you
                  build your brand, and attract new customers. That's why we've
                  made sure our designs have everything you need to succeed on
                  the web.
                </p>
                <p>We design websites mainly with two platforms:</p>
                <ul className="about-list-item">
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>WordPress Website Design </h5>
                      <p>
                        This is the more affordable and fastest to develop your
                        website. It's also their easiest for a non-techy client
                        to work with. This website can be hosted in the cloud as
                        well as in shared hosting.
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Custom website design with React.js/Next.js </h5>
                      <p>
                        This is more robust and more in-control website
                        development amongst the two. It's also more expensive
                        and more secure. We mainly deploy these website in the
                        cloud, although shared hosting maybe considered.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-area-v3 pt-120 pb-60">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Website Design Features
        </h2>
        <div className="container">
          <div className="portfolio-wrapper">
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/responsive-website-design.jpg"
                      alt="pResponsive Website Design"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Responsive Website</h2>
                    <p>
                      A responsive website is a website that can adapt to any
                      device screen size that's been used to view the website.
                      You may view your website with your phone, tablet or
                      laptop and it will adapt to their screen sizes and still
                      have same appearance.
                    </p>
                    <p>
                      Every website we develop are responsive regardless of
                      which platform (WordPress or React.js/Next.js) we use to
                      develop it. We develop one website that fits all your
                      devices regardless of their screen sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item mb-30 wow fadeInRight">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/beautiful-website.jpg"
                      alt="Beautiful Website"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Stand-Out Website</h2>
                    <p>
                      Apart from your website being responsive, your website
                      also need to stand-out and look amazing in any device used
                      to view it. The power of a website can be the difference
                      between being left behind and being in front.
                    </p>
                    <p>
                      The more oustanding and amazing your website looks and
                      feels to your customers, the more useful it will be. The
                      look and feel of your website helps convey your brand
                      identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/seo-website.jpg"
                      alt="SEO Optimized"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>SEO Enabled</h2>
                    <p>
                      An SEO-enabled website helps customers find you online
                      easily. When customers search for terms that relate to
                      your business in search engines (like Google), a good
                      SEO-enabled website will be amongst the first to appear.
                    </p>
                    <p>
                      At Data Megathos, we build websites with SEO in mind.
                      Every website we built is Search Engine Optimized. So our
                      clients don't spend much on SEO of any website we built
                      for them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item mb-30 wow fadeInRight">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/Web-hosting-provider.jpg"
                      alt="Web Hosting Provider"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Domain and Website Hosting</h2>
                    <p>
                      Web hosting is optional. You may choose to host your
                      website in which ever hosting company you prefer. Or you
                      may allow us choose a hosting company for your website.
                    </p>
                    <p>
                      We either host your website on a cloud server or a shared
                      hosting server. Cloud server is more efficient and
                      reliable, but also more expensive at the long run. You may
                      also purchase your domain in the hosting company or not.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="website"
        className="contact-area pt-110 pb-120 bg_cover"
        style={{ backgroundImage: "url(assets/img/contact-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title section-title-white mb-75 text-center wow fadeInUp">
                <span className="span">Get in touch</span>
                <h2>Request for a quote</h2>
                <p style={{ color: "#fff" }}>Kindly fill all fields</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="contact-form wow fadeInUp">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select name="service" className="form_control">
                          <option value="Website Design">Website Design</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <button type="submit" className="main-btn">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
