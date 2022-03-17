import React, { Component, useState  } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./level_management_add_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        const [isOpen, setIsOpen] = useState(false);
 
        const togglePopup = () => {
          setIsOpen(!isOpen);
        }
       
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <a>CẤP SỐ MỚI</a>
                        </div>
                        <div className={style.bottom_content}>
                            <a>Dịch vụ khách hàng lựa chọn</a>
                        </div>
                    </div>
                    <div className={style.bottom_container}>
                        <div className={style.bottom_content}>
                            <div className={style.middle_content}>
                                <div className={style.middle_title}>
                                    <div className={style.combobox_content}>
                                        <form >
                                            <select className={style.combobox_content_select}>
                                                <option className={style.combobox_content_option} value="Tất cả" >Chọn dịch vụ
                                                </option>
                                                <option className={style.combobox_content_option} type="button" value="Tất cả" onClick={togglePopup}>Khám tim mạch</option>
                                                <option className={style.combobox_content_option} value="Đã hoàn thành" >Khám sản - Phụ khoa</option>
                                                <option className={style.combobox_content_option} value="Đã thực hiện">Khám răng hàm mặt</option>
                                                <option className={style.combobox_content_option} value="Vắng">Khám tai mũi họng</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>  
                                <div className={style.actions}>
                                    <div className={style.left_btn}>
                                        <button type='submit' className={style.cancel_button} onClick={() => history.push('/level_management')}>Hủy bỏ</button>
                                    </div>
                                    <div className={style.right_btn}>
                                        <button type='submit' className={style.add_device_button} onClick={() => history.push('/service')}>In số</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
