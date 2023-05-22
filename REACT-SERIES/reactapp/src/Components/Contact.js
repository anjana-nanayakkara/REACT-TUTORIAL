// import React from 'react'

// const Contact = () => {
//   return (
//     <>
//       <h1>i am contact page</h1>
//     </>
//   );
// }

// export default Contact

//--------------responsive website------------

import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-center text-dark">Contact us</h1>
      <div className="container my-5">
        <form>
          <div class="mb-3 ">
            <label class="form-label">First Name</label>
            <input
              type="email"
              class="form-control"
              placeholder="enter your first name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Last Name</label>
            <input
              type="password"
              class="form-control"
              placeholder="enter your last name"
            />
          </div>
          <div class="mb-3 ">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="enter your email"
            />
          </div>
          <div class="mb-5 ">
            <label class="form-label">Message</label>
            <input
              type="textarea"
              class="form-control"
              placeholder="enter your message"
            />
          </div>

          <button type="submit" class="btn btn-primary mb-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;