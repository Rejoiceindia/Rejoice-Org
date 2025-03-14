import React, { useEffect, useState } from 'react'

interface MenuItem {
    name: string;
    path: string;
    section: string;
  }
  
  interface SectionMap {
    [key: string]: string;
  }

const Navbar2: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('HOME')

    const menuItems: MenuItem[] = [
        { name: 'HOME', path: '/', section: 'main-section' },
        { name: 'PROJECTS', path: '/project', section: 'project-section' },
        { name: 'COMMUNITY', path: '/community', section: 'community-section' },
        { name: 'CONTACT', path: '/contact', section: 'footer-section' },
      ];

    // Function to handle smooth scrolling to sections
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
        e.preventDefault();
        
        // Find the section element
        const section = document.getElementById(sectionId);
        
        if (section) {
            // Scroll to the section smoothly
            section.scrollIntoView({ behavior: 'smooth' });
            
            // Update active item
            const menuItem = menuItems.find(item => item.section === sectionId);
            if (menuItem) {
                setActiveItem(menuItem.name);
            }
        }
    };

    useEffect(() => {
        const handleScroll = (): void => {
          const sections = document.querySelectorAll('section');
          const scrollPosition = window.scrollY + 100; // offset
          
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              const menuMap: SectionMap = {
                'main-section': 'HOME',
                'project-section': 'PROJECTS',
                'community-section': 'COMMUNITY',
                'footer-section': 'CONTACT'
              };
              
              if (menuMap[sectionId]) {
                setActiveItem(menuMap[sectionId]);
              }
            }
          });
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <div className={`fixed top-0 left-0 w-full flex justify-center py-4 z-50 transition-all duration-300`}>
            <div className="relative inline-block group shadow-xl shadow-black bg-[#0d0d0d] py-0.5 sm:py-1 md:py-2 px-1.5 sm:px-3 md:px-4 rounded-md sm:rounded-lg md:rounded-xl text-white text-center font-extrabold min-w-fit w-auto sm:w-2/7 hover:shadow-[10px_10px_20px_#ebebeb,_-10px_-10px_20px_#ffffff] hover:shadow-black hover:w-auto sm:hover:w-1/7 duration-500">
                <span className='italic text-sm sm:text-lg md:text-2xl tracking-wider z-10'>
                    REJOICE
                </span>

                <div className="nav-bar absolute transform top-0 left-1/2 -translate-x-1/2 bg-[#0d0d0d] rounded-md sm:rounded-lg md:rounded-xl p-0.5 sm:p-1.5 md:p-2 scale-0 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 group-hover:top-full group-hover:shadow-xl group-hover:shadow-black transition-all duration-500">
                    <div className="flex flex-row space-x-1 sm:space-x-2 md:space-x-4">
                        {menuItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={`#${item.section}`}
                            onClick={(e) => scrollToSection(e, item.section)}
                            className={`rounded-md sm:rounded-lg px-1.5 sm:px-4 md:px-6 lg:px-8 py-0.5 sm:py-1.5 md:py-2 hover:bg-gray-300 duration-600 hover:text-black text-center text-[10px] xs:text-xs sm:text-sm font-semibold ${
                            activeItem === item.name ? 'bg-gray-200 text-black' : 'text-white'}`}>
                                {item.name}
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2


