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
                        </Switch>
                    </Router>
                            {/* <Route path="/signin" component={Signin}>Trang Đăng Nhập</Route> */}
                    
                </div>
            </div>
        );
    }
}

export default index;