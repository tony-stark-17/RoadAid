import Logo from '../../assets/logo.png';
import classes from './NavigationBar.module.css'
import { useNavigate} from 'react-router-dom';
const NavigationBar = () =>{
    const navigate = useNavigate();

    const Home = () =>{
        navigate('/')
    }
    return(
        <div className={`${classes['navigation-bar']}`}>
            <img src={Logo} alt="" onClick={Home}/>
        </div>
    )
}

export default NavigationBar;