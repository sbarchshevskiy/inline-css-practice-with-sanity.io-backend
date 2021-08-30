import React, { useState, useEffect } from 'react';
import sanityClient from "../client";


export default function Projects(){
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
 
    }`)
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return(
    <main className="bg-coral-100 min-h-screen p-12">
      <section className="container mx-auto">
        {/* <h1 className="text-5xl flex justify-center cursive">Apps</h1> */}
        {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">web applications</h2> */}
        <section className="grid grid-cols-2 gap-8">
          {projectData && projectData.map((projects, index) => (
          <article className="relative rounded-lg shadow-xl bg-blue p-16">
            <h3 className="text-salmon-800 text-3xl font-bold mb-2 hover:text-red-700">
              <a href={projects.link} alt={projects.title} target="_blank" rel="noopener noreferrer">{projects.data}</a>
            </h3>
            <div className="text-gray-500 text-xs space-x-4">
              <span>
                <strong className="font-bold">Date</strong>:{" "}
                {new Date(projects.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>{" "}
                {projects.place}
              </span>
              <span>
                <strong className="font-bold">Type</strong>{" "}
                {projects.projectType}
              </span>
              <p className="my-6 text-lg text-salmon-700 leading-relaxed">
                {projects.description}
              </p>
              <a href={projects.link}
                 rel="noopener noreferer"
                 target="_blank"
                 className="text-red-500
                 fond-bold
                 hover:underline
                 hover:text-red-400"
              >
                View the project {" "}

              <span role="img" aria-label="right pointer">here</span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>

  )
}