import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import CardShow from "@/ui/CardShow/CardShow"
import { Car } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <CardShow classname="hover:scale-[1.1] hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle  content-center" title="Mechanical Engineering"/>
        <h1 className="text-6xl font-bold text-white">Get Started</h1>

      </div>

{/* 
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
        </Accordion> */}

    </div>
  )
}

export default page