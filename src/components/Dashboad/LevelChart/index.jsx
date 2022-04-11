import levelchart_style from './LevelChart.module.css'
import  dashboadgreen from "../../image/dashboadgreen.png"
import  dashboadblue from "../../image/dashboadblue.png"
import  dashboadred  from "../../image/dashboadred.png"
import  dashboadorange from "../../image/dashboadorange.png"
import  goup from "../../image/goup.svg"
import  godown from "../../image/godown.svg"


function LevelChart(){
    return(
        <div className={levelchart_style.dashboad}>
            <div className={levelchart_style.container}>
                <div className={levelchart_style.title}>
                    Dashboard
                </div>
                <div className={levelchart_style.levelchart}>
                    Biểu đồ cấp số
                </div>     
            <div className={levelchart_style.chart}>
                <div className={levelchart_style.item}>
                    <div className={levelchart_style.itemtop}>
                        <img src={dashboadblue} alt="dashboadblue" className={dashboadblue}></img>
                        <p className={levelchart_style.itemtitle} >Số thứ tự đã cấp</p>
                    </div>
                    <div className={levelchart_style.itembottom}>
                        <h2 className={levelchart_style.number}>4.221</h2>
                        <div className={levelchart_style.precentup}>
                            <div className={levelchart_style.up}>
                            <img src={goup} alt="goup" ></img>
                            </div>
                            <div className={levelchart_style.precent}>32.41%</div>
                        </div>
                    </div>
                </div>
                <div className={levelchart_style.item}>
                    <div className={levelchart_style.itemtop}>
                        <img src={dashboadgreen} alt="dashboadgreen" className={dashboadgreen}></img>
                        <p className={levelchart_style.itemtitle}>Số thứ tự đã sử dụng</p>
                    </div>
                    <div className={levelchart_style.itembottom}>
                        <h2 className={levelchart_style.number}>3.721</h2>
                        <div className={levelchart_style.precentdown}>
                            <div className={levelchart_style.down}>
                            <img src={godown} alt="godown" ></img>
                            </div>
                            <div className={levelchart_style.precent}>32.41%</div>
                        </div>
                    </div>
                </div>
                <div className={levelchart_style.item}>
                    <div className={levelchart_style.itemtop}>
                        <img src={dashboadorange} alt="dashboadorange" className={dashboadorange}></img>
                        <p className={levelchart_style.itemtitle} >Số thứ tự đang chờ</p>
                    </div>
                    <div className={levelchart_style.itembottom}>
                        <h2 className={levelchart_style.number}>468</h2>
                        <div className={levelchart_style.precentup}>
                            <div className={levelchart_style.up}>
                            <img src={goup} alt="goup" ></img>
                            </div>
                            <div className={levelchart_style.precent}>56,41%</div>
                        </div>
                    </div>
                </div>
                <div className={levelchart_style.item}>
                    <div className={levelchart_style.itemtop}>
                        <img src={dashboadred} alt="dashboadred" className={dashboadred}></img>
                        <p className={levelchart_style.itemtitle} >Số thứ tự đã bỏ qua</p>
                    </div>
                    <div className={levelchart_style.itembottom}>
                        <h2 className={levelchart_style.number}>32</h2>
                        <div className={levelchart_style.precentdown}>
                            <div className={levelchart_style.down}>
                            <img src={godown} alt="godown" ></img>
                            </div>
                            <div className={levelchart_style.precent}>22,41%</div>
                        </div>
                    </div>
                </div>
            </div>                 
        </div>
    </div>
    )
}

export default LevelChart;