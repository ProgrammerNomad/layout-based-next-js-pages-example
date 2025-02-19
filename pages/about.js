import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Next.js Demo</title>
      </Head>
      <Navbar />
      <main className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-4 mb-4">About Us</h1>
            <p className="lead">We are a passionate team dedicated to creating amazing web experiences.</p>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quick Facts</h5>
                <ul className="list-unstyled">
                  <li>✨ Founded in 2024</li>
                  <li>👥 50+ Team Members</li>
                  <li>🌍 Global Presence</li>
                  <li>🏆 Award Winning Company</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}