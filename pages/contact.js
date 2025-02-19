import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Next.js Demo</title>
      </Head>
      <Navbar />
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}