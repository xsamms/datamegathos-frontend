import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { API_URI } from "../../config";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import DisqusThread from "../../components/DisqusThread";

export default function BlogDetail({ blog, category, featured, tags }) {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm("");
  };

  const showDisqusComment = () => {
    return (
      <>
        <DisqusThread
          id={blog.data[0].id}
          path={blog.data[0].attributes.slug}
          title={blog.data[0].attributes.title}
        />
      </>
    );
  };
  return (
    <Layout>
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: "url(/assets/img/breadcrumbs-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-title text-center">
                <h1>Blog Details</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-details-page pt-110 pb-80">
        <div className="container">
          <div className="row">
            <div class="col-lg-8">
              <div className="blog-details-wrapper mb-40 wow fadeInUp">
                <div className="entry-content">
                  <h3 className="title">{blog.data[0].attributes.title}</h3>
                  <div className="user-info-tag">
                    <div className="tags">
                      <a href="#" className="main-btn">
                        {blog.data[0].attributes.category.data.attributes.name}
                      </a>
                    </div>

                    <h5>
                      {moment(blog.data[0].attributes.date).format(
                        "MMM DD YYYY"
                      )}
                    </h5>
                  </div>

                  <div className="content-img mb-4">
                    <Image
                      src={
                        blog.data[0].attributes.featured_image.data.attributes
                          .url
                      }
                      alt={
                        blog.data[0].attributes.featured_image.data.attributes
                          .name
                      }
                      width={770}
                      height={430}
                    />
                  </div>
                  <ReactMarkdown>
                    {blog.data[0].attributes.content}
                  </ReactMarkdown>
                </div>
                <div className="post-share-tag pb-55">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="tags-box">
                        <span className="tag-title">Tags:</span>
                        {blog.data[0].attributes.tags.data.map((tag) => {
                          return (
                            <Link
                              key={tag.id}
                              href={`/tags?tag=${tag.attributes.slug}`}
                            >
                              {tag.attributes.Name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="social-box">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {showDisqusComment()}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area mb-40">
                <div className="widget search-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Search keywords"
                      />
                      <button className="search-btn">
                        <i className="fal fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="widget categories-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="widget-link">
                    {category.data.map((cat) => {
                      return (
                        <li key={cat.id}>
                          <Link
                            href={`/category?category=${cat.attributes.slug}`}
                          >
                            {cat.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="widget recent-post-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent Post</h4>
                  <ul className="recent-post-item">
                    {featured.data.map((feat) => {
                      return (
                        <li key={feat.id} className="post-thumbnail-content">
                          <Image
                            src={
                              feat.attributes.featured_image.data.attributes
                                .formats.thumbnail.url
                            }
                            alt={
                              feat.attributes.featured_image.data.attributes
                                .name
                            }
                            width={80}
                            height={75}
                          />
                          <div className="post-title-date">
                            <h6>
                              <Link href={`/blog/${feat.attributes.slug}`}>
                                {feat.attributes.title}
                              </Link>
                            </h6>
                            <span className="posted-on">
                              <a href="#">
                                {moment(feat.attributes.date).format(
                                  "MMM DD YYYY"
                                )}
                              </a>
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="widget instagram-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Instagram Post</h4>
                  <ul className="instagram-list">
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-1.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-2.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-3.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-4.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-5.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-6.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-7.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-8.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src="/assets/img/insta-post/insta-post-9.jpg"
                          alt=""
                          width={95}
                          height={85}
                        />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget tags_cloud_widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Populer Tags</h4>
                  {tags.data.map((tag) => {
                    return (
                      <Link
                        key={tag.id}
                        href={`/tags?tag=${tag.attributes.slug}`}
                      >
                        {tag.attributes.Name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URI}/api/posts?populate=*`);
  const posts = await res.json();

  const paths = posts.data.map((blgs) => ({
    params: {
      slug: blgs.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${API_URI}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  const blog = await res.json();

  const cat = await fetch(`${API_URI}/api/categories`);
  const category = await cat.json();

  const feat = await fetch(
    `${API_URI}/api/posts?filters[featured_post][$eq]=true&sort=date:DESC&pagination[limit]=10&populate=*`
  );
  const featured = await feat.json();

  const tag = await fetch(`${API_URI}/api/tags`);
  const tags = await tag.json();

  return {
    props: {
      blog,
      category,
      featured,
      tags,
    },
    revalidate: 1,
  };
}
