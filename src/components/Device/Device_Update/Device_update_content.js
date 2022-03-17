import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./device_update_content_style.module.css";
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
                            <div className={style.middle_title}>
                                <div className={style.abcs}>
                                    <div className={style.main_title}>
                                        <p>Mã thiết bị : <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='KIO_01'/>
                                    </div>
                                </div>
                                <div className={style.abcsa}>
                                    <div className={style.main_title}>
                                        <p>Tên thiết bị : <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Kiosk'/>
                                    </div>
                                </div>
                                <div className={style.abcsd}>
                                    <div className={style.main_title}>
                                        <p>Địa chỉ IP : <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='128.172.308'/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.object}>
                                <div className={style.username}>
                                    <div className={style.main_title}>
                                        <p>Loại thiết bị : <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Kiosk   '/>
                                    </div>
                                </div>
                                <div className={style.user}>
                                    <div className={style.main_title}>
                                        <p>Tên đăng nhập : <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Linhkyo011'/>
                                    </div>
                                </div>
                                <div className={style.users}>
                                    <div className={style.main_title}>
                                        <p>Mật khẩu : <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='CMS'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.last}>
                            <div className={style.main_title}>
                                <p>Dịch vụ sử dụng : <span style={{color: "red"}}>*</span></p>
                            </div>
                            <div className={style.input_title_special}>
                                <div className={style.textarea}>
                                    <div className={style.tag_textarea}>
                                        <a>Phòng khám tim mạch <a className={style.x_button}>X</a></a>
                                    </div>
                                    <div className={style.tag_textarea}>
                                        <a>Khám sản phụ khoa <a className={style.x_button}>X</a></a>
                                    </div>
                                    <div className={style.tag_textarea}>
                                        <a>Khám răng hàm mặt <a className={style.x_button}>X</a></a>
                                    </div>
                                    <div className={style.tag_textarea}>
                                        <a>Khám tai mũi họng <a className={style.x_button}>X</a></a>
                                    </div>
                                    <div className={style.tag_textarea}>
                                        <a>Khám hô hấp <a className={style.x_button}>X</a></a>
                                    </div>
                                    <div className={style.tag_textarea}>
                                        <a>Khám tổng quát <a className={style.x_button}>X</a></a>
                                    </div>
                                </div>
                            </div>
                            <div className={style.sub_title}>
                                <p><span style={{color: "red"}}>*</span>Là trường thông tin bắt buộc</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.actions}>
                    <div className={style.left_btn}>
                        <button type='submit' className={style.cancel_button} >Hủy bỏ</button>
                    </div>
                    <div className={style.right_btn}>
                        <button type='submit' className={style.add_device_button}>Cập nhập</button>
                    </div>
                </div>
            </div>
        );
    }
