// import React from 'react'

const SectionC = () => {
  return (
    <div className="min-h-[80vh">

      <div className="h-[40vh] overflow-hidden flex flex-col items-center justify-center">
        <img
          className="object-cover absolute w-full -z-10 h-100"
          src="https://static.vecteezy.com/system/resources/previews/054/611/336/large_2x/wide-angle-foodgraphy-for-restaurant-with-copy-space-photo.jpg"
          alt="coverimage"
        />
        <div className="text-5xl lg:w-45/100 lg:scale-100 scale-80 text-shadow-2xl font-bold text-white lg:leading-14 lg:mb-4 text-wrap text-center">
          Are you ready to order with best deals?
        </div>
        <button className="py-4 px-8 mt-2 lg:scale-100 scale-80 bg-orange-500 rounded-lg text-white font-bold text-nowrap cursor-pointer transition ease hover:bg-orange-600">
          Proceed To Order<i className="ri-arrow-right-s-line"></i>
        </button>
      </div>


      <div className="bg-zinc-900 h-[40vh] w-full">
        <div className="bg-zinc-900 text-zinc-300 pt-16">
  {/* Main footer content */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">
        food<span className="text-orange-500">wagon</span>
      </h2>
      <p className="text-sm leading-relaxed">
        Order your favorite meals from nearby restaurants and get them delivered fast & fresh at your doorstep.
      </p>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-white font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
        <li className="hover:text-orange-400 cursor-pointer">Careers</li>
        <li className="hover:text-orange-400 cursor-pointer">Blog</li>
        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-white font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-orange-400 cursor-pointer">Help Center</li>
        <li className="hover:text-orange-400 cursor-pointer">Safety</li>
        <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
        <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-white font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4 text-xl">
        <i className="ri-facebook-fill hover:text-orange-400 cursor-pointer"></i>
        <i className="ri-instagram-line hover:text-orange-400 cursor-pointer"></i>
        <i className="ri-twitter-x-line hover:text-orange-400 cursor-pointer"></i>
        <i className="ri-linkedin-fill hover:text-orange-400 cursor-pointer"></i>
      </div>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-zinc-800 mt-12 py-6 text-center text-sm text-zinc-400">
    © 2025 Made By Vivek Singh Raghuvanshi👋.
  </div>
</div>

      </div>
    </div>
  );
};

export default SectionC;
