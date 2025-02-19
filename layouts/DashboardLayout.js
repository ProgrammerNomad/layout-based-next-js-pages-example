const DashboardLayout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
                {/* Include any navigation or user info here */}
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2023 My Next.js App</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;