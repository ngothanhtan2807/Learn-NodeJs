import notification from "Assets/notification.svg"
import avt from "Assets/avt.svg"
import search from 'Assets/search (2).svg'
import { styled } from "styled-components"

const HeaderStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input{
    width: 461px;
height: 46px;
margin-left: 30px;
background: #FFFFFF;
border-radius: 35px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 21px;
text-indent: 56px;
}
    .input-wrapper{
    position: relative;
}
.img{
    margin-left: 50px;
    margin-top: 15px;
    position: absolute;
}

.noti-icon{
border: 1px solid white;
border-radius: 50%;
background-color: white;
margin-left: 20px;
    }
 #noti1{
padding: 10px;
    }
`
const Header = () => {
    return (
        <HeaderStyled>
            <div className="input-wrapper">
                <img className="img" src={search} alt="" />
                <input className="input" type="text" placeholder="Search item, Selection and Account" />
            </div>
            <div>
                <span ><img className="noti-icon" id="noti1" src={notification} alt="" /></span>
                <span><img className="noti-icon" src={avt} alt="" /></span>
            </div>
        </HeaderStyled>
    )

}
export { Header }