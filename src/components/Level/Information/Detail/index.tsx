import detaillevel from './Detail.module.css'
import Bellactive from "../../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../../image/gotoright.svg";
import blue from '../../../image/blue.svg'
import black from "../../../image/black.svg"
import red from '../../../image/red.svg'
import back from "../../../image/back.svg"
import {fetchData} from '../../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import {useEffect} from 'react';
function Detail({dataTable,fetchData}:any){
    useEffect(() => {
        fetchData();
    }, []);
    const ServiceWaitPoint = ()=>{
        return (
                <><span className="blue">
                <img src={blue}></img>
                </span><span>Đang chờ</span></>
        )
    }  
    
    
    const ServiceUsedPoint = ()=>{
    return (
            <><span className="black">
                <img src={black} ></img>
            </span><span>Đã sử dụng</span></>
        )
    }  
    const ServiceUnactivePoint = ()=>{
        return (  <><span className="red">    
            <img src={red}></img>
            </span><span>Bỏ qua</span></>
        ) 
    }
    const dataNumberLevel = dataTable.dataSend
    return(
        <div className={detaillevel.detail}>
            <div className={detaillevel.info}>
                <div className={detaillevel.infolist}>
                    <p className={detaillevel.title}>
                        Thiết bị 
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={detaillevel.levelgoto}></img>
                    <p className={detaillevel.title}>
                        Danh sách cấp số
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={detaillevel.levelgoto}></img>
                    <p className={detaillevel.detaillist }>
                        Chi tiết 
                    </p>
                </div>
                <div className={detaillevel.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={detaillevel.container}>
                <div className={detaillevel.listtitle}>
                    Quản lý cấp số
                </div>
                <div className={detaillevel.newitem}>
                    <div className={detaillevel.informationlevel}>
                        Thông tin cấp số
                    </div>
                    <div className={detaillevel.listitem}>
                        <div className={detaillevel.id}>Họ tên:</div>
                        <div className={detaillevel.name}>{dataNumberLevel.name}</div>
                        <div className={detaillevel.adress}>Nguồn cấp:</div>
                        <div className={detaillevel.source}>{dataNumberLevel.sourse}</div>
                        <div className={detaillevel.id}>Tên dịch vụ:</div>
                        <div className={detaillevel.name}>{dataNumberLevel.service}</div>
                        <div className={detaillevel.adress}>Trạng thái:</div>
                        <div className={detaillevel.source}>
                            {dataNumberLevel.status == 'Đang chờ' && <ServiceWaitPoint/>}
                            {dataNumberLevel.status == 'Đã sử dụng' && <ServiceUsedPoint/>}
                            {dataNumberLevel.status == 'Bỏ qua' && <ServiceUnactivePoint/>}</div>
                        <div className={detaillevel.id}>Số thứ tự:</div>
                        <div className={detaillevel.name}>{dataNumberLevel.STT}</div>
                        <div className={detaillevel.adress}>Số điện thoại:</div>
                        <div className={detaillevel.source}>0948523623</div>
                        <div className={detaillevel.id}>Thời gian cấp:</div>
                        <div className={detaillevel.name}>{dataNumberLevel.time1}</div>
                        <div className={detaillevel.adress}>Địa chỉ Email:</div>
                        <div className={detaillevel.source}>nguyendung@gmail.com</div>
                        <div className={detaillevel.id}>Hạn sử dụng:</div>
                        <div className={detaillevel.name}>{dataNumberLevel.time2}</div>
                    </div>
                </div> 
                <Link to ="/level/">
                <div className={detaillevel.add}>
                        <div className={detaillevel.addback}>
                                <img src={back} alt="" />  
                        </div>
                        <span className={detaillevel.backtitle}>Quay lại</span>
                </div>
                </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Detail)