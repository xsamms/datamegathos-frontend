import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { API_URI } from "../config";

export default function BlogCard({ item }) {
  return (
    <div className="blog-post-item mb-40 wow fadeInUp">
      <div className="post-thumbnail">
        <Image
          src={item.attributes.featured_image.data.attributes.formats.small.url}
          alt={item.attributes.featured_image.data.attributes.name}
          width={370}
          height={260}
        />
      </div>
      <div className="entry-content">
        <div className="post-meta">
          <ul>
            <li>
              <span>
                <i className="fal fa-calendar-alt"></i>
                <Link href="#">
                  {moment(item.attributes.date).format("MMM DD YYYY")}
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <h3 className="title">
          <Link href={"/blog/" + item.attributes.slug}>
            {item.attributes.title}
          </Link>
        </h3>
        <a href={"/blog/" + item.attributes.slug} className="btn-icon">
          <i className="far fa-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
