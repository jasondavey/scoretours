import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-800">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center">
        <Image src="/avatar-placeholder.png" alt="Jason Davey" width={96} height={96} className="rounded-full mb-4 border-4 border-blue-200 dark:border-blue-500" />
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Jason Davey</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Building elegant, modern web experiences.<br/>Full Stack Developer & Cloud Enthusiast</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">View Projects</a>
          <a href="mailto:hello@jasondavey.io" className="px-5 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition">Contact</a>
        </div>
      </header>

      {/* Project Showcase */}
      <main id="projects" className="flex-1 px-4 sm:px-8 py-8 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Image src="/project1-placeholder.svg" alt="Project 1" width={40} height={40} />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Portfolio Website</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 text-center">A blazing fast, mobile-first portfolio to showcase your work and skills. Built with Next.js and Tailwind CSS.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <Image src="/project2-placeholder.svg" alt="Project 2" width={40} height={40} />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">AI Chatbot</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 text-center">Conversational AI assistant for customer support, integrated with OpenAI and serverless functions.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
          </div>
          {/* Project Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
              <Image src="/project3-placeholder.svg" alt="Project 3" width={40} height={40} />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Cloud Automation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 text-center">Automated cloud resource provisioning using AWS CDK and GitHub Actions for CI/CD.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
        <div className="flex gap-4 mb-2">
          <a href="mailto:hello@jasondavey.io" className="hover:text-blue-600">Email</a>
          <a href="https://github.com/jasondavey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com/in/jasondavey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>
        <span className="text-xs">&copy; {new Date().getFullYear()} Jason Davey. All rights reserved.</span>
      </footer>
    </div>
  );
}
