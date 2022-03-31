import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./setting_update_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <a>Thông tin vai trò</a>
                        </div>
                        <div className={style.bottom_content}>
                            <div className={style.middle_title}>
                                <div className={style.abcs}>
                                    <div className={style.main_title}>
                                        <p>Tên dịch vụ :<span style={{color: "red"}}>*</span></p>
                                    </div>
                                    <div className={style.input_title}>
                                        <input placeholder='Nhập tên vai trò'/>
                                    </div>
                                </div>
                                <div className={style.object}>
                                    <div className={style.username}>
                                        <div className={style.main_title}>
                                            <p>Mô tả:</p>
                                        </div>
                                        <div className={style.textarea}>
                                            <div className={style.input_title}>
                                                <input placeholder='Nhập mô tả'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.sub_title}>
                                        <p><span style={{color: "red"}}>*</span>Là trường thông tin bắt buộc</p>
                                    </div>
                                </div>
                                </div>
                                    <div className={style.right_title}>
                                        <div className={style.abcs}>
                                            <div className={style.main_title}>
                                                <p>Phân quyền chức năng<span style={{color: "red"}}>*</span></p>
                                            </div>
                                        </div>
                                        <div className={style.right_content}>
                                            <div className={style.top_content}>
                                                <a>Nhóm chức năng A</a>
                                            </div>
                                            <div className={style.rule_service_main_content}>
                                                <div className={style.left_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Tất cả</a>
                                                    </div>
                                                </div>
                                                <div className={style.middle_left_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Chức năng x</a>
                                                    </div>
                                                </div>
                                                <div className={style.middle_right_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Chức năng y</a>
                                                    </div>
                                                </div>
                                                <div className={style.right_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Chức năng z</a>
                                                    </div>
                                                </div>
                                        
                                            </div>
                                            <div className={style.top_content}>
                                                <a>Nhóm chức năng B</a>
                                            </div>
                                            <div className={style.rule_service_main_content}>
                                                <div className={style.left_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Tất cả</a>
                                                    </div>
                                                </div>
                                                <div className={style.middle_left_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Chức năng x</a>
                                                    </div>
                                                </div>
                                                <div className={style.middle_right_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Chức năng y</a>
                                                    </div>
                                                </div>
                                                <div className={style.right_rule_service}>
                                                    <div className={style.checkbox}>
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    </div>
                                                    <div className={style.xyz}>
                                                        <a>Chức năng z</a>
                                                    </div>
                                                </div>
                                        
                                            </div>
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
                        <button type='submit' className={style.add_device_button} onClick={() => history.push('/service')}>Cập nhật</button>
                    </div>
                </div>
            </div>
        );
    }
