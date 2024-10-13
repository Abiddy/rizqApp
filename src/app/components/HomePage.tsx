import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import  Marquee  from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { defaultDomains } from "@/lib/data";
import BeamComponent from "./BeamComponent";

const features = [
    {
     
      name: "Rizq is Recruiting!",
      description: "Create a seller profile in a few minutes and become a s Rizq Seller today!",
      href: "/onboarding",
      cta: "Create Seller Profile",
      className: "col-span-4 md:col-span-4 row-span-1 lg:row-span-1",
      background: (
        <>
          <div
            id="hero"
            className=" border-none transition-all duration-300 ease-out"
          >
                <BeamComponent /> 
          </div>
        </>
      ),
    },
    {
      
        name: "Our Services",
        description: "Rizq is currently recruiting for a wide variety of online services! Explore all our categories",
        href: "",
        cta: "View projects",
        className: "col-span-4 md:col-span-4",
        background: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            <Marquee
              className="absolute  top-10 [--duration:40s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
              pauseOnHover
            >
              {defaultDomains.map((f, idx) => (
                <a
                  href=""
                  key={idx}
                  className=
                    "relative w-40 h-full cursor-pointer overflow-hidden rounded-xl border p-4 hover:-translate-y-1 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform-gpu transition-all duration-300 ease-out hover:blur-none"    
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-lg font-bold dark:text-white ">
                        {f.name}
                      </figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                </a>
              ))}
            </Marquee>
          </motion.div>
        ),
      },
]


export function HomePage() {
    return (
      <>
      <div className="p-4"> 
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
        </div>
      </>
    );
  }

  export default HomePage