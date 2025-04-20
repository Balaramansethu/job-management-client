const FindJobsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          🚀 Your Next <span className="text-indigo-600">Opportunity</span> Awaits
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore roles tailored to your growth — from tech pioneers to creative visionaries.
        </p>
      </section>

      {/* Highlight Block */}
      <section className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-8 shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🌍 Curated Roles Across the Industry</h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you’re a developer, designer, or data wizard — we’ve gathered roles that speak to your skillset and ambitions. No endless searching, just great matches.
        </p>
      </section>

      {/* Job Cards */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">📌 Featured Jobs</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "UI/UX Designer",
              company: "DesignHub",
              location: "Remote",
              desc: "Create stunning user interfaces and improve user experiences across mobile and web apps.",
              type: "Remote · Full Time",
            },
            {
              title: "Backend Developer",
              company: "TechNova",
              location: "Mumbai, India",
              desc: "Build scalable APIs and handle server-side logic for enterprise-level applications.",
              type: "On-site · Full Time",
            },
            {
              title: "Data Analyst",
              company: "InsightCorp",
              location: "Bengaluru, India",
              desc: "Analyze business data to provide actionable insights and support decision-making.",
              type: "Hybrid · Contract",
            },
          ].map((job, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-t-4 border-indigo-100"
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-1">{job.title}</h3>
              <p className="text-gray-800 font-medium">{job.company}</p>
              <p className="text-gray-500 text-sm mb-2">{job.location}</p>
              <p className="text-gray-600 text-sm mb-4">{job.desc}</p>
              <span className="text-sm font-semibold text-indigo-600">
                {job.type}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FindJobsPage;
