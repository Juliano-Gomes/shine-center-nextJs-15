import { About } from "@/components/about";
import { Courses } from "@/components/courses";
import { WelcomeMessage } from "@/components/welcome";

export default function HomePage (){
  return(
    <div
    className="font-sans flex flex-col gap-1">
      <WelcomeMessage/>
      <Courses/>
      <About/>
    </div>
  )
}