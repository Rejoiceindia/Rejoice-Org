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
  console.log(githubUsername);

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
    <div className="w-52 min-h-40 h-40 flex items-center justify-center rounded-4xl bg-white dark:bg-zinc-700 py-6">
      <div className="w-full flex flex-col gap-2 -mt-14 items-center justify-center px-10">
        <div>
          {profilePicUrl || gitHubProfilePic ? (
            <img
              src={profilePicUrl || gitHubProfilePic}
              alt="profile-pic"
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-indigo-500" />
          )}
        </div>
        <div className="text-[16px] text-zinc-800 dark:text-zinc-100 text-center">
          {name}
        </div>
        <div className="text-gray-500 text-sm dark:text-gray-400 text-center">
          {position}
        </div>
        <div className="flex items-center justify-center gap-2">
          {socialLinks?.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <GitHub color={theme === "light" ? "black" : "white"} size={20} />
            </a>
          )}
          {socialLinks?.twitter && (
            <a
              href={socialLinks?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Twitter
                color={theme === "light" ? "black" : "white"}
                size={20}
              />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Linkedin
                color={theme === "light" ? "black" : "white"}
                size={20}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
