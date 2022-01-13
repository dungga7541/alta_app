import React, { Component } from 'react';
import './style/forgot_pw_style.css';
class Forgot_PW extends Component {
    render() {
        return (
            <div className='container'>
                <div className='left-container'>
                    <div className='top-content'>
                        <div className='logo_alta'>
                            <img src={require('./style/logo_alta.png')} />
                        </div>
                    </div>
                    <div className='middle-content'>
                        <div className='forgot-pw'>
                            <div className='forgot-title'>
                                <p>Đặt lại mật khẩu</p>
                            </div>
                            <div className='forgot-description'>
                                <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                            </div>
                            <div className='forgot-input'>
                                <input />
                            </div>
                            <div className='forgot-actions'>
                                <div>
                                    <button>Hủy</button>
                                </div>
                                <div>
                                    <button>Tiếp tục</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <img className='img-bg-gruop1' src={require('./style/bg_gruop1.png')} />
                </div>
            </div>
        );
    }
}

export default Forgot_PW;