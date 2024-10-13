import DotPattern from "@/components/ui/dot-pattern";
import { FAQAccordion } from "../components/FAQ";

export default function AboutLayout() {
  return (
    <div>
             <DotPattern
   className="mask-radial-faded h-[500px]"
   style={{
     maskImage: "radial-gradient(300px circle at center, white, transparent)"
   }}
      />
      <br/>
      <div style={{ fontFamily: 'DM Sans, sans-serif' }} className="p-10" >
     <FAQAccordion/>
    </div>
    </div>
  )
}
