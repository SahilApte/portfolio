import React from 'react'

const skills = [
  { name: 'Java', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'C#', category: 'Programming' },
  { name: 'Selenium', category: 'Testing' },
  { name: 'TestNG', category: 'Testing' },
  { name: 'Postman', category: 'Testing' },
  { name: 'API Testing', category: 'Testing' },
  { name: 'SQL', category: 'Database' },
  { name: 'MERN Stack', category: 'Web Development' },
  { name: 'CI/CD', category: 'DevOps' },
  { name: 'PowerApps', category: 'Low Code' },
  { name: 'Problem Solving', category: 'Soft Skills' },
  { name: 'Communication', category: 'Soft Skills' },
  { name: 'Management', category: 'Soft Skills' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Technical and professional skills I've developed throughout my career
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 