import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
  
export default function UserProfile({params}: any){
    return(
        <div className="flex flex-col items-center justify-center gap-5 min-h-screen py-2 ">
            <h1 className="text-2xl flex align-middle justify-center item-center font-semibold text-white">
                {params.name=="CN" && "Computer Networks"}
            </h1>
            <hr />
                
            <div className="w-[50%]">
                <Accordion type="single" collapsible className='bg-slate-100 border-r-2 rounded-xl p-3'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Unit -1</AccordionTrigger>
                        <AccordionContent>
                         <Link href="CN-1.pdf" target="_blank" download="unit-1.pdf">
                          <span className="text-blue-500">Download notes</span>
                         </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Unit -2</AccordionTrigger>
                        <AccordionContent>
                         <Link href="/public/CN-2.pdf" target="_blank" download="unit-2.pdf">
                          <span className="text-blue-500">Download notes</span>
                         </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Unit -3</AccordionTrigger>
                        <AccordionContent>
                         <Link href="/public/CN-3.pdf" target="_blank" download="unit-3.pdf">
                          <span className="text-blue-500">Download notes</span>
                         </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Unit -4</AccordionTrigger>
                        <AccordionContent>
                         <Link href="/public/CN-4.pdf" target="_blank" download="unit-4.pdf">
                          <span className="text-blue-500">Download notes</span>
                         </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Unit -5</AccordionTrigger>
                        <AccordionContent>
                         <Link href="/public/CN-5.pdf" target="_blank" download="unit-5.pdf">
                          <span className="text-blue-500">Download notes</span>
                         </Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="w-[40%] p-10 text-white border-2  border-l-emerald-100">
                <h1>
                    Video Lectures
                </h1>
                <hr  className='w-full'/>
                <div>
                    <Link href="https://www.youtube.com/watch?v=0N5X6JvTn5A" target="_blank">
                        <h6 className='hover:text-blue-500'>Unit - 1</h6>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=0N5X6JvTn5A" target="_blank">
                        <h6 className='hover:text-blue-500'>Unit - 2</h6>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=0N5X6JvTn5A" target="_blank">
                        <h6 className='hover:text-blue-500'>Unit - 3</h6>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=0N5X6JvTn5A" target="_blank">
                        <h6 className='hover:text-blue-500'>Unit - 4</h6>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=0N5X6JvTn5A" target="_blank">
                        <h6 className='hover:text-blue-500'>Unit - 5</h6>
                    </Link>
                </div>
            </div>
            <Link href="/"><h6>Go back to home</h6></Link>
        </div>
    );
}