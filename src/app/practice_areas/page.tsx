// app/practice-areas/laws/page.jsx

export default function LawsPracticeArea() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-secondary-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Laws Practice Area</h1>
          <p className="text-lg text-text-color max-w-2xl mx-auto">
            Expert legal services to navigate complex regulations and protect your rights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Description */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Legal Expertise</h2>
              <p className="text-text-color mb-4">
                Our team specializes in a wide range of legal services, including corporate law, intellectual property, and compliance. We provide tailored solutions to meet your unique needs, ensuring you stay ahead in a complex legal landscape.
              </p>
              <ul className="list-disc list-inside text-text-color space-y-2">
                <li>Corporate Law and Governance</li>
                <li>Intellectual Property Protection</li>
                <li>Regulatory Compliance</li>
                <li>Contract Drafting and Negotiation</li>
              </ul>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="bg-secondary-background border border-border-color rounded-lg flex items-center justify-center h-64">
              <p className="text-text-color">Image Placeholder (e.g., Legal Documents or Team)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-12 border-t border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Need Legal Assistance?</h2>
          <p className="text-text-color mb-6">
            Contact our team today to discuss your legal needs and how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-color text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}