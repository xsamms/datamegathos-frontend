import Layout from "../components/Layout";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function contact() {
  const [allValues, setAllValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const form = useRef();

  const router = useRouter();

  const { name, phone, email, service, message } = allValues;

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(service);
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

    // try {
    //   await fetch("http://localhost:3000/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(allValues),
    //   });

    //   if (response.status === 200) {
    //     toast.success("Email sent successfully");
    //     router.push({
    //       pathname: "/",
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Layout title="Contact Us - Data megathos">
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
                    <a>
                      <span>creative@datamegathos.com</span>
                    </a>
                  </p>
                  <p>
                    <a>
                      <span>datamegathos@gmail.com</span>
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
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          onChange={changeHandler}
                          value={name}
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
                          onChange={changeHandler}
                          value={email}
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
                          onChange={changeHandler}
                          value={phone}
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
                        <select
                          className="form_control"
                          name="service"
                          onChange={changeHandler}
                        >
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
                          onChange={changeHandler}
                          value={message}
                          name="message"
                          placeholder="Message ..."
                          className="form_control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <button type="submit" className="main-btn">
                          SEND MESSAGE
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
      <section className="contact-map-section">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5753057921806!2d3.541117714266399!3d6.448532925820565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda844d2464e1f526!2zNsKwMjYnNTQuNyJOIDPCsDMyJzM1LjkiRQ!5e0!3m2!1sen!2sng!4v1672690819109!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
