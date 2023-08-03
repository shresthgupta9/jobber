import logo from "./letter-j.svg";

export default function Navbar() {
  return (
    <div className="container-fluid my-0 py-0">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none align-items-center"
          >
            <img src={logo} class="bi" width="50" height="40" alt="Logo" />
            <div className="fs-2" style={{fontFamily: 'Pacifico, cursive' , color: '#2cc8f1', alignItems: 'center'}}>Jobber</div>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 fs-5 clr">
            FOR JOB SEEKERS
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2 fs-5 clr">
              FOR COMPANIES
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2 fs-5 clr">
              PRICING
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2 fs-5 clr">
              FAQs
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2 fs-5 clr">
              ABOUT
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
