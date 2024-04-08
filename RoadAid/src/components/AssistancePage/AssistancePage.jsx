import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import FuelCard from "./FuelCard"
import classes from './AssistancePage.module.css'
import NavigationBar from "../NavigationBar/NavigationBar"
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import MechanicCard from "./MechanicCard"
const AssistancePage = () =>{
    return (
        <AuroraBackground>
        <div className={`h-[100vh] w-[100vw]`}>
            <NavigationBar/>
            <div className={`${classes['assistance-container']}`}>
                <Tabs defaultValue="fuel">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="fuel">Fuel Assistance</TabsTrigger>
                    <TabsTrigger value="mechanic">Mechanical Assistance</TabsTrigger>
                </TabsList>
                <TabsContent value="fuel" className={`flex w-[90vw] ${classes['tabs-container']}`}>
                    <FuelCard fuelType={'Petrol'}/>
                    <FuelCard fuelType={'Diesel'}/>
                    <FuelCard fuelType={'Electric'}/>
                </TabsContent>
                <TabsContent value="mechanic" className={`flex w-[90vw] ${classes['tabs-container']}`}>
                    <MechanicCard mechName={'Tony'} />
                    <MechanicCard mechName={'Stark'}/>
                    <MechanicCard mechName={'John'}/>
                </TabsContent>
                </Tabs>
            </div>
        </div>
        </AuroraBackground>
      )
}

export default AssistancePage;