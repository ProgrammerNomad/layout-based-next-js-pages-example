import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  
  const isActive = (path) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <nav className="nav flex-column">
      <Link href="/dashboard" legacyBehavior>
        <a className={`nav-link ${isActive('/dashboard')}`}>Dashboard</a>
      </Link>
      <Link href="/dashboard/analytics" legacyBehavior>
        <a className={`nav-link ${isActive('/dashboard/analytics')}`}>Analytics</a>
      </Link>
      <Link href="/dashboard/settings" legacyBehavior>
        <a className={`nav-link ${isActive('/dashboard/settings')}`}>Settings</a>
      </Link>
    </nav>
  );
};

export default Sidebar;