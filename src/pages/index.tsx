const Index = () => {
  const handleDownloadResume = () => {
    console.log("Download button clicked!");
    try {
      // Open resume in new tab
      const opened = window.open("/assets/Resume.pdf", "_blank");
      console.log("Window.open result:", opened);
      if (!opened) {
        console.log("Popup blocked or failed to open");
        // Fallback: try direct navigation
        window.location.href = "/assets/Resume.pdf";
      }
    } catch (error) {
      console.error("Error opening resume:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Hi, I'm M S Puneeth
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            A Software Developer Student passionate about building innovative
            digital solutions
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Currently seeking Software Development Engineer (SDE) opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1BZVM0IV0FnjsHnagXyhYeYNgo8h5XM4b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1BZVM0IV0FnjsHnagXyhYeYNgo8h5XM4b/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📄 Download Resume
            </a>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 space-y-4">
              <p>
                I'm a passionate software developer student with a strong
                foundation in programming and problem-solving. My journey in
                technology is driven by curiosity and the desire to create
                innovative solutions that make a difference.
              </p>
              <p>
                I have published a research paper and am constantly learning new
                technologies to stay ahead in this dynamic field. Currently
                pursuing opportunities in software development, I'm excited to
                contribute to teams that value innovation, collaboration, and
                technical excellence.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                Skills & Technologies
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "HTML", "CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">
                    Core Concepts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["DSA", "DBMS", "OOPs"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["GitHub", "VS Code", "MS Office", "Cursor"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new opportunities, innovative
            projects, or just having a tech conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:mspuneeth73@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              <span>📧</span>
              <span>mspuneeth73@gmail.com</span>
            </a>
            <a
              href="https://github.com/Puneeth177"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/m-s-puneeth-031ba9294/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
