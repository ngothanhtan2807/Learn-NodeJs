import { styled } from "styled-components";
import ethIcon from 'Assets/Ethereum-blue.svg'
import { Button } from "component/Button";

const StyleCard = styled.div`
    padding-left: 15px;
    width: 130px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    border: 2px solid rgba(0,0,0,0);
    
 .title-card, .amount-wrapper-card{
    padding-bottom: 15px;
 } 
 .title-card{
    padding-top: 10px;
    color: #747475;

 } 
 .amount-card{
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    margin-left: 5px;
 } 
 .amount-wrapper-card{
    display: flex;
    /* text-align: center; */
    /* justify-content: center; */
 }
 .eth-card{
    align-self: flex-end;
 }
 .eth-icon-card{
margin-right: 3px;
 }
 .btn-card-comp{
    /* display: flex; */
    /* align-items: center; */
    justify-content: center;
 }
`
export const Card = ({ title, amount, content, percent, bdColor }) => {
    return <StyleCard
        title={title}
        amount={amount}
        content={content}
        percent={percent}
        bdColor = {bdColor}
    >
        <div className="title-card">{title}</div>
            {amount ?
            <div className="amount-wrapper-card">
               <div><img className="eth-icon-card" src={ethIcon} alt="" /></div>
               <div className="amount-card">{amount}</div>
               <div className="eth-card">ETH</div>
            </div> :
            <div className="amount-wrapper-card">
                <div className="amount-card">{content}</div>
                <div className="eth-card">%</div>
            </div>
        }
        <Button className="btn-card-comp" percent={percent} width="110" height="33" borderColor={bdColor}>{Math.abs(percent)}%</Button>

    </StyleCard>

}