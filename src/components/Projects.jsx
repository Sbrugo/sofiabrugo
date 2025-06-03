const Project = ({ props }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">{props.title}</h2>
      <p className="text-gray-700">{props.description}</p>

      <section>
        <h3 className="text-xl font-semibold mt-4">🔧 Tech Stack</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {props.techStack.map((tech) => (
            <li
              key={tech}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium"
            >
              {props.tech}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-4">🧩 Problem & Goal</h3>
        <p className="text-gray-700">{props.problem}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-4">
          📐 Planning & Architecture
        </h3>
        <p className="text-gray-700 whitespace-pre-wrap">{props.planning}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-4">🚀 Features & Solutions</h3>
        {props.features.map((feature, idx) => (
          <div key={idx} className="mb-4">
            <h4 className="font-semibold text-md">{props.feature.title}</h4>
            <p className="text-gray-700">{props.feature.description}</p>
            {feature.codeSnippet && (
              <pre className="mt-2 bg-gray-900 text-green-200 text-sm rounded p-3 overflow-x-auto">
                <code>{props.feature.codeSnippet}</code>
              </pre>
            )}
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-4">🌍 Deployment & Testing</h3>
        <p className="text-gray-700 whitespace-pre-wrap">{props.deployment}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-4">
          📚 Lessons & Improvements
        </h3>
        <p className="text-gray-700">{props.lessons}</p>
      </section>

      <section className="mt-6 flex gap-4">
        {props.githubUrl && (
          <a
            href={props.githubUrl}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded hover:opacity-80"
          >
            GitHub
          </a>
        )}
        {props.liveDemoUrl && (
          <a
            href={props.liveDemoUrl}
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:opacity-80"
          >
            Live Demo
          </a>
        )}
      </section>
    </div>
  );
};

export default Project;
