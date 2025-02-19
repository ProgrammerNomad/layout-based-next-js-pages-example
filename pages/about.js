import BlogLayout from '../layouts/BlogLayout';

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This page uses the Blog Layout</p>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default AboutPage;