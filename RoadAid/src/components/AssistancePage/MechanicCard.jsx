import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import classes from './MechanicCard.module.css'

const MechanicCard = ({mechName}) =>{
    return(
        <Card className={`w-[33%] ${classes['card-container']}`}>
      <CardHeader>
        <CardTitle>{mechName}</CardTitle>
        <CardDescription>Contact {mechName} for roadside assistance.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Contact No.</Label>
              <Input id="name" placeholder="Enter your contact no." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Location</Label>
              <Input id="name" placeholder="Name of your project" value={'College of Engineering Thalassery, P.O Chonadam'} className={`${classes['input-focus']}`}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Request</Button>
      </CardFooter>
    </Card>
    )
}

export default MechanicCard;