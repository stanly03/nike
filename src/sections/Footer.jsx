import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from '../constant'
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="">
            <img
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="text-base mt-6 font-montserrat text-white-400 
             sm:max-w-sm leading-7">
            Get shoes ready  for the term at your nearest Nike store.
            Find Your perfect Size In Store</p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((icon) => (
                <div className="flex justify-center items-center w-12 h-12
                              bg-white rounded-full ">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))
            }
          </div>
        </div >

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">
                  {section.title}
                </h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li key={link.name} className="mt-3 leading-normal text-white-400 font-montserrat text-base hover:text-slate-gray ">
                        <a>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between text-white mt-24
                      max-sm:flex-col max-sm:items-center">
                        <div className="flex flex-1 justify-center items-center font-montserrat cursor-pointer">
                 <img
                 src={copyrightSign}
                 alt="copyright sign"
                 height={20}
                 width={20}
                 className="rounded-full m-0"
                 />
                 <p>Copyright. All rights reserved</p>
                        </div>
                        <p>Terms & Conditions </p>

      </div>
    </footer>
  )
}

export default Footer