// onboarding/layout.tsx
import { CardContent } from "@/components/ui/card";
import ContextSection from "../components/ContextSection";
import DotPattern from "@/components/ui/dot-pattern";

export default function AboutLayout() {
  return (
    <div>
             <DotPattern
   className="mask-radial-faded h-[700px]"
   style={{
     maskImage: "radial-gradient(700px circle at center, white, transparent)"}}
      />
      <br/>
      <br/>
      <div style={{ fontFamily: 'DM Sans, sans-serif' }} >
    <ContextSection/>
    <CardContent/>
    </div>
    </div>
  )
}
