import { styled } from "styled-components";

const NavStyled = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    /* background-color: aqua; */
    font-size: 25px;
    margin-bottom: 30px;
    img{
        padding-right: 30px;
    }
    .text{
        width: 100%;
height: 21px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 21px;
    }

`

const NavItem=({text, icon})=>{
    return (
        <NavStyled text = {text} icon={icon}>
            <span><img src={icon} alt="" /></span>
            <span className="text">{text}</span>
        </NavStyled>
    )
}
export {NavItem};