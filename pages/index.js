import MainLayout from '../layouts/MainLayout';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is using the Main Layout</p>
    </div>
  );
}

// Define the layout for this page
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;