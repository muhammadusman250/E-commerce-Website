import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (<>
    <section className="py-3">
      {/* Horizontal Line */}
      <hr className="w-full" />
      {/* Footer */}
      <div className="flex justify-around max-md:gap-10 leading-10 max-md:flex-col py-10 max-md:items-center">
        {/* Logo & Description */}
        <div className="tracking-wider">
          <div className="font-serif font-bold text-2xl">Choice</div>
          <div className="text-gray-500 text-sm pt-3">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </div>
        </div>
        {/* Lists */}
        <div className="flex gap-20 max-md:gap-10 max-sm:gap-5">
          {/* About List */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="font-bold text-black">About</li>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          {/* Community List */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="font-bold text-black">Community</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          {/* Socials List */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="font-bold text-black">Socials</li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      {/* copyright line */}
      <div className="px-[10%] flex max-md:flex-col max-md:items-center justify-between  py-8 font-semibold max-md:gap-10">
        <div className="flex gap-12 max-md:gap-6">
          <div>Policy &amp; Privacy</div>
          <div>Terms &amp; Conditions</div>
        </div>
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://github.com/muhammadusman250"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-usman----/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
            >
            <FaLinkedin size={40} />
          </a>
          <a
            href="mailto:muhammadusmanmemon2008@gmail.com"
            className="hover:text-color-01 transition duration-700"
            >
            <FaGoogle size={40} />
          </a>
            </div>
        </div>
        <div className="text-center">
          <hr className="my-8 border-gray-600" />
          <p className="text-sm">
            &copy; 2025 Muhammad Usman. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
