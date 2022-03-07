import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./service_update_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <a>Thông tin dịch vụ</a>
                        </div>
                        <div className={style.bottom_content}>
                            <div className={style.middle_title}>
                                <div className={style.abcs}>
                                    <div className={style.main_title}>
                                        <p>Mã dịch vụ :<span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='201'/>
                                    </div>
                                </div>
                                <div className={style.abcsa}>
                                    <div className={style.main_title}>
                                        <p>Tên dịch vụ :<span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Khám tim mạch'/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.object}>
                                <div className={style.username}>
                                    <div className={style.main_title}>
                                        <p>Mô tả dịch vụ:</p>
                                    </div>
                                    <div className={style.textarea}>
                                        <div className={style.input_title}>
                                            <input placeholder='Mô tả dịch vụ'/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={style.last}>
                            
                        </div>
                    </div>
                    <div className={style.bottom_container}>
                        <div className={style.top_content}>
                            <a>Quy tắc cấp số</a>
                        </div>
                        <div className={style.rule_service_content}>
                            <div className={style.rule_service_main_content}>
                                <div className={style.left_rule_service}>
                                    <div className={style.checkbox}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    </div>
                                    <div className={style.xyz}>
                                        <a>Tăng tự động từ:</a>
                                    </div>
                                    <div className={style.input_titless}>
                                        <input placeholder='0001'/>
                                    </div>
                                    <div className={style.xyz}>
                                        <a>đến</a>
                                    </div>
                                    <div className={style.input_titless}>
                                        <input placeholder='9999'/>
                                    </div>
                                </div>
                                <div className={style.middle_left_rule_service}>
                                    <div className={style.checkbox}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    </div>
                                    <div className={style.xyz}>
                                        <a>Prefix:</a>
                                    </div>
                                    <div className={style.input_titless}>
                                        <input placeholder='0001'/>
                                    </div>
                                </div>
                                <div className={style.middle_right_rule_service}>
                                    <div className={style.checkbox}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    </div>
                                    <div className={style.xyz}>
                                        <a>Surfix:</a>
                                    </div>
                                    <div className={style.input_titless}>
                                        <input placeholder='0001'/>
                                    </div>
                                </div>
                                <div className={style.right_rule_service}>
                                    <div className={style.checkbox}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <span class="checkmark"></span>
                                    </div>
                                    <div className={style.xyz}>
                                        <a>Reset mỗi ngày</a>
                                    </div>
                                </div>
                                <div className={style.bottom_rule_service}>
                                    <span style={{color: "red"}}>*</span>
                                    <a> Là trường thông tin bắt buộc</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.actions}>
                    <div className={style.left_btn}>
                        <button type='submit' className={style.cancel_button} onClick={() => history.push('/service')}>Hủy bỏ</button>
                    </div>
                    <div className={style.right_btn}>
                        <button type='submit' className={style.add_device_button} onClick={() => history.push('/service')}>Cập nhập</button>
                    </div>
                </div>
            </div>
        );
    }
