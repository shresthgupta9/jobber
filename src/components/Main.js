import Banner from "./banner-bg.png";

export default function Main() {
  return (
    <div
      className="container-fluid my-0 py-0"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 className="py-5 text-center text-light fnt">
            GET PLACED IN TOP COMPANIES OF INDIA!
          </h1>
        </div>
        <div className="container">
          <p className="text-center fs-3 my-0 py-0 text-light fnt">
            Welcome to Jobber, the leading online hiring platform that connects
            candidates and companies
          </p>
          <p className="text-center fs-3 my-0 py-0 text-light fnt">
            Our mission is to help people find their dream jobs and companies
            find the best talent
          </p>
          <div className="my-4 d-grid justify-content-center">
            <div class="form-floating my-4" style={{ width: "50vw" }}>
              <input
                type="email"
                class="form-control"
                id="floatingInput inputGroup-sizing-default"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3" style={{ width: "50vw" }}>
              <input
                type="password"
                class="form-control py-0"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-dark mx-4"
                style={{ width: "100px" }}
              >
                Login
              </button>
              <button
                type="button"
                class="btn btn-dark"
                style={{ width: "100px" }}
              >
                Signup
              </button>
            </div>
          </div>
          <p className="text-center fs-3 mt-5 py-0 text-light fnt">
            Are you a highly skilled professional looking to take the next big
            step in your career? Or perhaps you're a company seeking the best
            talent to drive your business forward? Look no further Jobber is
            here to bridge the gap and make the perfect match.
          </p>
        </div>
      </div>
    </div>
  );
}
