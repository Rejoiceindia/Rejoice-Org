import React, { useEffect, useState } from "react";
import { GitHub, Linkedin, Twitter } from "../../assets/Icons";

type Props = {
  name: string;
  position: string;
  profilePicUrl?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
};

const ContributorCard: React.FC<Props> = ({
  name,
  position,
  profilePicUrl,
  socialLinks,
}) => {
  
  const [gitHubProfilePic, setGitHubProfilePic] = useState<string | undefined>(
    undefined
  );

  const githubUsername = socialLinks?.github
    ? socialLinks?.github.split("/").pop()
    : "";

  useEffect(() => {
    if (githubUsername && !profilePicUrl) {
      const fetchGitHubProfilePic = async () => {
        try {
          const response = await fetch(
            `https://api.github.com/users/${githubUsername}`
          );
          const data = await response.json();
          if (data.avatar_url) {
            setGitHubProfilePic(data.avatar_url);
          }
        } catch (error) {
          console.error("Error fetching GitHub profile:", error);
        }
      };

      fetchGitHubProfilePic();
    }
  }, [githubUsername, profilePicUrl]);

  return (
    <div className="w-full h-full bg-gray-800/30 rounded-lg p-3 xs:p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 border border-transparent hover:border-gray-700 hover:shadow-lg hover:shadow-[#00FF66]/5">
      {/* Profile Image */}
      <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-[#2a2a2a]">
        <img
          src={
            gitHubProfilePic ||
            `https://placehold.co/200x200/333/FFF?text=${name.charAt(0)}`
          }
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Position */}
      <h3 className="text-white text-sm xs:text-base sm:text-lg font-medium mb-1">{name}</h3>
      <p className="text-gray-400 text-xs xs:text-sm mb-3 sm:mb-4">{position}</p>

      {/* Social Links */}
      {socialLinks && (
        <div className="flex gap-2 sm:gap-3">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitHub className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ContributorCard;
