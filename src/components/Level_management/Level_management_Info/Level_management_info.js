import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuBar from '../../MenuBar/MenuBar';
import style from "./level_management_info_style.module.css"
import img_user_account from "../../../static/img/img_user_account.png"
import Level_management_info_content from '../Level_management_Info/Level_management_info_content';

export default function Device() {
        const history = useHistory();
        return (
                <div className={style.container}>
                    <div className={style.left_container}>
                        <MenuBar/>
                    </div>   
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <div className={style.left_title}>
                                <p><a className={style.top_main_title}>Thiết bị > Danh sách cấp số > </a> Chi tiết</p>
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
                                </div>
                            </div>
                        </div>
                    <div>
                    <div className={style.bottom_container}>
                        <div className={style.dashboard_title}> 
                            <p className={style.tab_title}>Quản lý cấp số</p>
                        </div>
                        <div className={style.dashboard_content}>
                            <Level_management_info_content/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }