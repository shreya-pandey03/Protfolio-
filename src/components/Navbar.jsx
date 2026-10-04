import { FaLinkedin, FaGithub, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import Logo from "../assets/projects/logo.jpg";


function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={Logo} alt="Logo" width={50} height={33} />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                {/* <a
                    href="https://www.instagram.com/your-instagram-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a> */}

                <a
                    href="https://twitter.com/your-twitter-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
