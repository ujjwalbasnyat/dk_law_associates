// app/about-us/page.jsx
export default function AboutUs() {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-lg text-text-color max-w-2xl mx-auto">
              We are a dedicated team committed to providing exceptional services and solutions to our clients. Learn more about our journey, values, and the people behind our success.
            </p>
          </div>
        </section>
  
        {/* Our Mission Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-text-color mb-4">
                  Our mission is to empower our clients by delivering innovative, reliable, and tailored solutions that drive success. We believe in integrity, collaboration, and excellence in everything we do.
                </p>
              </div>
              {/* Right: Placeholder Image */}
              <div className="bg-secondary-background border border-border-color rounded-lg flex items-center justify-center h-64">
                <p className="text-text-color">Image Placeholder (e.g., Team Working Together)</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Team Section */}
        <section className="py-12 bg-secondary-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white border border-border-color rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-secondary-background rounded-full mx-auto mb-4 flex items-center justify-center">
                  <p className="text-text-color text-sm">Photo Placeholder</p>
                </div>
                <h3 className="text-lg font-medium text-foreground">John Doe</h3>
                <p className="text-text-color">Founder & CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="bg-white border border-border-color rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-secondary-background rounded-full mx-auto mb-4 flex items-center justify-center">
                  <p className="text-text-color text-sm">Photo Placeholder</p>
                </div>
                <h3 className="text-lg font-medium text-foreground">Jane Smith</h3>
                <p className="text-text-color">Chief Operating Officer</p>
              </div>
              {/* Team Member 3 */}
              <div className="bg-white border border-border-color rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-secondary-background rounded-full mx-auto mb-4 flex items-center justify-center">
                  <p className="text-text-color text-sm">Photo Placeholder</p>
                </div>
                <h3 className="text-lg font-medium text-foreground">Emily Johnson</h3>
                <p className="text-text-color">Head of Innovation</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="bg-white py-12 border-t border-border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Get to Know Us Better</h2>
            <p className="text-text-color mb-6">
              We’d love to connect with you! Reach out to learn more about our services or to join our team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent-color text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    );
  }