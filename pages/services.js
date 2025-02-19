import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Next.js Demo</title>
      </Head>
      <Navbar />
      <main className="container py-5">
        <h1 className="display-4 mb-4">Our Services</h1>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Web Development</h3>
                <p className="card-text">Custom web applications built with modern technologies.</p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Mobile Apps</h3>
                <p className="card-text">Native and cross-platform mobile applications.</p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Cloud Solutions</h3>
                <p className="card-text">Scalable cloud infrastructure and consulting.</p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}