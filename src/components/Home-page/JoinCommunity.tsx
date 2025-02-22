
const JoinCommunity = () => {
    return (
        <div className="bg-[#4F67FF] text-white py-16 px-6 sm:px-8 rounded-2xl mx-4 sm:mx-8 my-12">
            
            <div className="max-w-3xl mx-auto text-center">
                
                <h2 className="text-4xl font-bold mb-4">
                    Join the Community
                </h2>
                
                <p className="text-lg text-white mb-8">
                    Contribute, collaborate, and grow with open source projects. Join a vibrant community 
                    of developers passionate about building impactful solutions.
                </p>

                <a href="https://github.com/Rejoiceindia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-gradient-to-b from-black to-[#1f1f2a] hover:from-[#1f1f2a] hover:to-black 
                    text-white font-semibold py-3 px-8 rounded-full 
                    transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:shadow-black/20 
                    transform hover:-translate-y-1 
                    hover:scale-103">
                        Become a Contributor !
                </a>
            </div>
        </div>
    );
};

export default JoinCommunity; 