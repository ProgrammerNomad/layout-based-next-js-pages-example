import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />
      <main className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1>About Us</h1>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our Story</h5>
                <p className="card-text">
                  This is an example about page using Bootstrap with Next.js.
                  You can add more content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}