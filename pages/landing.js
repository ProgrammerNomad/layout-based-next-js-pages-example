import LandingLayout from '../components/layouts/LandingLayout';

function LandingPage() {
  return (
    <div className="py-5">
      <h1 className="display-3 mb-4">Welcome to Our Platform</h1>
      <p className="lead mb-4">Discover amazing things with our service</p>
      <button className="btn btn-primary btn-lg px-5">Get Started</button>
    </div>
  );
}

LandingPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default LandingPage;