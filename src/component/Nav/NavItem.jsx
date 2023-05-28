import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavStyled = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    /* background-color: aqua; */
    font-size: 25px;
    margin-bottom: 25px;
    justify-content: left;
    align-items: center;
    img{
        padding-right: 21px;
    }
    .text{
        width: 100%;
height: 21px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
/* identical to box height */

color: #7A797D;
    }
    .link{
        text-decoration: none;
    }
    .active {
    svg {
      path {
        stroke: #f30ee4;
      }  
    }
    .text{

        color: #f30ee4;
    }
  }

`

const NavItem = ({ text, icon,path, children }) => {
    return (
        <NavStyled text={text} icon={icon} path = {path}>
            <NavLink  className="link"to={path}>
                <span><img src={icon} alt="" /></span>
                {/* {children} */}
                <span className="text">{text}</span>
            </NavLink>
        </NavStyled>
    )
}
export { NavItem };