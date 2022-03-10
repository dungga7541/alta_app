import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./device_add_content_style.module.css";
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
                                        <p>Mã thiết bị:</p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập mã thiết bị'/>
                                    </div>
                                </div>
                                <div className={style.abcsa}>
                                    <div className={style.main_title}>
                                        <p>Tên thiết bị:</p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập tên thiết bị'/>
                                    </div>
                                </div>
                                <div className={style.abcsd}>
                                    <div className={style.main_title}>
                                        <p>Địa chỉ IP:</p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập địa chỉ IP'/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.object}>
                                <div className={style.username}>
                                    <div className={style.main_title}>
                                        <p>Loại thiết bị:</p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Chọn loại thiết bị'/>
                                    </div>
                                </div>
                                <div className={style.user}>
                                    <div className={style.main_title}>
                                        <p>Tên đăng nhập:</p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập tài khoản'/>
                                    </div>
                                </div>
                                <div className={style.users}>
                                    <div className={style.main_title}>
                                        <p>Mật khẩu</p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập mật khẩu'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.last}>
                            <div className={style.main_title}>
                                <p>Dịch vụ sử dụng</p>
                            </div>
                            <div className={style.input_title_special}>
                                <input placeholder='Nhập dịch vụ sử dụng'/>
                            </div>
                            <div className={style.sub_title}>
                                <p>Là trường thông tin bắt buộc</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.actions}>
                    <div className={style.left_btn}>
                        <button type='submit' className={style.cancel_button}>Hủy bỏ</button>
                    </div>
                    <div className={style.right_btn}>
                        <button type='submit' className={style.add_device_button}>Thêm thiết bị</button>
                    </div>
                </div>
            </div>
        );
    }
