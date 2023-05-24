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
const LayoutStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
    display: flex;
    /* margin-right: 32px; */
`
const SideBar = styled.div`
    float: left;
    width: 20%;
    /* height: 100vh; */
    background-color: #ffffff;
    /* position: fixed; */
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
`
const Center = styled.div`
    float: right;
    width: 80%;
    /* height: 100vh; */
    background-color: #0b9787;
`
const Header = styled.div`
width: 100%;
height: 100px;
/* background-color: blueviolet; */
align-items: center;
display: flex;
justify-content: space-between;
padding-right: 30px;
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
}
div{
    margin-right: 30px;
}
.input::after{

}
.noti-icon{
width: 56px;
height: 56px;
border: 1px solid white;
border-radius: 50%;
background-color: white;
margin-left: 20px;
    }

`
const Content = styled.div`
    width: 100%;
    /* height: 800px; */
    background-color: brown;

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
                        <NavItem text="Market" path="/" icon={market}></NavItem>
                        <NavItem text="Active Bids" path="/" icon={active}></NavItem>
                    </div>
                    <h5 className="nav">PROFILE</h5>
                    <div className="nav">
                        <NavItem text="My Portfolio" path="/" icon={portfolio}></NavItem>
                        <NavItem text="Wallet" path="/" icon={wallet}></NavItem>
                        <NavItem text="Favourites" path="/" icon={favoutite}></NavItem>
                        <NavItem text="History" path="/" icon={history}></NavItem>
                        <NavItem text="Settings" path="/" icon={setting}></NavItem>
                    </div>
                    <h5 className="nav">ORTHER</h5>
                </div>
            </SideBar>
            <Center>
                <Header>
                    <div>
                        <input className="input" type="text" placeholder="Search item, Selection and Account" />
                    </div>
                    <div>
                        <span ><img className="noti-icon" src={notification} alt="" /></span>
                        <span><img className="noti-icon" src={avt} alt="" /></span>
                    </div>
                </Header>
                <Content>
                    {/* {children} */}
                </Content>
            </Center>

        </LayoutStyled>
    )
}
export { Layout };