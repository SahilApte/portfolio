import React from 'react'
import Link from 'next/link'

const projects = [
  {
    title: 'Gem Stone Price Prediction',
    description: 'Predicting the price of Gem stone (Diamond) using Machine-Learning Strategies',
    tech: ['HTML/CSS', 'Flask', 'AWS', 'CI/CD'],
    link: '#',
  },
  {
    title: 'VRIDDHI - National Educational Database',
    description: 'Worked with modern tools such as MERN stack for Provision of common platform in which the entire data of school education, higher education and technical education are interlinked.',
    tech: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://tinyurl.com/jch5k76w',
  },
  {
    title: 'Auto Surgery - Surgical Tools Detection',
    description: 'This project aims to automatically identify the instruments which are used on the surgical videos. It is done by using a Deep Learning model which identifies instrument and procedure for an efficient surgery.',
    tech: ['Python', 'Deep Learning', 'Computer Vision'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Personal Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Some of the projects I've worked on to enhance my skills
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== '#' && (
                  <div className="mt-6">
                    <Link
                      href={project.link}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 