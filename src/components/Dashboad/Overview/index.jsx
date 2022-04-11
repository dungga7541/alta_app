import {useState} from "react";
import overview_style from "./Overview.module.css"
import Bellnotify from "../../Bellactive";
import pencentblue from "../../image/pencentblue.png"
import pencentgreen from "../../image/pencentgreen.png"
import pencentorange from "../../image/pencentorange.png"
import device_orange from "../../image/device_orange.svg" 
import service_blue from "../../image/service_blue.svg"
import level_green from "../../image/level_green.svg"
import DatePicker from 'sassy-datepicker';
function Overview(){
        const [date, setDate] = useState(new Date());
        const onChange = newDate => {

        setDate(newDate);
    };
    return(
        <div className={overview_style.dashboadright}>
            <div className={overview_style.bell}>
                <Bellnotify/>
            </div>
            <p className={overview_style.title}>Tổng quan</p>            
            <div className={overview_style.listcolurm}>
                <div className={overview_style.listdevice}>
                    <div className={overview_style.listdeviceleft}>
                        <img src={pencentorange} alt="pencentorange" className={overview_style.pencentorange}></img>
                        <div className={overview_style.listdevicemiddle}>
                            <p className={overview_style.number}>4.221</p>
                            <div className={overview_style.listdevicebottom}>
                                <img src={device_orange} alt="device_orange" className={overview_style.pencentimg}></img>
                                <p className={overview_style.listtitlebottom}>Thiết bị</p>
                            </div>
                        </div>
                    </div>
                    <div className={overview_style.listdeviceright}>
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"orange"}} >.</div>
                            <div className={overview_style.rowmiddle} >Đang hoạt động</div>
                            <div className={overview_style.rowright} >3.799</div>
                        </div>
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"black"}}>.</div>
                            <div className={overview_style.rowmiddle} >Ngưng hoạt động</div>
                            <div className={overview_style.rowright} >422</div>
                        </div>
                    </div>
                </div>
                <div className={overview_style.listdevice}>
                    <div className={overview_style.listdeviceleft}>
                        <img src={pencentblue} alt="pencentblue" className={overview_style.pencentblue}></img>
                        <div className={overview_style.listdevicemiddle}>
                            <p className={overview_style.number}>276</p>
                            <div className={overview_style.listdevicebottom}>
                                <img src={service_blue} alt="service_blue" className={overview_style.pencentimg}></img>
                                <p className={overview_style.listtitlebottom} style={{color:"blue"}}>Dịch vụ</p>
                            </div>
                        </div>
                    </div>
                    <div className={overview_style.listdeviceright}>
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"blue"}}>.</div>
                            <div className={overview_style.rowmiddle} >Đang hoạt động</div>
                            <div className={overview_style.rowright} >210</div>
                        </div>
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"black"}}>.</div>
                            <div className={overview_style.rowmiddle} >Ngưng hoạt động</div>
                            <div className={overview_style.rowright} >66</div>
                        </div>
                    </div>
                </div>
                <div className={overview_style.listdevice}>
                    <div className={overview_style.listdeviceleft}>
                        <img src={pencentgreen} alt="pencentgreen" className={overview_style.pencentgreen}></img>
                        <div className={overview_style.listdevicemiddle}>
                            <p className={overview_style.number}>4.221</p>
                            <div className={overview_style.listdevicebottom}>
                                <img src={level_green} alt="level_green" className={overview_style.pencentimg}></img>
                                <p className={overview_style.listtitlebottom} style={{color:"green"}}>Cấp số</p>
                            </div>
                        </div>
                    </div>
                    <div className={overview_style.listdeviceright}>
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"green"}}>.</div>
                            <div className={overview_style.rowmiddle} >Đã sử dụng  </div>
                            <div className={overview_style.rowright} >3.721</div>
                        </div>
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"pink"}}>.</div>
                            <div className={overview_style.rowmiddle} >Đang chờ</div>
                            <div className={overview_style.rowright} >486</div>
                        </div>
                        
                        <div className={overview_style.listdevicertop}>
                            <div className={overview_style.rowleft} style={{color:"#F178B6"}}>.</div>
                            <div className={overview_style.rowmiddle} >Bỏ qua</div>
                            <div className={overview_style.rowright} >32</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={overview_style.calendar}>
            <DatePicker className="Datapicker" onChange={onChange} selected={date} />
            </div>
        </div>
    )
}
export default Overview;