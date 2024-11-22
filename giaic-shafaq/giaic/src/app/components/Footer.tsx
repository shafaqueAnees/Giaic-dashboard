import Image from "next/image";
const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Core Courses */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">Core Courses</h3>
          <ul className="space-y-2">
            <li className="hover:underline">Programming Fundamentals</li>
            <li className="hover:underline">Web2 Using Next.js</li>
            <li className="hover:underline">Earn as You Learn</li>
          </ul>
        </div>

        {/* Advanced Courses */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">Advanced Courses</h3>
          <ul className="space-y-2">
            <li className="hover:underline">Web 3 and Metaverse</li>
            <li className="hover:underline">Cloud-Native Computing</li>
            <li className="hover:underline">Artificial Intelligence (AI) and Deep Learning</li>
            <li className="hover:underline">Ambient Computing and IoT</li>
            <li className="hover:underline">Genomics and Bioinformatics</li>
            <li className="hover:underline">Network Programmability and Automation</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">Social Links</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a href="https://www.facebook.com/" className="hover:opacity-80">
              <img src="/images/fb.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/" className="hover:opacity-80">
              <img src="/images/yt.png" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/?hl=en" className="hover:opacity-80">
              <img src="/images/ins.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/shafaq-%D8%B2%D9%88%D8%AC%DB%81-%D8%B2%D9%88%DB%81%DB%8C%D8%A8-%D8%B5%D8%AF%DB%8C%D9%82%DB%8C-65490011b/" className="hover:opacity-80">
              <img src={"/images/logo1.png"} alt="linkdin" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/images/gm.png" width={400} height={400} alt="Email" className="w-5 h-5" />
            <a
              href="mailto:education@governorsindh.com"
              className="text-blue-600 hover:underline"
            >
              education@governorsindh.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-gray-700">
        <p>
          Made by{" "}
          <span className="text-[#2EB6E8]">GIAIC</span> student (2024){" "}
          <span className="text-[#2EB6E8]">Shafaque Anees</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
