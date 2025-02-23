import React from "react";
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
  return (
    <div className="w-52 flex items-center justify-center rounded-4xl bg-white py-6">
      <div className="w-full flex flex-col gap-1 -mt-14 items-center justify-center px-10  ">
        <div>
          {profilePicUrl ? (
            <img src={profilePicUrl} alt="profile-pic" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-indigo-500" />
          )}
        </div>
        <div className="text-xl text-zinc-800">{name}</div>
        <div className="text-gray-500 text-base">{position}</div>
        <div className="flex items-center justify-center gap-2">
          <a
            href={
              socialLinks?.github
                ? socialLinks.github
                : "https://github.com/aneeshsharma72067"
            }
            target="_blank"
            className="cursor-pointer"
          >
            <GitHub color="black" size={20} />
          </a>
          <a
            href={socialLinks?.twitter}
            target="_blank"
            className="cursor-pointer"
          >
            <Twitter color="black" size={20} />
          </a>
          <a
            href={socialLinks?.twitter}
            target="_blank"
            className="cursor-pointer"
          >
            <Linkedin color="black" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
