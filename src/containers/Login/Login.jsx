import { styled } from "styled-components"

const LoginStyled = styled.div`
    *{

margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins";
}
body {
/* display: block; */
background: #4158D0;
/* background-image: linear-gradient(43deg, #5c6ec7 0%, #602af5 46%, #072074 100%); */
;
/* position: relative; */
overflow: hidden;
}
/* ::selection{
background: rgba(26,188,156,0.3);
} */
.container{
max-width: 80%;
padding: 0 20px;
top: 120px;
left : 150px;
position: relative;
}
.wrapper {
width: 100%;
height: 800px;
background: #fff;
border-radius: 10px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.1);
}
.form{
padding: 5% 5%;
float: left;
width: 40%;
height: 100%;
}
form{
width: 100%;
height: 100%;
}
form, input{
font-size: 23px;
}
.forgot{
padding-left:20%;
font-size: 18px;
}
.text-form{
margin-bottom: 20px;
}
input{
border-radius: 3px;
width: 100%;
}
.button-login{
text-align: center;
padding-top: 30px;
}
.button-login #loginbtn{
width: 120px;
height: 40px;
background-color: #D885A3;
font-size: 23px;
border-radius: 20px;
position: relative;
}
button::after{
content: "";
width: 10px;
height: 10px;
display: flex;
background-image: url('img/ArrowRight.svg');
position: absolute;
}
div p {
display: flex;
justify-content: center;
}
.button-icon{
display: flex;
justify-content: center;

}
.button-icon button{
width: 100px;
height: 40px;
margin: auto;
border-radius: 20px;
}
.signup{
margin-top: 50px;
display: flex;
justify-content: center;
}
.signup p{
padding: 5px;
}
.field-icon {
float: right;
margin-left: -25px;
margin-top: -25px;
position: relative;
z-index: 2;
}
.pass{
position: relative;
/* display: block; */
}

.image{
float: right;
width: 60%;
height: 100%;

}
.rectangle{
float: right;
height: 100%;
width: 50%;
background-color: #C0DBEA;
border-radius: 10px;

}
`
const Login = () => {

    return (
        <div class="container">
            {/* <div class="wrapper">
                <div class="form">
                    <h2><img src="img/logo.svg" alt="" style="width: 70px; height: 70px;"></h2>

                    <h2 style="font-size: 35px;padding-bottom: 20px;">Log in</h2>
                    <form action="" method="post">
                        <div class="text-form">
                            <h4>User name</h4>
                            <input type="text" placeholder="username" id="username" value="kminchelle"/>
                        </div>
                        <div class="pass">
                            <h4><span>Password</span><span class="forgot"><a href="#" style="text-decoration: none;color: gray;">Forgot Password?</a></span></h4>
                            <input type="password" placeholder="*********" id="inputPass" value="0lelplR"/>
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" onclick="showHidenPass()"></span>
                        </div>
                        <div class="button-login">
                            
                                <button type="button" onclick="loginFunction()" id="loginbtn">Login</button>
                        </div>
                        <div ><p style="margin: 20px;">or continue with</p></div>
                        <div class="button-icon">
                            <button><img src="img/Google.svg" alt=""></button>
                            <button><img src="img/Github.svg" alt=""></button>
                            <button><img src="img/Facebook.svg" alt=""></button>
                        </div>
                        <div class="signup" style="font-size: 18px;">
                            <p>Don't have an account yet?</p>
                            <p><a href="#" style="text-decoration: none; color: #D885A3;cursor: pointer;">Sign up for free</a></p>
                        </div>
                    </form>
                </div>
                <div class="image">
                    <div class="rectangle"></div>
                </div>
            </div> */}
        </div>
    )
};
export { Login }