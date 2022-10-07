import Head from 'next/head';
import Articles from "../components/articles";
import { fetchAPI } from "../lib/api";

function Home({ articles }) {
  return (
    <div className="page-container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Square+Peg:400"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Patrick+Hand:400"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:400"></link>
      <Head>
          <title>David Ebreo</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bodega">
          <div className="profile">
              <div className='label'>
                redeemed son. serial startup grunt. frustrated pilot. infrastructure dabbler.
                slow thinker. anti-social extrovert. database enthusiast. software plumber
              </div>
              <div className="bubble">Hello...<br/>I guess...</div>
              <div className="title-banner">
                  <div className="adiv">
                      <a href="https://arhyth.de/">
                          <img className="avatar" src="https://arhyth.de/img/profile.jpg" srcSet="https://arhyth.de/img/profile.jpg 1x"></img>
                      </a>
                  </div>
                  <div className="self-intro"><div>scattered thoughts</div><div>by David Ebreo</div></div>
              </div>
              <div className="icons">
                <a href="//github.com/arhyth" target="_blank" rel="noopener"><img className="logo" src="https://arhyth.de/img/github.svg" alt="github"></img></a>
                <a href="//twitter.com/arhyth" target="_blank" rel="noopener"><img className="logo" src="https://arhyth.de/img/twitter.svg" alt="twitter"></img></a>
                <a href="//linkedin.com/in/davidebreo" target="_blank" rel="noopener"><img className="logo" src="https://arhyth.de/img/linkedin.svg" alt="linkedin"></img></a>
                <a href="//instagram.com/arhyth" target="_blank" rel="noopener"><img className="logo" src="https://arhyth.de/img/instagram.svg" alt="instagram"></img></a>        
                <a href="mailto:arhyth@gmail.com"><img className="logo" src="https://arhyth.de/img/email.svg" alt="email"></img></a>
              </div>
          </div>

          <div className="main">
              <Articles articles={articles} />
          </div>
      </div>
      <style jsx>{`
        .page-container {
            padding: 0;
            margin: 0;
            min-height: 100vh;
        }

        .bodega {
            position: absolute;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 97%;
            width: 100%;
        }

        .main {
            margin-top: 30px;
            margin-left: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
          display: block;
          text-align: center;
          margin-right: 10px;
        }

        .adiv {
            margin: 10px 0px 5px 10px;
        }

        .description {
            line-height: 1.5;
            font-size: 1.5rem;
        }

        .logo {
            width: 16px;
            height: 16px;
            opacity: 0.3;
            background-color: #f7f7f7;
            display: inline;
        }

        .avatar {
            border-radius: 50%;
            box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
            max-width: 50px;
        }

        .profile {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .profile .label {
          margin: 0px 0px 0px 10px;
          font-family: Patrick Hand;
          font-size: 1.2em;
          overflow-wrap: break-word;
          width: 100%;
          color: #555;
          font-weight: 300;
          letter-spacing: -0.005rem;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        @media (min-aspect-ratio: 5/4) {
          .profile .label {
            width: 22vw;
          }
        }

        .profile .self-intro {
          font-family: Inter;
          font-size: 1em;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          color: #333;
          font-weight: 700;
          justify-content: center;
          width: 100%;
          margin-left: 15px;
        }

        .icons {
          margin-top: 0.5em;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          margin-left: 10px;
        }

        ul {
          padding-left: 0;
          padding-top: 0;
          padding-bottom: 0;
          margin: 0;
        }

        .title-banner {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
    const articlesRes = await Promise.race([
      fetchAPI("/articles", { populate: ["image", "category"] }),
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
      },
      revalidate: 1,
    };
}

export default Home;
