import { styled } from "styled-components"
import notification from "Assets/notification.svg"
import avt from "Assets/avt.svg"
import logo from "Assets/logo.svg"
import { NavItem } from "component/Nav"
import dasboard from "Assets/category.svg"
import market from "Assets/shop.svg"
import active from "Assets/judge.svg"
import portfolio from "Assets/buy-crypto.svg"
import wallet from "Assets/wallet-3.svg"
import favoutite from 'Assets/lovely.svg'
import history from 'Assets/clock.svg'
import setting from 'Assets/setting.svg'
import { TopUpCard } from "component/Card"
import lightMode from 'Assets/theme.svg'
import { Content } from "component/Content"
import search from 'Assets/search (2).svg'
import { ReactComponent as MarketIcon } from "Assets/shop.svg"

const LayoutStyled = styled.div`
    width: 100vw;
    /* height: 100%; */
    background-color: antiquewhite;
    display: flex;
    position: relative;
    /* margin-right: 32px; */
`
const SideBar = styled.div`
    float: left;
    width: 20%;
   
    height: 100%;
    background-color: #ffffff;
    /*  */
    position: fixed;
    .top{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        margin-bottom:50px;
    }
    .top, .nav{
        margin-left: 30px;
    }
    .infor{
        width: 50%;
        padding-left: 10px;
    }
    .logo-text{
        font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    }
    .logo-desc{
        font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    }
    .topup{
    width: auto;
    display: flex;
    justify-content: start;
    margin-left: 30px;
    }
    .nav{

        .active {
            svg {
                path {
                    stroke: #f30ee4;
                }  
            }}
        }
`
const Center = styled.div`
    float: right;
    width: 80%;
    /* height: 100vh; */
    height: 100%;
    background-color: #CAEAE6;
    margin-left: 20%;
    padding-right: 80px;
    padding-left: 80px;
    /* position: fixed; */
    /* .content-center-layout{ */
    /* width: 100%; */
    /* height: 1000px; */
    /* background-color: brown; */
    
/* } */
`
const Header = styled.div`
width: 100%;
height: 100px;
/* background-color: blueviolet; */
align-items: center;
display: flex;
justify-content: space-between;

.input{
    width: 461px;
height: 56px;
margin-left: 30px;
background: #FFFFFF;
border-radius: 35px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 21px;
text-indent: 56px;
/* margin-left: 30px;
width: 461px;
    height: 56px;
    border-radius: 35px;
    border: none;
    text-indent: 56px;
    font-size: 16px;
    line-height: 21px;
    outline: none; */
}
.input-wrapper{
    position: relative;
}
.img{
    margin-left: 50px;
    margin-top: 20px;
    position: absolute;
}
/* div{ */
    /* padding-right:30px;
} */
.input::after{

}
.noti-icon{
/* width: 56px;
height: 56px; */

border: 1px solid white;
border-radius: 50%;
background-color: white;
margin-left: 20px;
    }
 #noti1{
padding: 10px;
    }
    
`


const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <SideBar>
                <div className="">
                    <div className="top">
                        <span ><img className="logo" src={logo} alt="" /></span>
                        <div className="infor">
                            <div className="logo-text">MyNFT</div>
                            <div className="logo-desc">NFT Marketplace</div>
                        </div>
                    </div>
                    <div className="nav">
                        <NavItem text="Dashboard" path="/" icon={dasboard}></NavItem>
                        <NavItem text="Market" path="/1" icon={market}>
                            <MarketIcon />
                        </NavItem>
                        <NavItem text="Active Bids" path="/2" icon={active}></NavItem>
                    </div>
                    <h5 className="nav">PROFILE</h5>
                    <div className="nav">
                        <NavItem text="My Portfolio" path="/3" icon={portfolio}></NavItem>
                        <NavItem text="Wallet" path="/4" icon={wallet}></NavItem>
                        <NavItem text="Favourites" path="/" icon={favoutite}></NavItem>
                        <NavItem text="History" path="/" icon={history}></NavItem>
                        <NavItem text="Settings" path="/" icon={setting}></NavItem>
                    </div>
                    <h5 className="nav">ORTHER</h5>
                    <div className="nav">
                        <NavItem text="LightMode" path="/" icon={lightMode}></NavItem>
                    </div>
                    <div className="topup">
                        <TopUpCard title="Your Balance" amount="1,034.02" content="Top Up Balance" ></TopUpCard>
                    </div>
                </div>
            </SideBar>
            <Center>
                <Header>
                    <div className="input-wrapper">
                        <img className="img" src={search} alt="" />
                        <input className="input" type="text" placeholder="Search item, Selection and Account" />
                    </div>
                    <div>
                        <span ><img className="noti-icon" id="noti1" src={notification} alt="" /></span>
                        <span><img className="noti-icon" src={avt} alt="" /></span>
                    </div>
                </Header>
                <div className="content-center-layout">

                    <Content >
                        {/* {children} */}
                    </Content>
                </div>
            </Center>

        </LayoutStyled>
    )
}
export { Layout };