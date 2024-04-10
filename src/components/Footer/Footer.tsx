import React from "react";

const Footer = () => {
  return (
    <div className="h-[30%] font-grotesk bg-primary">
      <div className="fter:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:duration-300"></div>
      <div className="p-10">
        {/* Footer 1 */}
        <div className="flex justify-between px-[20%] text-xl ">
          <div className="flex flex-col">
            <span>Read And Add Your Ingight</span>
            <span>Find Your Favorite Book And Read It Here For Free</span>
          </div>
          <div className="flex justify-endcontent-center">
            <div className="flex flex-col px-5">
              <p className="font-bold text-2xl">Company</p>
              <span>About us</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">Resources</p>
              <span>Community</span>
              <span>Contract</span>
              <span>Terms of servieces</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
