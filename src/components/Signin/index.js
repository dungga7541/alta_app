import React, { Component } from 'react';
import Forgot_PW from './Forgot_PW';
import Signin from "./Signin";
import Info from "./Info";
import Reset_PW from "./Reset_PW";
import Device from "../Device/Device";
import Device_info from "../Device/Device_Info/Device_info";
import Device_add from "../Device/Device_Add/Device_add";
import Device_update from "../Device/Device_Update/Device_update";
import DashBoard from "../Dashboard/DashBoard";
import Service from "../Service/Service";
import Service_add from "../Service/Service_Add/Service_add";
import Service_update from "../Service/Service_Update/Service_update";
import Service_info from "../Service/Service_Info/Service_info";
import Level_Management from "../Level_management/Level_management.js";
import Level_Management_Info from "../Level_management/Level_management_Info/Level_management_info.js";
import Level_Management_Add from "../Level_management/Level_management_Add/Level_management_add.js";
import Report from "../Report/Report";
import Settings from "../Settings/Setting";
import Settings_Add from "../Settings/Role/Setting_Add/Setting_Add";
import Settings_Update from "../Settings/Role/Setting_Update/Setting_Update";
import Settings_Account_Info from "../Settings/Accounts/Account_Info";
import Settings_Account_Add from "../Settings/Accounts/Account_Add/Account_Add.js";
import Settings_Account_Update from "../Settings/Accounts/Account_Update/Account_Update.js";
import Activity_Log from "../Settings/Activity_log/Activity_Log";


import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import routes from "../routes";

class index extends Component {
    render() {
        return (    
            <div className='App'>
                <div className='container'>
                    <Router>
                        <Switch>
                            <Route path="/signin">
                                <Signin />
                            </Route>
                            <Route path="/info">
                                <Info />
                            </Route>
                            <Route path="/forgot_pw">
                                <Forgot_PW />
                            </Route>
                            <Route path="/reset_pw">
                                <Reset_PW />
                            </Route>
                            <Route path="/dashboard">
                                <DashBoard />
                            </Route>
                            <Route path="/device">
                                <Device />
                            </Route>
                            <Route path="/device_info">
                                <Device_info/>
                            </Route>
                            <Route path="/device_add">
                                <Device_add/>
                            </Route>
                            <Route path="/device_update">
                                <Device_update/>
                            </Route>
                            <Route path="/service">
                                <Service/>
                            </Route>
                            <Route path="/service_add">
                                <Service_add/>
                            </Route>
                            <Route path="/service_update">
                                <Service_update/>
                            </Route>
                            <Route path="/service_info">
                                <Service_info/>
                            </Route>
                            <Route path="/level_management">
                                <Level_Management/>
                            </Route>
                            <Route path="/level_management_info">
                                <Level_Management_Info/>
                            </Route>
                            <Route path="/level_management_add">
                                <Level_Management_Add/>
                            </Route>
                            <Route path="/report">
                                <Report/>
                            </Route>
                            <Route path="/settings">
                                <Settings/>
                            </Route>
                            <Route path="/settings_add">
                                <Settings_Add/>
                            </Route>
                            <Route path="/settings_update">
                                <Settings_Update/>
                            </Route>
                            <Route path="/settings_account_info">
                                <Settings_Account_Info/>
                            </Route>
                            <Route path="/settings_account_add">
                                <Settings_Account_Add/>
                            </Route>
                            <Route path="/settings_account_update">
                                <Settings_Account_Update/>
                            </Route>
                            <Route path="/activity_log">
                                <Activity_Log/>
                            </Route>
                        </Switch>
                    </Router>
                            {/* <Route path="/signin" component={Signin}>Trang Đăng Nhập</Route> */}
                    
                </div>
            </div>
        );
    }
}

export default index;