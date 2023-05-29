import { styled } from "styled-components"
import { Logo } from "component/Logo";
import google from 'Assets/Google.svg'
import github from 'Assets/Github.svg'
import facebook from 'Assets/Facebook.svg'
import rectangle from 'Assets/Rectangle 601.svg'
const LoginStyled = styled.div`
 
    width: 100%;
    height: 100vh;
    background-color:gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

.container{
width: 1400px;
height: 800px;
background: linear-gradient(90deg, #FFFFFF 0%, #BBAAFF 66.67%);
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

/* .image{
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

} */
`
const Login = () => {

    return (
        <LoginStyled>


    
    
                <div class="form">
                    <Logo/>
                    <form action="" method="post">
                        <div class="text-form">
                            <h4>User name</h4>
                            <input type="text" placeholder="username" id="username" value="kminchelle"/>
                        </div>
                        <div class="pass">
                            <h4><span>Password</span><span class="forgot"><a href="#" style={{textDecoration: "none", color: "gray"}}>Forgot Password?</a></span></h4>
                            <input type="password" placeholder="*********" id="inputPass" value="0lelplR"/>
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" onclick="showHidenPass()"></span>
                        </div>
                        <div class="button-login">
                            
                                <button type="button" onclick="loginFunction()" id="loginbtn">Login</button>
                        </div>
                        <div ><p style={{margin: 20+"px"}}>or continue with</p></div>
                        <div class="button-icon">
                            <button><img src={google} alt="" /></button>
                            <button><img src={github} alt="" /></button>
                            <button><img src={facebook} alt="" /></button>
                        </div>
                        <div class="signup" style={{fontSize: 18+"px"}}>
                            <p>Don't have an account yet?</p>
                            <p><a href="#" style={{textDecoration: "none", color: "#D885A3", cursor: "pointer"}}>Sign up for free</a></p>
                        </div>
                    </form>
                </div>
                <div class="image">
                    <div class="rectangle">
                        <img src={rectangle}/>
                    </div>
                </div>
            
           
        </LoginStyled>
    )
};
export { Login }