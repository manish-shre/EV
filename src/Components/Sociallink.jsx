import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = ({ iconColor }) => {
  return (
    <div className="flex justify-center gap-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 flex items-center justify-center rounded-full transition"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
        }
      >
        <FontAwesomeIcon icon={faFacebookF} className={`${iconColor} text-[20px]`} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 flex items-center justify-center rounded-full transition"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
        }
      >
        <FontAwesomeIcon icon={faTwitter} className={`${iconColor} text-[20px]`} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 flex items-center justify-center rounded-full transition"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
        }
      >
        <FontAwesomeIcon icon={faInstagram} className={`${iconColor} text-[20px]`} />
      </a>
    </div>
  );
};

export default SocialLinks;