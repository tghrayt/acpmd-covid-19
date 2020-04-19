import React from 'react';
import { FaInstagram,FaGithub, FaHome, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const getFaIcon = (name) => {
  switch (name) {
    case 'github':
      return <FaGithub size="2rem" />;
      case 'facebook':
      return <FaFacebook size="2rem" />;
      case 'instagram':
      return <FaInstagram size="2rem" />;
    case 'twitter':
      return <FaTwitter size="2rem" />;
    case 'linkedin':
      return <FaLinkedin size="2rem" />;
    case 'mail':
      return <MdEmail size="2rem" />;
    case 'blog':
      return <FaHome size="2rem" />;
    default:
      return <FaHome size="2rem" />;
  }
};

function SocialItem({ social: { name, url } }) {
  return (
    <div className="flex-grow-1 mx-2 my-1  rounded-full p-1">
      <a rel="noopener noreferrer" target="_blank" href={url}>
        {getFaIcon(name)}
      </a>
    </div>
  );
}

export default SocialItem;
