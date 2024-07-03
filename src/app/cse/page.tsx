import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import CardShow from "@/ui/CardShow/CardShow"
import Link from "next/link"
const page = () => {
  const csesubjects = [
    {
      id: 1,
      title: "Data Structures",
      shortname: "DS",
      description: "Data Structures",
      image: "https://images.unsplash.com/photo-1612837897640-7b6f6d4b0b9d",
    },
    {
      id: 2,
      title: "Algorithms",
      shortname: "AL",
      description: "Algorithms",
      image: "https://images.unsplash.com/photo-1612837897640-7b6f6d4b0b9d",
    },
    {
      id: 3,
      title: "Computer Networks",
      shortname: "CN",
      description: "Computer Networks",
      image: "https://images.unsplash.com/photo-1612837897640-7b6f6d4b0b9d",
    },
    {
      id: 4,
      title: "Operating Systems",
      shortname: "OS",
      description: "Operating Systems",
      image: "https://images.unsplash.com/photo-1612837897640-7b6f6d4b0b9d",
    },
  ]
  return (
    <div className="bg-black w-full h-[90vh] flex flex-grow relative justify-center align-middle">
      <div className="flex flex-col items-center justify-center w-full  gap-10">
        <h1 className="text-6xl font-bold text-white">Computer Science and Engineering</h1>
        <p className="text-xl text-white">Find notes, contact us, and read our blog</p>
        <div className="flex lg:flex-row flex-wrap items-center justify-center gap-10">
          {csesubjects.map((subject) => (
            <div key={subject.id} className="hover:scale-[1.1] hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle  content-center">
              <Link href={`/cse/${subject.shortname}`} passHref>
                <CardShow  classname="hover:scale-[1.1] hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle  content-center" title={subject.title}  description={subject.description}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page