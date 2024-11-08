'use client'

import React, { useState } from 'react'
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react'

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <header className="container mx-auto px-4 py-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Hello, I'm John Doe</h2>
            <p className="text-xl mb-4">A passionate full-stack developer with a love for creating beautiful and functional web applications.</p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((project) => (
                <div key={project} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">View Project</a>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML'].map((skill) => (
                <li key={skill} className="bg-gray-100 dark:bg-gray-800 p-2 rounded">{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="mb-4">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
            <a href="mailto:john@example.com" className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              <Mail className="w-5 h-5 mr-2" />
              john@example.com
            </a>
          </section>
        </main>

        <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}