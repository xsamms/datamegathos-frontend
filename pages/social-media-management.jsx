import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function socialMediaManagement() {
  return (
    <Layout title="Social Media Management - Data Megathos">
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h2 style={{ color: "#fff" }}>Social Media Management</h2>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Social Media Management</li>
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
                  <h3>Social Media Management made easy</h3>
                </div>
                <div className="button">
                  <Link href="#smm" className="main-btn">
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
                  src="/assets/img/social-media.jpg"
                  alt=""
                  width={600}
                  height={466}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-80">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="span">Social Media Management</span>
                  <h2>
                    Social Media is a great tool to grow your business online
                  </h2>
                </div>
                <p>
                  Do you have a business that wants to grow? Social media
                  marketing is a great way to get people talking about your
                  brand, and we can help. We offer a wide range of social media
                  management services, including Instagram marketing, Facebook
                  marketing, Twitter marketing, and LinkedIn marketing. Our team
                  of experts will take care of all of your social media needs so
                  you can focus on what you do best—your business! We&apos;ll
                  save you time by handling everything from posting to tracking
                  results. The result? You&apos;ll have more time for the things
                  that matter most: your business and managing it.
                </p>
                <p>Social media platform we manage for our clients:</p>
                <ul className="about-list-item">
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Instagram Marketing</h5>
                      <p>
                        We'll use our experience and expertise to create
                        eye-catching posts that drive engagement and increase
                        conversion rates.
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Facebook Marketing</h5>
                      <p>
                        We'll help you optimize your Facebook page for maximum
                        engagement and conversion rates. We will aslo link your
                        Facebook page to your Instagram for post and story
                        sharing.
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>Twitter Marketing</h5>
                      <p>
                        We'll provide creative content that inspires engagement
                        and increases conversions through Twitter's platform.
                      </p>
                    </div>
                  </li>
                  <li className="list-item d-flex wow fadeInUp">
                    <div className="check-box">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-content">
                      <h5>LinkedIn Marketing</h5>
                      <p>
                        We'll provide creative content that inspires engagement
                        and conversion.
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
          Social Media Benefits
        </h2>
        <div className="container">
          <div className="portfolio-wrapper">
            <div className="portfolio-item mb-30 wow fadeInLeft">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-img mb-30">
                    <Image
                      src="/assets/img/visibility.jpg"
                      alt="social media"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Increase visibility</h2>
                    <p>
                      Unlock the power of social media marketing to reach a
                      massive global audience and give your business the
                      visibility it needs to succeed. With social media, you can
                      tap into a large and ever-growing pool of potential
                      customers, boosting your reach and giving you the
                      opportunity to gain valuable insights into your target
                      audience. Take your marketing to the next level with the
                      help of social media!
                    </p>
                    <p>
                      Go beyond your local boundaries and reach a global
                      audience. Social media marketing can help you massively
                      expand your reach and increase your visibility, allowing
                      you to connect with potential customers around the world.
                      With social media marketing, you can drastically increase
                      your visibility and reach large audiences with just a few
                      clicks. Leverage your brand’s potential to expand and grow
                      your customer base and expand your outreach. Promote your
                      products or services to a wider audience and stay ahead of
                      the competition.
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
                      src="/assets/img/brand.jpg"
                      alt="social media brand"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Build your brand</h2>
                    <p>
                      Take advantage of social media to grow your business and
                      boost your brand awareness! With strategic social media
                      marketing, you can reach a large, targeted audience and
                      elevate your brand to the next level. Leverage the power
                      of social media to increase visibility and generate more
                      leads for your business.
                    </p>
                    <p>
                      Stand out from the competition and make your brand more
                      visible to potential customers with social media
                      marketing. Use the power of social media to raise
                      awareness of your business and create a more recognizable
                      presence online. Reach new audiences, engage with your
                      customer base, and create meaningful relationships with
                      your target audience. Get creative and showcase your
                      unique brand to a massive network of potential customers
                      through social media marketing!
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
                      src="/assets/img/leads.jpg"
                      alt="social media leads"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Generate leads</h2>
                    <p>
                      Social media marketing can help you generate leads
                      directly and indirectly to help you reach your business
                      goals. By interacting with potential customers on social
                      media, you can create connections and generate leads in
                      real-time. You can also use the content you post to help
                      indirectly generate leads through organic search,
                      providing exposure to new and potential customers. With
                      social media marketing, you can take control of your lead
                      generation with an effective and engaging approach.
                    </p>
                    <p>
                      Grow your business with the power of social media
                      marketing! Generate leads directly and indirectly by
                      connecting with your target audience, creating brand
                      awareness, and driving engagement with your content. Reach
                      more potential customers and increase your sales by using
                      social media to build your presence, gain customer
                      insights, and reach new markets. Start leveraging the
                      power of social media marketing today to grow your
                      business!
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
                      src="/assets/img/connect.jpg"
                      alt="social media connections"
                      width={525}
                      height={406}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolio-content mb-30">
                    <h2>Connect with your audience</h2>
                    <p>
                      Connect with your target audience like never before thanks
                      to social media marketing! With the right strategy, you
                      can reach out and engage with potential customers, build
                      relationships with them, and ultimately drive more
                      conversions. Reach out and engage with your target
                      audience and build meaningful relationships that last!
                      Social media marketing helps you to build a strong
                      connection with your followers and develop a strong sense
                      of trust and loyalty.
                    </p>
                    <p>
                      Take your business to the next level with the ability to
                      connect with your audience on social media! Reach more
                      customers and expand your customer base with engaging
                      content, timely updates, and personalized interactions.
                      Get ahead of the competition by engaging with your
                      followers, building relationships, and gaining invaluable
                      insight into your target market. Social media marketing is
                      the perfect way to take your business to the next level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="smm"
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
                <form>
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
                        <select className="form_control">
                          <option value="Social Media Management">
                            Social Media Management
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
