import logo from "./assets/logo.png";

export default function header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} className="mr-2" alt="" />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
