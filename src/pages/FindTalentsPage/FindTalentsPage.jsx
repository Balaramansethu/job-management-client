const FindTalentsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Meet <span className="text-indigo-600">Top Talent</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handpicked professionals who bring passion, skills, and impact to your team.
        </p>
      </section>

      {/* Highlight Block */}
      <section className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-8 shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">💡 Why Hire With Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          We understand that the right people can transform ideas into innovation. That’s why we bring you a carefully curated list of developers, designers, and creators who are not just skilled — they’re passionate problem solvers ready to make an impact.
        </p>
      </section>

      {/* Talent Cards */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">✨ Featured Professionals</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Ananya Verma",
              role: "Frontend Developer",
              stack: "React, Tailwind",
              bio: "Passionate about building seamless UIs and creating engaging user experiences.",
              tag: "Available · Remote",
              tagColor: "blue",
            },
            {
              name: "Rohan Mehta",
              role: "Backend Developer",
              stack: "Node.js, MongoDB",
              bio: "Specializes in building robust APIs and scalable backend systems.",
              tag: "Open to Work · Hybrid",
              tagColor: "green",
            },
            {
              name: "Priya Singh",
              role: "UI/UX Designer",
              stack: "Figma, Adobe XD",
              bio: "Creates intuitive and aesthetic designs that elevate digital experiences.",
              tag: "Freelance · Contract",
              tagColor: "yellow",
            },
          ].map((talent, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-t-4 border-indigo-100"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-1">{talent.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{talent.role} · {talent.stack}</p>
              <p className="text-gray-600 text-sm mb-4">{talent.bio}</p>
              <span className={`text-sm font-medium text-${talent.tagColor}-600`}>
                {talent.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FindTalentsPage;
