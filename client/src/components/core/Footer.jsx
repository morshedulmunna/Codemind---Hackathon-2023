import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Learn Programming</span>
          <a
            href="https://www.geeksforgeeks.org/c-programming-language/?ref=shm"
            className="link link-hover"
          >
            C Programming
          </a>
          <a
            href="https://www.geeksforgeeks.org/c-plus-plus/?ref=shm"
            target="_blank"
            className="link link-hover"
          >
            C++ Programming
          </a>
          <a
            href="https://www.geeksforgeeks.org/python-programming-language/?ref=shm"
            target="_blank"
            className="link link-hover"
          >
            Python
          </a>
          <a
            href="https://www.geeksforgeeks.org/javascript/?ref=shm"
            target="_blank"
            className="link link-hover"
          >
            JavaScript
          </a>
        </div>
        <div>
          <span className="footer-title">Learn DSA</span>
          <a
            href="https://github.com/me-shaon/bangla-programming-resources"
            target="_blank"
            className="link link-hover"
          >
            Github Bangla
          </a>
          <a
            target="_blank"
            href="https://codeforces.com/blog/entry/57282"
            className="link link-hover"
          >
            Competitive Programming
          </a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Interview Preparation</span>
          <a
            href="https://github.com/jwasham/coding-interview-university"
            target="_blank"
            className="link link-hover"
          >
            Coding Interview University
          </a>
          <a
            href="https://github.com/sudheerj/javascript-interview-questions"
            target="_blank"
            className="link link-hover"
          >
            JavaScript Interview
          </a>
          <a
            href="https://www.interviewbit.com/system-design-interview-questions/"
            target="_blank"
            className="link link-hover"
          >
            System Design
          </a>
        </div>

        {/* Roadmap */}
        <div>
          <span className="footer-title">Learning Roadmap</span>
          <a
            href="https://roadmap.sh/cyber-security"
            target="_blank"
            className="link link-hover"
          >
            Cyber Security
          </a>
          <a
            href="https://roadmap.sh/devops"
            target="_blank"
            className="link link-hover"
          >
            Devops
          </a>
          <a
            href="https://roadmap.sh/blockchain"
            target="_blank"
            className="link link-hover"
          >
            Blockchain Developer
          </a>
          <a
            href="https://roadmap.sh/"
            target="_blank"
            className="link link-hover"
          >
            more...
          </a>
        </div>

        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="youremail@mail.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
