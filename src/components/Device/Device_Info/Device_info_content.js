import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./device_info_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <a>Thông tin thiết bị</a>
                        </div>
                        <div className={style.bottom_content}>

                        </div>
                    </div>
                    <div className={style.bottom_container}>
                        <div className={style.bottom_content}>
                            <div className={style.middle_content}>
                                <div className={style.left_title}>
                                    <div className={style.username}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Mã thiết bị:</a>
                                            <a className={style.sub_title}>KIO_01</a>

                                        </div>
                                    </div>
                                    <div className={style.password}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Tên thiết bị:</a>
                                            <a className={style.sub_title}>kiosk</a>
                                            
                                        </div>
                                    </div>
                                    <div className={style.role}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Địa chỉ IP:</a>
                                            <a className={style.sub_title}>128.172.308</a>
                                        </div>
                                    </div>
                                    
                                </div>  
                                <div className={style.right_title}>
                                    <div className={style.username}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Loại thiết bị:</a>
                                            <a className={style.sub_title}>Kiosk</a>
                                        </div>
                                    </div>
                                    <div className={style.password}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Tên đăng nhập:</a>
                                            <a className={style.sub_title}>Linhkyo011</a>
                                        </div>
                                    </div>
                                    <div className={style.role}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Mật khẩu:</a>
                                            <a className={style.sub_title}>CMS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.role}>
                            <div className={style.avas}>
                                <a className={style.main_title}>Dịch vụ sử dụng</a><br/>
                                <a className={style.used_title}>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={style.add_device}>
                    <div className={style.total_add_device}>
                        <div className={`${style.add} fas fa-pen`}></div>
                        <div className={style.add_title}><a>Cập nhập thiết bị</a></div>
                    </div>
                </div>
            </div>
        );
    }
