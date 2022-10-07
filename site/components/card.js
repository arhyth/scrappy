import Moment from "react-moment";
import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  return (
    <div className="post-item">
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"></link>
        <div className="meta">
            <Moment format="DD MMM YYYY">{article.attributes.published_at}</Moment>
        </div>
        <Link href={`/blog/${article.attributes.slug}`}>
            <a><p className="title">
                {article.attributes.title}
            </p></a>
        </Link>
        <style jsx>{`
        a {
            text-decoration: none;
            margin: 0;
        }

        .title {
            padding: 0;
            margin-left: 5px;
            margin-top: 0.2em;
            margin-bottom: 0.2em;
            font-family: Inter;
            font-size: 1.5em;
            color: #a251e0;
        }

        .post-item {
            align-items: baseline;
            display: flex;
            margin: 0px 0px 0px 10px;
        }
    
        .post-item .meta {
            color: #666;
            font-size: 0.7em;
            font-family: Patrick Hand;
        }
    
        .no-bullet {
            color: transparent;
            font-style: oblique;
        }

        @media (max-width: 600px) {
            .grid {
                width: 100%;
                flex-direction: column;
            }
        }
        `}</style>
    </div>
  );
};

export default Card;