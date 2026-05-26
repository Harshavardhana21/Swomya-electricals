export default function SowmyaElectricalsWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-black py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Sowmya Electricals
            </h1>
            <p className="text-xl mb-4 font-semibold">
              Licensed Electrical Contractor in Bangalore & Across Karnataka
            </p>
            <p className="text-lg mb-6">
              Providing complete electrical and plumbing solutions for homes,
              apartments, villas, schools, colleges, factories, layouts,
              commercial buildings, and industrial sheds.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:9341282721"
                className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919341282721"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                WhatsApp Quote
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22731d8c3c?q=80&w=1200&auto=format&fit=crop"
              alt="Electrical Contractor Bangalore"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About Sowmya Electricals
          </h2>

          <p className="text-lg leading-8 text-center max-w-4xl mx-auto">
            Sowmya Electricals is a trusted and experienced electrical contractor
            service provider based in Bangalore, Karnataka. We specialize in
            temporary electrical connections, permanent electrical connections,
            transformer work, building wiring, layout electrical services,
            apartment electrical work, factory shed wiring, and all types of
            residential and commercial electrical services.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Temporary Electrical Connections",
              "Permanent Electrical Connections",
              "Transformer Installation & Work",
              "Building Electrical Wiring",
              "Layout Electrical Services",
              "Factory Shed Electrical Work",
              "Apartment Electrical Services",
              "Villa Electrical Wiring",
              "Commercial Building Electrical Work",
              "School & College Electrical Work",
              "Electrical Repair Services",
              "Fan, Light & Equipment Fitting",
              "Industrial Electrical Services",
              "Home Electrical Maintenance",
              "Plumbing Work & Maintenance",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Service Locations</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Nagarabhavi",
              "Vijayanagar",
              "Mudalapalya",
              "Dabaspet",
            ].map((place, index) => (
              <div
                key={index}
                className="bg-yellow-100 rounded-2xl p-6 font-semibold text-lg shadow"
              >
                {place}
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg">
            We provide services throughout Bangalore and across Karnataka.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Licensed Electrical Contractor",
              "Experienced Skilled Labour",
              "Fast & Reliable Service",
              "Affordable Pricing",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-lg text-center"
              >
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

          <div className="space-y-4 text-lg">
            <p>
              <strong>Company Name:</strong> Sowmya Electricals
            </p>
            <p>
              <strong>Phone:</strong> 9341282721
            </p>
            <p>
              <strong>Email:</strong> harshavardhanak21@gmail.com
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href="https://wa.me/919341282721?text=Hello%20Sowmya%20Electricals%2C%20I%20need%20a%20quotation%20for%20electrical%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Quote on WhatsApp
            </a>

            <a
              href="mailto:harshavardhanak21@gmail.com?subject=Electrical%20Work%20Quotation"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>
          © 2026 Sowmya Electricals | Electrical & Plumbing Contractor in
          Bangalore, Karnataka
        </p>
      </footer>
    </div>
  );
}