import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold text-zinc-900 mb-4">
        food<span className="text-orange-500">wagon</span>
      </h2>

      <p className="text-sm leading-relaxed text-zinc-600">
        Order your favorite meals from nearby restaurants and get them delivered  
        fast & fresh at your doorstep.
      </p>
    </div>

    {/* Company */}
    <div>
      <h3 className="font-semibold mb-4 text-zinc-900 relative inline-block">
        Company
        <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-orange-500"></span>
      </h3>

      <ul className="space-y-2 text-sm text-zinc-600">
        <li className="hover:text-orange-500 transition cursor-pointer">About Us</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Careers</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Blog</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="font-semibold mb-4 text-zinc-900 relative inline-block">
        Support
        <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-orange-500"></span>
      </h3>

      <ul className="space-y-2 text-sm text-zinc-600">
        <li className="hover:text-orange-500 transition cursor-pointer">Help Center</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Safety</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Terms & Conditions</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Privacy Policy</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="font-semibold mb-4 text-zinc-900 relative inline-block">
        Follow Us
        <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-orange-500"></span>
      </h3>

      <div className="flex gap-4">
        {["facebook-fill","instagram-line","twitter-x-line","linkedin-fill"].map((icon, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center rounded-full
                       border border-zinc-200 text-zinc-600
                       hover:bg-orange-500 hover:text-white hover:border-orange-500
                       transition cursor-pointer"
          >
            <i className={`ri-${icon}`}></i>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
    © 2025 Made By <span className="text-orange-500 font-medium">Vivek Singh Raghuvanshi</span> 👋
  </div>
</footer>

  )
}

export default Footer