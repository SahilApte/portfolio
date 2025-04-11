import React from 'react'

const experiences = [
  {
    company: 'Realpage',
    position: 'Software QA Engineer',
    period: '05/2024 - Present',
    location: 'Hyderabad',
    achievements: [
      'Perform new automation scenarios',
      'Maintain Regression suites',
      'Improved sanity and regression pass percentage by 55%',
      'Skilled with production testing and post-production monitoring',
    ],
  },
  {
    company: 'Realpage',
    position: 'Intern',
    period: '07/2023 - 05/2024',
    location: 'Hyderabad',
    achievements: [
      'Developed Leave Application utilizing React, Raul, ASP.NET, and SQL Server',
      'Leveraging Smartsheets to streamline agent evaluations and performance ratings',
      'Providing stakeholders with enhanced visibility through the generation of reports and dashboards',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            My professional journey and achievements
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.position}`}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
                  {exp.period} | {exp.location}
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                      ✓
                    </span>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 