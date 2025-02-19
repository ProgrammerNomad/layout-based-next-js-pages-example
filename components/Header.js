import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand d-flex align-items-center">
            <svg className="me-2" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            My Website
          </a>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className={`nav-link ${isActive('/')}`}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" legacyBehavior>
                <a className={`nav-link ${isActive('/about')}`}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" legacyBehavior>
                <a className={`nav-link ${isActive('/contact')}`}>Contact</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link href="/services/web" legacyBehavior>
                    <a className="dropdown-item">Web Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile" legacyBehavior>
                    <a className="dropdown-item">Mobile Development</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link href="/services/consulting" legacyBehavior>
                    <a className="dropdown-item">Consulting</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-outline-light ms-lg-3" type="button">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;