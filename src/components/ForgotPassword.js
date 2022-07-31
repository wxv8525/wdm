/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */



import React from "react";
import './css/Login.css'

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curpage: "about", login: false };
    }

    changePage = (p) => {
        this.setState({
            curpage: p,
        })
    }

    changeToLogin = () => {
        console.log("in");
        this.setState({
            login:true,
            curpage:"dash"
        })
    }

    changeToLogout = () => {
        console.log("out");
        this.setState({
            login:false,
            curpage:"home"
        })
    }


    render() {
        return (
            <div className="form-container">
               <form className="form-box">
                    <input className="text-box" type="text" placeholder="Email"/><br/>
                    <button className="normal-button">Go</button>
               </form>
            </div>
        );
    }
}
export default ForgotPassword;