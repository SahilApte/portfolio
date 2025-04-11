import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-gray-100">Get in Touch</h3>
            <div className="mt-4 space-y-2 text-gray-300 dark:text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:sahilapte.work@gmail.com" className="hover:text-indigo-400 dark:hover:text-indigo-300">
                  sahilapte.work@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+919618977651" className="hover:text-indigo-400 dark:hover:text-indigo-300">
                  +91 9618977651
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Hyderabad, India
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-gray-100">Connect</h3>
            <div className="mt-4 space-y-2 text-gray-300 dark:text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">🔗</span>
                <Link
                  href="https://www.linkedin.com/in/sahil-apte-a9161a205/"
                  className="hover:text-indigo-400 dark:hover:text-indigo-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </p>
              <p className="flex items-center">
                <span className="mr-2">💻</span>
                <Link
                  href="https://github.com/SahilApte"
                  className="hover:text-indigo-400 dark:hover:text-indigo-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Sahil Apte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 