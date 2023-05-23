import redArrow from 'Assets/redArrow.svg'
import greenArrow from 'Assets/greenArrow.svg'
import styled from 'styled-components'

const StyleButton = styled.button`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: 1px solid black;
    border-radius: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: ${props =>props.textColor};
     background: ${props => props.bgColor};
    img {
    margin-right: 8px;
     }
`;

export const Button = ({ percent, children, width, height, textColor, bgColor, borderColor, ...res }) => {
    

    return <StyleButton
    percent = {percent}
    children = {children}
    width = {width}
    height = {height}
    textColor = {textColor}
    bgColor = {bgColor}
    borderColor = {borderColor}
    {...res} >
        
{percent && <img src={percent < 0 ? redArrow : greenArrow} alt="" />}
   {children}
    </StyleButton>
}
Button.defaultProps = {
    bgColor: '#FFFFFF',
    textColor: '#5429FF',
    width: 128,
    height: 46,
    fontSize: 16,
  };