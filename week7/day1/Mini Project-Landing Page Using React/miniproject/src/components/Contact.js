import React from "react";

const Contact = () => {
  return (
    <section className="container my-5 p-4 bg-light rounded">
      <h2 className="text-center mb-4">Contact us</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <p>Contact us and we will get back to you within 24 hours.</p>
          <p>
            <i className="fa-solid fa-location-dot me-2"></i>Company Name
          </p>
          <p>
            <i className="fa-solid fa-phone me-2"></i>+256 778 800 900
          </p>
          <p>
            <i className="fa-solid fa-envelope me-2"></i>company@gmail.com
          </p>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
