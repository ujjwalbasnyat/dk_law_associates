// app/contact-us/page.jsx
export default function ContactUs() {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-text-color max-w-2xl mx-auto">
              We would love to hear from you! Whether you have a question, need assistance, or want to collaborate, feel free to reach out.
            </p>
          </div>
        </section>
  
        {/* Contact Form Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Form */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-color">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full border border-border-color rounded-lg p-3 text-text-color focus:outline-none focus:ring-2 focus:ring-accent-color"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-color">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full border border-border-color rounded-lg p-3 text-text-color focus:outline-none focus:ring-2 focus:ring-accent-color"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-color">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      // rows="4"
                      className="mt-1 block w-full border border-border-color rounded-lg p-3 text-text-color focus:outline-none focus:ring-2 focus:ring-accent-color"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-color text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
  
              {/* Right: Contact Information */}
              <div className="bg-secondary-background border border-border-color rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Email</h3>
                    <p className="text-text-color">info@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Phone</h3>
                    <p className="text-text-color">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Address</h3>
                    <p className="text-text-color">1234 Business Ave, Suite 567, City, Country</p>
                  </div>
                  {/* Map Placeholder */}
                  <div className="mt-6">
                    <div className="bg-background border border-border-color rounded-lg h-48 flex items-center justify-center">
                      <p className="text-text-color">Map Placeholder (e.g., Google Maps Embed)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <section className="bg-white py-8 border-t border-border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-text-color">
              We typically respond within 24 hours. Thank you for reaching out!
            </p>
          </div>
        </section>
      </div>
    );
  }