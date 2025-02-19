import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <main className="container py-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="mb-4">Contact Us</h1>
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}