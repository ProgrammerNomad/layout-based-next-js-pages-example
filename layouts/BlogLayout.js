import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BlogLayout = ({ children }) => {
  return (
    <div className="blog-layout">
      <Header />
      <div className="blog-container">
        <main className="blog-content">{children}</main>
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogLayout;