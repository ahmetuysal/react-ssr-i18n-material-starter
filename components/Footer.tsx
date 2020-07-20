import * as React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="mt-6 bg-gray">
    <div className="container-xl p-responsive">
      <div className="d-flex flex-wrap pt-5 clearfix">
        <div className="col-6 col-lg-3 mb-5 ">
          <Link href="/">
            <a href="/" aria-label="Go to Easy AI homepage">
              <img
                src="/assets/logo.png"
                className="width-fit"
                alt="EasyAI Logo"
                draggable={false}
              />
            </a>
          </Link>
        </div>
        <div className="col-6 col-lg-3 mb-3 mb-md-2">
          <div className="pr-3 pr-md-0 pl-md-4">
            <h2 className="h4 mb-3">Title</h2>
            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 1
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 2
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 3
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 4
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 5
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-lg-3 mb-3 mb-md-2">
          <div className="pr-3 pr-md-0 pl-md-4">
            <h2 className="h4 mb-3">Legal</h2>
            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 1
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 2
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 3
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 4
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 5
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-lg-3 mb-3 mb-md-2">
          <div className=" pr-3 pr-md-0 pl-md-4">
            <h2 className="h4 mb-3">Company</h2>
            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 1
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 2
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 3
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 4
                  </a>
                </Link>
              </li>
              <li className="lh-condensed mb-3">
                <Link href="/">
                  <a href="/">
                    Link 5
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="container-xl p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
        <ul className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
          <li className="mr-3">
            <a
              href="https://twitter.com/easyaiservices"
              title="EasyAI on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 273.5 222.3"
                className="d-block"
                height="20"
                role="img"
                aria-labelledby="twitterSvgTitle"
              >
                <title id="twitterSvgTitle">EasyAI on Twitter</title>
                <path
                  d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.facebook.com/easyaiservices"
              title="EasyAI on Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.3 15.4"
                className="d-block"
                height="20"
                role="img"
                aria-labelledby="facebookSvgTitle"
              >
                <title id="facebookSvgTitle">EasyAI on Facebook</title>
                <path
                  d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://instagram.com/easyaiservices"
              title="EasyAI on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
                aria-labelledby="instagramSvgTitle"
              >
                <title id="instagramSvgTitle">EasyAI on Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </li>
          <li className="mr-3 flex-self-start">
            <a
              href="https://www.linkedin.com/company/easyaiservices "
              title="EasyAI on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 18"
                className="d-block"
                height="20"
                role="img"
                aria-labelledby="linkedInSvgTitle"
              >
                <title id="linkedInSvgTitle">EasyAI on LinkedIn</title>
                <path
                  d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/easyaiservices"
              title="EasyAI on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gray"
            >
              <svg
                height="20"
                className="d-block"
                viewBox="0 0 16 16"
                fill="currentColor"
                version="1.1"
                width="20"
                aria-hidden="true"
                role="img"
                aria-labelledby="githubSvgTitle"
              >
                <title id="githubSvgTitle">EasyAI on GitHub</title>
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </li>
        </ul>
        <ul className="list-style-none d-flex text-gray">
          <li className="mr-3">© 2020 EasyAI · Made with ❤ in Istanbul</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
