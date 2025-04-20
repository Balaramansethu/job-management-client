const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          About <span className="text-indigo-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're on a mission to connect talent with opportunity, one meaningful match at a time.
        </p>
      </section>

      {/* Story Block */}
      <section className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-8 shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🌱 Our Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          Born out of a passion for simplifying hiring and job hunting, we started as a small team of dreamers.
          Today, we’re building bridges between companies and professionals — with technology, trust, and transparency.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">✨ What We Believe In</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border-t-4 border-indigo-200 transition-all">
            <h3 className="font-bold text-lg mb-2 text-indigo-600">People First</h3>
            <p className="text-sm text-gray-600">
              We prioritize people over processes. Human connection is at the heart of what we do.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border-t-4 border-indigo-200 transition-all">
            <h3 className="font-bold text-lg mb-2 text-indigo-600">Transparency</h3>
            <p className="text-sm text-gray-600">
              No hidden layers — just honest interactions, clear communication, and real impact.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border-t-4 border-indigo-200 transition-all">
            <h3 className="font-bold text-lg mb-2 text-indigo-600">Innovation</h3>
            <p className="text-sm text-gray-600">
              We thrive on creativity and are constantly evolving to improve experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
