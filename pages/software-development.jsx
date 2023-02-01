import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function SoftwareDevelopment() {
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
    <Layout title="Software Development - Data Megathos">
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Software Development</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Software Development</li>
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
                  <h3>Software Development made easy</h3>
                </div>
                <div className="button">
                  <Link href="#software" className="main-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 item-bg-two">
              <div className="cta-item item-two d-flex align-items-center">
                <div className="info">
                  <span>Software Development</span>
                  <h3>Need Quality Software?</h3>
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
                  src="/assets/img/software-development.jpg"
                  alt="Software Development"
                  width={570}
                  height={650}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-80">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="span">Software Development</span>
                  <h2>
                    Integrate unique software solution that is tailored to your
                    business
                  </h2>
                </div>
                <p>
                  You've heard the saying, "If you're not moving forward, you're
                  moving backward." We believe that's true. And when it comes to
                  your business, you need to be moving forward at all times. If
                  you're just managing your business with spreadsheets and
                  paper, you're missing out on a lot of opportunities that could
                  help make your business more efficient, effective, and
                  profitable.
                </p>
                <p>
                  Our inventory management software, accounting software, CRM
                  software, hotel management software, are all built to suit
                  your needs. We’ll take the time to understand what you want
                  out of each product and how they can be integrated into your
                  overall business strategy. We want to help you build a system
                  that works not just for now but for years to come!
                </p>
                <p>
                  Here are four software we can integrate into your business:
                </p>
                <ul className="about-list-item">
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Inventory Management Software</h5>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Accounting Software</h5>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Customer Relationship Management (CRM) Software</h5>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Hotel Management Software</h5>
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
          Software Integration Types
        </h2>
        <div className="container">
          <div className="portfolio-wrapper">
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/inventory-software.jpg"
                      alt="Inventory Management Software"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Inventory Management Software</h2>
                    <p>
                      Make inventory management simple and hassle-free with our
                      inventory management software. Quickly and accurately
                      track of your inventory, manage stock levels and
                      seamlessly connect with your other business systems.
                      Streamline logistics and save time with our user-friendly
                      inventory management tool.
                    </p>
                    <p>
                      Streamline your inventory management processes to save
                      time and effort, and keep track of your stock levels with
                      ease. Automate and streamline your inventory management
                      processes with inventory management software! Keep track
                      of inventory levels, costs, and more with ease, saving you
                      time and money.
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
                      src="/assets/img/accounting-software.jpg"
                      alt="Accounting Management Software"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Accounting Software</h2>
                    <p>
                      Make your accounting processes faster and easier with our
                      accounting software! Streamline your bookkeeping and
                      increase productivity with our comprehensive solution.
                      Streamline your accounting process and maximize efficiency
                      with the integrated Accounting Software! Automate much of
                      the tedious data entry and make it easier to accurately
                      manage your finances.
                    </p>
                    <p>
                      Take control of your business's finances with our
                      accounting software designed to simplify and streamline
                      your accounting processes. Let the software handle the
                      hard work while you focus on running your business. Easily
                      monitor cash flow, track expenses and manage invoices, all
                      in one central location. Get your business's finances
                      organized, quickly and accurately. Keep better track of
                      your finances, and make faster, more informed decisions to
                      help your business reach its full potential.
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
                      src="/assets/img/crm-software.jpg"
                      alt="CRM Software"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Customer Relationship Management (CRM) Software</h2>
                    <p>
                      Keep a better, more fruitful relationship with your
                      customers with our Customer Relationship Management
                      software, designed to help you better manage, track, and
                      analyze interactions with customers. Keep your customers
                      informed and up-to-date on their purchases, and make sure
                      they're happy and satisfied with their experience.
                    </p>
                    <p>
                      Manage relationships with your customers better and boost
                      your business performance with Customer Relationship
                      Management Software. With this software, you can get a
                      better understanding of customers, be more organized and
                      provide them with better customer service. Streamline
                      customer interaction and maximize your customer
                      relationships with our powerful CRM software. Gain the
                      insights you need to provide superior customer service and
                      drive more sales.
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
                      src="/assets/img/hotel-software.jpg"
                      alt="Hotel Management Software"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Hotel Management Software</h2>
                    <p>
                      Get the most out of your hotel business with our intuitive
                      hotel management software. With a comprehensive set of
                      features designed for the efficient management of hotels,
                      our software helps you save time and ensure seamless
                      operations. Our software makes it easy to manage your
                      reservations, customer details, financial records and
                      more, ensuring that your hotel business runs like a
                      well-oiled machine. Give your business the edge it needs
                      to stay ahead of the competition with our innovative hotel
                      management software.
                    </p>
                    <p>
                      Ensure the smooth and efficient running of your hotel
                      business with our hotel management software. Our software
                      provides you with features like automated check-in and
                      check-outs, real-time data analysis, and accounting tools
                      to help you stay on top of your operations. With our
                      software, you can have complete control of your business
                      and enjoy more time to focus on providing outstanding
                      guest experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="software"
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
                          <option value="Software Development">
                            Software Development
                          </option>
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
