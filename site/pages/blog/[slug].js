import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { fetchAPI } from "../../lib/api";

const Article = ({ article, categories }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    article: true,
  };

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"></link>
      <div className="mdbody">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={article.attributes.content} />
        <hr className="uk-divider-small" />
        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            <p>
              {article.attributes.author.data.attributes.name}
            </p>
            <p className="uk-text-meta uk-margin-remove-top">
              <Moment format="MMM Do YYYY">
                {article.attributes.published_at}
              </Moment>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .mdbody {
          line-height: 1.5;
          font-family: Inter;

          padding: 0 10vw 0 10vw;
          color: #4C4E67;
        }
      `}</style>
    </div>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["category", "author.picture"],
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Article;