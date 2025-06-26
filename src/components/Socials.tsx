import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Socials = () => {
  return (
    <>
      <a
        href="https://github.com/Devang0907"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-zinc-400"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://x.com/Devang0907"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-zinc-400"
      >
        <FaXTwitter size={24} />
      </a>
    </>
  );
};
