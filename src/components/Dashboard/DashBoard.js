import { Menu } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import style from "./dashboard_style.module.css"
import img_user_account from "../../static/img/img_user_account.png"
import Dashboard_content from './DashBoard_content';
import OverViews from "./OverViews/OverViews";

export default function Dashboard() {
        const history = useHistory();
        return (
            // <div className={style.total_container}>
            //     <div className={style.container}>
            //         <div className={style.left_container}>
            //             <MenuBar/>
            //         </div>
            //         <div className={style.main_content}>
            //             <div className={style.main_title}>
            //                 <p> Thông tin cá nhân</p>
            //             </div>
            //             <div className={style.sub_title}>

            //             </div>
            //             <div className={style.statistic_table}>

            //             </div>
            //         </div>
            //     </div>
            // </div>
                <div className={style.container}>
                    <div className={style.left_container}>
                        <MenuBar/>
                    </div>   
                    <div className={style.right_container}>
                        <div className={style.overviews}>
                            <OverViews/>
                        </div>
                    </div>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <div className={style.left_title}>
                                <p> Thông tin cá nhân</p>
                            </div>
                            <div className={style.right_title}>
                                <div className={style.alarm_button}>
                                    <p className={`${style.alarm_button_icon} fas fa-bell`}></p>
                                    <div class={style.dropdown_content}>
                                        <p className={style.notification_title}>Thông Báo</p>
                                        <div className={style.noti_scroll}>
                                            <div className={style.notification_info}>
                                                <div>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thị Thùy Dung
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                                </div>
                                            </div>
                                            
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thiên Chinh
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thị Thùy Dung
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thiên Chinh
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thị Thùy Dung
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thiên Chinh
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.user_account}>
                                    <div>
                                        <img src={img_user_account} width={40} height={40}></img>
                                        <p>Xin chào <br/><b>Lê Quỳnh Ái Vân</b></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    <div className={style.bottom_container}>
                        <div className={style.dashboard_title}> 
                            <p className={style.tab_title}>Biểu đồ cấp số</p>
                        </div>
                        <div className={style.dashboard_content}>
                            <Dashboard_content/>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }