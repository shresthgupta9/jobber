import logo from "./letter-j.svg";
import insta from "./insta.png";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <img src={logo} class="bi" width="30" height="30" alt="Logo" className="ms-3"/>
        </a>
        <span className="mb-3 fs-5 mb-md-0 text-body-secondary">
          © 2023 Jobber, Inc
        </span>
      </div>

      <ul className="nav me-4 col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="https:\\www.facebook.com">
            <img src={facebook} class="bi" width="30" height="30" alt="Logo" />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https:\\www.instagram.com">
            <img src={insta} class="bi" width="30" height="30" alt="Logo" />
          </a>
        </li>
        <li className="ms-3 p">
          <a className="text-body-secondary" href="https:\\www.twitter.com">
            <img src={twitter} class="bi" width="30" height="30" alt="Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
