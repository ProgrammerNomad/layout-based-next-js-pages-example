const LandingLayout = ({ children }) => {
  return (
    <div className="position-relative min-vh-100 d-flex align-items-center" 
         style={{ 
           backgroundImage: "url('/hero-bg.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div className="container position-relative z-1 text-white text-center">
        {children}
      </div>
    </div>
  );
};

export default LandingLayout;