import React, { useEffect, useState } from "react";
import { GitHub, Linkedin, Twitter } from "../../assets/Icons";
import { useTheme } from "../../../Context/ThemeContext";

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
  const { theme } = useTheme();
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
            console.log(data.avatar_url);

            setGitHubProfilePic(data.avatar_url);
            console.log(gitHubProfilePic);
          }
        } catch (error) {
          console.error("Error fetching GitHub profile:", error);
        }
      };

      fetchGitHubProfilePic();
    }
  }, [githubUsername, profilePicUrl]);

  return (
    <div
      className={`w-full  max-w-[250px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-gray-500`}
    >
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#2a2a2a]">
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
      <h3 className="text-white text-lg font-medium mb-1">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">{position}</p>

      {/* Social Links */}
      {socialLinks && (
        <div className="flex gap-3 mt-2">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitHub className="w-5 h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ContributorCard;
