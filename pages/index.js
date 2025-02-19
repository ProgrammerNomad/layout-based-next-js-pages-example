import Head from 'next/head'
import Navbar from '../components/Navbar'
import BaseLayout from '../components/layouts/BaseLayout';
import MarketingLayout from '../components/layouts/MarketingLayout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h1 className="display-4">Welcome to Our Platform</h1>
                <p className="lead">This is a simple example using Bootstrap with Next.js</p>
                <button className="btn btn-primary btn-lg">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Feature One</h5>
                <p className="card-text">Some quick example text for feature one.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Feature Two</h5>
                <p className="card-text">Some quick example text for feature two.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Feature Three</h5>
                <p className="card-text">Some quick example text for feature three.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <MarketingLayout>{page}</MarketingLayout>;
};