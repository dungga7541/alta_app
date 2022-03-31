import React, { Component ,useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./account_update_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const [passwordShown, setPasswordShown] = useState(false);
        const history = useHistory();
        const togglePassword = () => {
            setPasswordShown(!passwordShown);
        };
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <a>Thông tin tài khoản</a>
                        </div>
                        <div className={style.bottom_content}>
                        </div>
                    </div>
                    <div className={style.bottom_container}>
                        <div className={style.bottom_content}>
                            <div className={style.middle_title}>
                                <div className={style.abcs}>
                                    <div className={style.main_title}>
                                        <p>Họ tên <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập họ tên'/>
                                    </div>
                                </div>
                                <div className={style.abcsa}>
                                    <div className={style.main_title}>
                                        <p>Số điện thoại <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập số điện thoại'/>
                                    </div>
                                </div>
                                <div className={style.abcsd}>
                                    <div className={style.main_title}>
                                        <p>Email <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập email'/>
                                    </div>
                                </div>
                                <div className={style.combobox_content}>
                                    <div className={style.main_title}>
                                        <p>Vai trò <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <form >
                                        <select className={style.combobox_content_select}>
                                            <option className={style.combobox_content_option} value="Tất cả">Kế toán</option>
                                            <option className={style.combobox_content_option} value="Ngưng hoạt động">Quản lý</option>
                                            <option className={style.combobox_content_option} value="Hoạt Động">Admin</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className={style.object}>
                                <div className={style.username}>
                                    <div className={style.main_title}>
                                        <p>Tên đăng nhập <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập tên đăng nhập'/>
                                    </div>
                                </div>
                                <div className={style.user}>
                                    <div className={style.main_title}>
                                        <p>Mật khẩu <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input type={passwordShown ? "text" : "password"} placeholder='Nhập mật khẩu'/><p onClick={togglePassword} className={`${style.eye_icon} fas fa-eye-slash`}></p>
                                    </div>
                                </div>
                                <div className={style.users}>
                                    <div className={style.main_title}>
                                        <p>Nhập lại mật khẩu <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input type={passwordShown ? "text" : "password"} placeholder='Nhập mật khẩu'/><p onClick={togglePassword} className={`${style.eye_icon} fas fa-eye-slash`}></p>
                                    </div>
                                </div>
                                <div className={style.combobox_content}>
                                    <div className={style.main_title}>
                                        <p>Tình trạng <span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <form >
                                        <select className={style.combobox_content_select}>
                                            <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                            <option className={style.combobox_content_option} value="Ngưng hoạt động">Ngưng hoạt động</option>
                                            <option className={style.combobox_content_option} value="Hoạt Động">Hoạt Động</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className={style.sub_title}>
                            <p><span style={{color: "red"}}>*</span> Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                </div>
                <div className={style.actions}>
                    <div className={style.left_btn}>
                        <button type='submit' className={style.cancel_button}>Hủy bỏ</button>
                    </div>
                    <div className={style.right_btn}>
                        <button type='submit' className={style.add_device_button}>Cập nhập</button>
                    </div>
                </div>
            </div>
        );
    }
