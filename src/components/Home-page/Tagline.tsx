const Tagline = () => {
  return (
      <div className=" max-w-7xl mx-auto text-center mt-40 mb-60 px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h1 className="text-5xl font-extrabold tracking-wider leading-16 text-gray-800 duration-300 dark:text-white"> 
              Revolutionizing <span className="text-[#4F67FF] dark:text-[rgb(122,139,252)]">Real Estate Tech</span>
              <br /> with Open Source
          </h1>
          
          {/* description */}
          <p className=" mt-6 text-lg text-gray-800 dark:text-gray-300 duration-300 leading-relaxed max-w-7xl mx-auto">
              The future of real estate technology is being shaped by open-source development and AI-driven innovations. With a global community of contributors, we are building cutting-edge, transparent, and AI-powered solutions using LLMs with a dedicated knowledge base. Our GitHub-hosted projects enhance real estate tools, automate workflows, and drive smarter decision-making, redefining the industry for a more efficient future.
          </p>
      </div> 
  )
}

export default Tagline
