import userdiary from './Diaryuser.module.css'
import Bellactive from "../Bellactive";
import diarygoto from "../image/gotoright.svg";
import goright from "../image/goright.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../image/fi_search.svg"
import {useState, useEffect} from 'react';
import Page from "../Page";
import {fetchData} from '../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
function Diaryuser({dataTable,fetchData }:any){
    useEffect(() => {
        fetchData();
    }, []);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [search , setSearch] = useState('')
    const dataUserDiary = dataTable.dataUserDiary
    return(
        <div className={userdiary.diary}>
            <div className={userdiary.diaryinfo}>
                <div className={userdiary.diaryinfolist}>
                    <p className={userdiary.diarytitle}>
                        Cài đặt hệ thống
                    </p>
                        <img src={diarygoto} alt="diarygoto" className={userdiary.diarygoto}></img>
                    <p className={userdiary.diarylist }>
                        Nhật ký hoạt động
                    </p>
                </div>
                <div className={userdiary.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={userdiary.diarycontainer}>
                <div className={userdiary.diarylistdrow}>
                    <div className={userdiary.diaryitem}>
                        <div className={userdiary.diaryname}>Chọn thời gian</div>
                            <div className={userdiary.diarydrowcalendar}>
                                {/* <img src={calendar} alt=''></img> */}
                                <DatePicker 
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                                <img src={goright} alt="goright" className={userdiary.goright}></img>    
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                    </div>
                    <div className={userdiary.diaryitem}>
                        <div className={userdiary.diaryname}>Từ khoá</div>
                            <div className={userdiary.diarydrow}>
                            <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <div className={userdiary.fi_search}>
                                <img src={fi_search} alt="" />
                            </div>
                            </div>
                    </div>
                </div>
            
            
                <div className={userdiary.tablelistitem}>
                    <div className={userdiary.diarytable}>
                        <div className={userdiary.diaryitemname} style={{width:"350px"}}>
                            <p className={userdiary.diaryitemnametitle}> Tên đăng nhập </p>    
                        </div>
                        <div className={userdiary.diaryitemname} style={{width:"380px"}}>
                            <p className={userdiary.diaryitemnametitle}> Thời gian tác động </p>    
                        </div>
                        <div className={userdiary.diaryitemname} style={{width:"350px"}}>
                            <p className={userdiary.diaryitemnametitle}> IP thực hiện </p>    
                        </div>
                        <div className={userdiary.diaryitemname} style={{width:"515px"}}>
                            <p className={userdiary.diaryitemnametitle}> Thao tác thực hiện </p>    
                        </div>
                    </div>
                    {
                        dataUserDiary.map ( (item:any,index:any)=>
                    <div className={userdiary.diarytablelist} key={index}>
                        <div className={userdiary.diaryitemnameid} style={{width:"350px"}}>
                            <p className={userdiary.diaryitemnametitleid}> {item.name} </p>    
                        </div>
                        <div className={userdiary.diaryitemname} style={{width:"380px"}}>
                            <p className={userdiary.diaryitemnametitleid}>{item.time}</p>    
                        </div>
                        <div className={userdiary.diaryitemname} style={{width:"350px"}}>
                            <p className={userdiary.diaryitemnametitleid}> {item.id} </p>    
                        </div>
                        <div className={userdiary.diaryitemname} style={{width:"515px"}}>
                        <p className={userdiary.diaryitemnametitleid}> {item.update} </p>    
                        </div>
                    </div>
                    )}

                </div>
            </div>
            <div className={userdiary.chosepape}>
            <Page/>
            </div>    
        </div>
    )
}
const mapStateToProps = (state:any) =>{
        return {
            dataTable:state.dataAlta
        }
    }
const mapDispatchToProps = (dispatch:any) =>{
        return {
            fetchData: ()=>  dispatch(fetchData()),
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Diaryuser)
