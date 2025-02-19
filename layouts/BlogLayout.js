const BlogLayout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Blog Header</h1>
            </header>
            <div className="content">
                <aside>
                    <h2>Sidebar</h2>
                    {/* Sidebar content goes here */}
                </aside>
                <main>{children}</main>
            </div>
            <footer>
                <p>Blog Footer</p>
            </footer>
        </div>
    );
};

export default BlogLayout;