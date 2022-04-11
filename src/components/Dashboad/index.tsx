import index from './Dashboad.module.css'
import Overview from './Overview'
import LevelChart from './LevelChart'
import Chart from './Chart'
export default function Dashboad(prop:any) {
    return(
        <div className={index.dashboad}>
            <div className={index.middle}>
                <div className={index.top}><LevelChart/></div>
                <div className={index.bottom}><Chart/></div>
            </div>   
            <div className={index.dasboardright}></div>
            <Overview/>
        </div>
    )
}



