const Testimonials = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-16 px-6">
        {/* Section Title */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">✨ What Our Clients Say</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from those who have experienced the difference we bring to their teams and businesses.
          </p>
        </section>
  
        {/* Testimonials Cards */}
        <section className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[{
            name: "John Doe",
            role: "CEO, TechCorp",
            feedback: "The team delivered exceptional results. Their work ethic and innovative approach set them apart. Truly impressive!",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
          }, {
            name: "Sarah Lee",
            role: "Product Manager, DesignHub",
            feedback: "Our collaboration was seamless. Their attention to detail and creative solutions elevated our product significantly.",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
          }, {
            name: "David Smith",
            role: "Lead Developer, CodeWorks",
            feedback: "An outstanding partner for our development team. They understood our needs and provided top-notch solutions.",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
          }].map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-green-200"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">{testimonial.feedback}</p>
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default Testimonials;
  