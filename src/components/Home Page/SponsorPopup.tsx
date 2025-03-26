import React from 'react';
import { FiX } from 'react-icons/fi';
import { Heart, GitHub } from '../assets/Icons';


interface SponsorPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const SponsorPopup: React.FC<SponsorPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            {/* Backdrop with blur effect */}
            <div onClick={onClose}  className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>
            
            {/* Modal Content */}
            <div className="relative bg-[#0F1118] rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl border border-[#00FF66]/20 z-10 transform transition-all duration-300 scale-100 opacity-100">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <FiX className="w-5 h-5" />
                </button>
                
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0D2E1A] flex items-center justify-center">
                        <Heart className="w-8 h-8 text-[#00FF66] animate-pulse" />
                    </div>
                    
                    <h3 className="text-white text-xl font-bold mb-2">Sponsorship Coming Soon</h3>
                    
                    <p className="text-gray-400 mb-6">
                        We're currently setting up our sponsorship program. Thank you for your interest in supporting our open-source projects!
                    </p>
                    
                    <p className="text-gray-400 text-sm mb-6">
                        In the meantime, you can follow us on GitHub to stay updated on our progress.
                    </p>
                
                    <a  className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-[#1A1A2E] text-white text-sm font-medium hover:bg-[#252540] transition-colors"
                        href="https://github.com/Rejoiceindia"
                        target="_blank"
                        rel="noopener noreferrer">
                            <GitHub className="w-4 h-4 text-[#00FF66]" /> Follow us on GitHub
                    </a>
                </div>
            </div>
        </div>
  );
};

export default SponsorPopup;
