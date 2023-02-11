import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Seo() {
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
    <Layout
      title="Search Engine Optimization (SEO) - Data Megathos"
      description="With search engine optimization (SEO), your website can be found and ranked in Search Engine Result Pages (SERPs)"
      keyword="seo company nigeria, best seo company in nigeria, seo agency in nigeria, seo agency in lagos, seo company in lagos, seo expert in lagos, best seo company in lagos, seo services in nigeria, best seo agency in nigeria, seo services in lagos, seo expert nigeria"
    >
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Search Engine Optimization (SEO)</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Search Engine Optimization</li>
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
                  <h3>SEO made easy</h3>
                </div>
                <div className="button">
                  <Link href="#seo" className="main-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 item-bg-two">
              <div className="cta-item item-two d-flex align-items-center">
                <div className="info">
                  <span>Stop wasting time</span>
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
      <section className="about-area-v1 pt-120 pb-40">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="about-img mb-80 wow fadeInLeft">
                <Image
                  src="/assets/img/seo-banner.jpg"
                  alt="Search Engine Optimization"
                  width={550}
                  height={600}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-80">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="span">Search Engine Optimization</span>
                  <h2>
                    SEO is an important part of running a successful online
                    business
                  </h2>
                </div>
                <p>
                  Are you ready to take your business to the next level? In
                  today's online world, search engines like Google, Bing, are
                  kings. They are the first place people go to answer their
                  questions and find information. With this in mind, it's
                  important to make sure that your website is ranking well in
                  these search engines so that your customers can find you
                  easily.
                </p>
                <p>
                  Search engine optimization is the process of making sure that
                  your site is found in the top results when people search for
                  certain keywords. SEO can help you bring in more customers by
                  improving the number of visitors who come to your site through
                  organic search. It also allows you to be ranked higher in
                  Google's rankings, which means more potential customers will
                  see your website. Furthermore, it gives you a competitive
                  advantage over other websites as well as maximizing PPC
                  campaigns.
                </p>
                <p>
                  SEO is an important part of running a successful business and
                  maintaining an online presence. It can help you build brand
                  recognition, generate leads, and increase sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-area-v3 pt-120 pb-60">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          SEO Types and Benefits
        </h2>
        <div className="container">
          <div className="portfolio-wrapper">
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/on-page-seo.jpg"
                      alt="On-Page SEO"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>On-Page SEO</h2>
                    <p>
                      What is on-page SEO? On-page SEO is a fundamental part of
                      everyday SEO. They are the on-page factors that can make
                      or break your SEO success. On-page SEO is the practice of
                      optimizing elements on web pages for SEO. It’s the name
                      for the combination of technical and content SEO that
                      revolves around optimizing individual pages. This practice
                      includes content, but also meta-tags, titles, links and
                      anchor text, and more.
                    </p>
                    <p>
                      On-page SEO is an essential tool for any website looking
                      to get noticed and rank higher in search engine results.
                      With on-page SEO, you can ensure that your website is
                      optimized for the search engine algorithms, helping your
                      website appear in more searches and reach more potential
                      customers.
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
                      src="/assets/img/technical-seo.jpg"
                      alt="Technical SEO"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Technical SEO</h2>
                    <p>
                      Technical SEO refers to website and server optimizations
                      that help search engine spiders crawl and index your site
                      more effectively (to help improve organic rankings).
                      Search engines give preferential treatment in search
                      results to websites that display certain technical
                      characteristics — for example a secure connection, a
                      responsive design or a fast loading time — and technical
                      SEO is the work you need to do to ensure your website does
                      so.
                    </p>
                    <p>
                      Technical SEO can help your website get noticed and reach
                      the top of search engine rankings, giving you more
                      visibility, leads, and customers. With technical SEO, you
                      can ensure that your website is optimized and built to
                      provide an optimal user experience, helping you stand out
                      from the competition. With Technical SEO, you can ensure
                      your website is easily found and indexed on search engine
                      results pages, making it easy for customers to find you!
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
                      src="/assets/img/backlinks.jpg"
                      alt="Backlinks"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>BackLinks</h2>
                    <p>
                      Backlinks (also known as “inbound links”) are simply links
                      from one website to another website. Search engines like
                      Google or Bing use backlink as a ranking signal (votes).
                      Websites with a high number of backlinks tend to have high
                      organic search engine rankings. High-quality backlinks can
                      help to increase a site’s ranking position and visibility
                      in search engine results (SEO).
                    </p>
                    <p>
                      Backlinks provide your website with the power of link
                      juice, helping to boost your search engine rankings and
                      increase your visibility online. Achieve higher rankings
                      on search engines and gain the visibility you need to grow
                      your business with backlink in your SEO strategy. With
                      more visibility, you can increase your website traffic and
                      enjoy higher profits. With backlinks, you can drive more
                      qualified leads to your website and increase your web
                      traffic. Invest in backlinks today and start enjoying the
                      benefits of SEO success!
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
                      src="/assets/img/seo-benefits.jpg"
                      alt="SEO Benefits"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Benefits</h2>
                    <p>
                      Search Engine Optimization (SEO) is essential part of any
                      successful marketing strategy. You may be thinking -
                      "should I invest in SEO?", "does SEO offer real values?",
                      "is SEO really an important factor in business growth?".
                      If you're looking to create long-term brand awareness,
                      expand your target audiences and earn more revenue, then
                      SEO is crucial. Here are some benefits of SEO:
                    </p>
                    <ul>
                      <li>
                        1. SEO Increases Organic & High-Quality Website Traffic
                      </li>
                      <li>2. SEO Improves Credibility & Trust</li>
                      <li>3. SEO Helps You Rank Better In Local Searches</li>
                      <li>4. SEO is a Long-Term Marketing Strategy</li>
                      <li>5. SEO Enhances Pay Per Click (PPC) Ad Success</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="seo"
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
                          <option value="Search Engine Optimization">
                            Search Engine Optimization
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
