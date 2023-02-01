import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function GoogleAds() {
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
    <Layout title="Google Ads - Data Megathos">
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Google Ads</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Google Ads</li>
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
                  <h3>Google Ads Services?</h3>
                </div>
                <div className="button">
                  <Link href="#google" className="main-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 item-bg-two">
              <div className="cta-item item-two d-flex align-items-center">
                <div className="info">
                  <span>Google Ads</span>
                  <h3>Reach your ideal customers</h3>
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
      <section className="about-area-v1 pt-120 pb-40">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="about-img mb-80 wow fadeInLeft">
                <Image
                  src="/assets/img/google-ads1.jpg"
                  alt=""
                  width={570}
                  height={650}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-80">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="span">Google Ads</span>
                  <h2>
                    Google Ads helps you create brand awareness and improve your
                    ROI
                  </h2>
                </div>
                <p>
                  When you&apos;re looking to advertise your products or
                  services online, it&apos;s important to know which platforms
                  are the best for your target audience. Google Ads is a great
                  choice because it can help you create brand awareness, target
                  the right audience, and better ensure that you get real
                  results.
                </p>
                <p>Types of Google Ads we run for our clients:</p>
                <ul className="about-list-item">
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Google Search Ads </h5>
                      <p>
                        Reach customers interest in your product or service with
                        text ads
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Google Display Ads </h5>
                      <p>Run different kinds of ads across the web</p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Google Shopping Ads</h5>
                      <p>Promote your products with shopping ads</p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Google Video Ads </h5>
                      <p>
                        Reach and engage viewers on YouTube and across the web
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Google App Ads </h5>
                      <p>Drive App promotion across Google&apos;s network</p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Google Local Ads </h5>
                      <p>Drive customers to a physical location</p>
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
          Google Ads Features
        </h2>
        <div className="container">
          <div className="portfolio-wrapper">
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/increase-brand-awareness-google.jpg"
                      alt="portfolio"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Create Brand Awareness</h2>
                    <p>
                      Boost brand visibility and make your business stand out
                      with Google Ads. Reach more customers and make your
                      business ubiquitous in the digital world with effective,
                      targeted advertising. Google Ads can help you create brand
                      awareness and boost your reach, allowing you to get your
                      message out to a wider audience. Get your brand in front
                      of the people who matter most with Google Ads.
                    </p>
                    <p>
                      Create lasting impressions on potential customers with
                      Google Ads. Reach out to a wide audience and make your
                      brand stand out with dynamic and targeted ads. Boost your
                      visibility and increase your reach by leveraging the power
                      of Google Ads. Get discovered, be remembered and grow your
                      business today!
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
                      src="/assets/img/google-target-audience.jpg"
                      alt=""
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Target the right audience</h2>
                    <p>
                      Reach the most relevant customers for your business with
                      Google Ads and maximize your ROI. Connect with the people
                      who matter most to your business and grow your customer
                      base. Reach the right people and drive more relevant leads
                      to your business with Google Ads. Leverage the power of
                      targeting to make sure your ads are seen by the people
                      that matter most to your business.
                    </p>
                    <p>
                      With Google Ads, your ads will appear to only those you
                      want it to appear to. Connect with the right customers for
                      your business with Google Ads and find more of the right
                      people to engage with your services. Engage with your
                      target audience and take your business to the next level.
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
                      src="/assets/img/google-roi.jpg"
                      alt="Google return on investment"
                      width={525}
                      height={496}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Better Return On Investment (ROI)</h2>
                    <p>
                      Get the most out of your budget with Google Ads - maximize
                      your ROI with features that let you bid competitively,
                      create ads that convert, and track your results in real
                      time. Maximize your ROI with Google Ads and get more out
                      of your advertising budget! Get more leads, more sales,
                      and better brand visibility with smarter advertising
                      decisions from Google Ads.
                    </p>
                    <p>
                      Maximize Your ROI with Google Ads – Get more out of your
                      advertising budget and drive more conversions with Google
                      Ads. With Google Ads powerful targeting capabilities, you
                      can reach the right audience and get more clicks for your
                      money. With Google Ads, you can get a higher ROI and make
                      the most of your budget. Reach new customers and take your
                      business to the next level today!
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
                      src="/assets/img/google-remarketing1.jpg"
                      alt="Google Retargeting"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Retargeting Audience</h2>
                    <p>
                      Reach people who have already shown an interest in your
                      business by retargeting them with Google Ads! Create
                      tailored campaigns that effectively re-engage your
                      audience and convert them into loyal customers. Reach
                      potential customers who are already interested in your
                      business! With Google Ads retargeting, you can use
                      powerful customer insights to reach audiences that are
                      most likely to convert and drive more sales for your
                      business.
                    </p>
                    <p>
                      Increase sales and ROI by staying top of mind to the right
                      people with Google Ads Retargeting Audience. Target
                      previously engaged website visitors, find new customers
                      and show them the right message at the right time. Put
                      your ads in front of people who already know you and have
                      an interest in what you have to offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="google"
        className="contact-area pt-110 pb-120 bg_cover"
        style={{ backgroundImage: "url(assets/img/contact-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title section-title-white mb-75 text-center wow fadeInUp">
                <span className="span">Get in touch</span>
                <h2>Write Us a Message</h2>
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
                          <option value="Google Ads">Google Ads</option>
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
