import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"


const CardShow = ({title,classname,description} : {title:string,classname:string,description?:string}) => {
  return (
    <div>
      <Card className={classname}>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </div>


  )
}

export default CardShow