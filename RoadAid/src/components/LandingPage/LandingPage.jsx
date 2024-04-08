import { motion } from 'framer-motion';
import { useNavigate} from 'react-router-dom';
import { LampContainer } from '../ui/lamp';
import classes from './LandingPage.module.css'
import { Button } from "@/components/ui/button"

const LandingPage = () =>{
    const navigate = useNavigate();

    const RequestAssistance = () =>{
        navigate('/assistance')
    }
    return(
        <div className={`bg-slate-950 ${classes['landing-container']}`}>
            <LampContainer className='mt-[7%]'>
                <motion.h1
                    initial={{ opacity: 0.5, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
                >
                    You will never be <br /> STRANDED <br/>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0.5, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className='pt-10'
                >
                    <Button className='px-5 bg-cyan-500 text-white hover:bg-cyan-700' onClick={RequestAssistance}>Request Assistance</Button>
                </motion.div>
            </LampContainer>
            <div className="bg-slate-950 w-[100vw] flex justify-center">
                
            </div>
        </div>
    )
}

export default LandingPage;