import redArrow from 'Assets/redArrow.svg'
import greenArrow from 'Assets/greenArrow.svg'
import styled from 'styled-components'

const StyleButton = styled.button`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: 1px solid ${props => props.borderColor};
    border-radius: ${props =>`${props.bradius}px`};
    font-weight: 500;
    font-size: ${props => `${props.fontSize}px`};
    line-height: 21px;
    color: ${props =>props.textColor};
     background: ${props => props.bgColor};
    img {
    margin-right: 8px;
     }
`;

export const Button = ({ percent, children, width, height, textColor, bgColor, borderColor,bradius,fontSize, ...res }) => {
    

    return <StyleButton
    percent = {percent}
    children = {children}
    width = {width}
    height = {height}
    textColor = {textColor}
    bgColor = {bgColor}
    borderColor = {borderColor}
    bradius = {bradius}
    fontSize = {fontSize}
    {...res} >
        
{percent && <img src={percent < 0 ? redArrow : greenArrow} alt="" />}
   {children}
    </StyleButton>
}
Button.defaultProps = {
    bgColor: '#FFFFFF',
    textColor: '#5429FF',
    width: 100,
    height: 46,
    fontSize: 16,
    bradius: 12,
    borderColor: 'black',
  };