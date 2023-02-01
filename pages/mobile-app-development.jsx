import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function mobileAppDevelopment() {
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
    <Layout title="Mobile App Development - Data Megathos">
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Mobile App Development</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Mobile App Development</li>
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
                  <h3>Mobile App development?</h3>
                </div>
                <div className="button">
                  <Link href="#mobile-app" className="main-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 item-bg-two">
              <div className="cta-item item-two d-flex align-items-center">
                <div className="info">
                  <span>Mobile App</span>
                  <h3>Most powerful marketing tool</h3>
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
                  src="/assets/img/mobile-app-service.jpg"
                  alt=""
                  width={625}
                  height={700}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-80">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="span">Mobile App Development</span>
                  <h2>Mobile App is an excellent marketing tool</h2>
                </div>
                <p>
                  With the growing demand for mobile apps, it&apos;s essential
                  to create an app that will boost your business and improve
                  your reputation. If you want to make your brand stand out,
                  then you need a mobile app. It&apos;s the best way to reach
                  your customers and build strong relationships with them.
                </p>
                <p>
                  You may be thinking, &quot;I have a website, I have social
                  media accounts, and I have email lists. What else do I
                  need?&quot; Well, it might surprise you to know that your
                  mobile app is actually the most powerful marketing tool you
                  can use. And we&apos;re not just talking about its ability to
                  drive traffic and make your brand known—we&apos;re talking
                  about the fact that your customers are using these apps all
                  day long!
                </p>
                <ul className="about-list-item">
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Android or iOS Mobile App Development </h5>
                      <p>
                        You may choose to develop Android or iOS App. This is
                        the case where you want to focus on a particular
                        platform and most of your target audience is in that
                        platform.
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>
                        Cross-platform Mobile App development with React Native
                      </h5>
                      <p>
                        Cross-platform mobile app development is the process of
                        developing a mobile app for both Android and iOS
                        platforms at the same time. If you wish to reach a wider
                        audience, cross-platform mobile app development is the
                        way to go.
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
          Mobile App Development Features
        </h2>
        <div className="container">
          <div className="portfolio-wrapper">
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/app-speed.jpg"
                      alt="portfolio"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Fast Loading Speeds</h2>
                    <p>
                      A mobile app that is slow to load may put-off your
                      prospects. At Data Megathos, we develop mobile apps with
                      React Native. It&apos;s one of the fastest technology used
                      to develop mobile applications. Not only is React Native
                      fast, it&apos;s also used to develop cross-platform mobile
                      apps, thereby reducing development time.
                    </p>
                    <p>
                      A mobile app that loads quickly will keep them coming back
                      for more. A mobile app that makes them feel like they're
                      part of something bigger than themselves will keep them
                      coming back for more. A mobile app with great design will
                      help make sure they remember who you are when they leave.
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
                      src="/assets/img/outstanding-website.jpg"
                      alt="portfolio"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Eye-Catching Mobile App</h2>
                    <p>
                      An amazing looking mobile app can help your brand stand
                      out and also help you connect with your customers,
                      increase their engagement and loyalty, and boost sales.
                      You can make impact on your customers through an
                      eye-catching mobile app.
                    </p>
                    <p>
                      At Data Megathos, our team of developers can help you
                      create an app that is fast loading and eye-catching. A
                      mobile app with great design will help make sure your
                      customers remember who you are when they leave.
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
                      src="/assets/img/mobolie-app-sales.jpg"
                      alt="portfolio"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Excellent Marketing Tools</h2>
                    <p>
                      Mobile app development is an essential part of any
                      business’s growth strategy. With mobile app, it easy for
                      your users to get in and out of what they're looking at
                      with your business without losing their place. It's also
                      convenient for your customers to transact business with
                      you from your mobile app.
                    </p>
                    <p>
                      With cross-platform mobile app development, you can reach
                      a wider customer base with iOS and Android devices. Your
                      mobile app can help you connect with your customers,
                      increase their engagement and loyalty, and boost sales.
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
                      src="/assets/img/simple-mobile-app.jpg"
                      alt="portfolio"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Simplicity</h2>
                    <p>
                      A mobile app that is complicated may put off your
                      customers. That's why at Data Megathos, we develop simple
                      and classy mobile apps that stands out and functional. Our
                      UI/UX design team will create a simple UI mock-up with
                      eye-grabbing colour schemes that relates to your brand
                      color that will grab the attention of your customers.
                    </p>
                    <p>
                      A mobile app with simple interface enhance the user’s
                      experience. Your customers should find it easy to access
                      and collect the information they need and this will most
                      likely help them to make a purchase through your app. A
                      simple and classy mobile app that makes them feel like
                      they're part of something bigger than themselves will keep
                      them coming back for more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="mobile-app"
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
                          <option value="Mobile App">Mobile App</option>
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
