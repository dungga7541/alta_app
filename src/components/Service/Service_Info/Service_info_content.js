import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./service_info_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.left_container}>
                        <div className={style.left_content}>
                            <div className={style.left_title}>
                                <a>Thông tin dịch vụ</a>
                            </div>
                            <div className={style.top_content}>
                                <div>
                                    <a className={style.main_title}>Mã dịch vụ: </a>
                                    <a>201</a>
                                </div>
                                <div>
                                    <a className={style.main_title}>Tên dịch vụ: </a>
                                    <a>Khám tim mạch</a>
                                </div>
                                <div>
                                    <a className={style.main_title}>Mô tả:</a>
                                    <a>Chuyên các bệnh lý về tim</a>
                                </div>
                            </div>
                            <div className={style.left_title}>
                                <a>Quy tắc cấp số</a>
                            </div>
                            <div className={style.top_content}>
                                <div className={style.left_rule_service}>
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
                                    <div className={style.xyz}>
                                        <a>Prefix:</a>
                                    </div>
                                    <div className={style.input_titless}>
                                        <input placeholder='0001'/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.obs}>
                                <a className={style.main_title}>Reset mỗi ngày</a>
                            </div>
                            <div className={style.obs}>
                                <a className={style.main_title}>Ví dụ: 201-2001</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.right_container}>
                        <div className={style.right_content}>
                            <div className={style.right_title}>
                            </div>
                            <div className={style.top_container}>
                    <div className={style.top_content_1}>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Trạng thái hoạt động</a>
                            </div>
                            <div className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Đã hoàn thành">Đã hoàn thành</option>
                                        <option className={style.combobox_content_option} value="Đã thực hiện">Đã thực hiện</option>
                                        <option className={style.combobox_content_option} value="Vắng">Vắng</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className={style.combobox_title_1}>
                                <a>Từ khóa</a>
                            </div>
                            <div className={style.combobox_content}>
                                <div className={style.search_bar}>
                                    <form action="/action_page.php">
                                    <input className={style.combobox_content_select} type="text" placeholder="Nhập từ khóa " name="search"/>
                                    <button className={style.search_icon} type="submit"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom_container}>
                    <table className={style.table_device}>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Trạng thái</th>
                        </tr>
                        <tr>
                            <td>2010001</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Đã hoàn thành</td>  

                        </tr>   
                        <tr>
                            <td>2010002</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Đã hoàn thành</td>
                        </tr>
                        <tr>
                            <td>2010003</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Đang thực hiện</td>
                        </tr>
                        <tr>
                            <td>2010004</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Vắng</td>
                        </tr>
                        <tr>
                            <td>2010005</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Đã hoàn thành</td>  
                        </tr>
                        <tr>
                            <td>2010006</td>    
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Đang thực hiện</td>
                        </tr>
                        <tr>
                            <td>2010007</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Vắng</td>
                        </tr>
                        <tr>
                            <td>2010007</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Đã hoàn thành</td>
                        </tr>
                    </table>
                    <div>
                        <div className={style.nextpage}>
                            <a className={`${style.caret_left} fas fa-caret-left`}></a>
                            <a className={style.page_active}>1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a>5</a>
                            <a>...</a>
                            <a>10</a>
                            <a className={`${style.caret_right} fas fa-caret-right`}></a>
                        </div>
                    </div>
                    
                </div>
                        </div>
                    </div>
                    <div className={style.add_device}>
                        <div className={style.total_add_device}>
                            <div className={`${style.add} fas fa-pencil-alt`} onClick={() => history.push('/service_update')}></div>
                            <div className={style.add_title}><a>Cập nhập danh sách</a></div>
                        </div>
                        <div className={style.total_add_device}>
                            <div className={`${style.add} fas fa-undo`} onClick={() => history.push('/service')}></div>
                            <div className={style.add_title}><a>Quay lại</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
