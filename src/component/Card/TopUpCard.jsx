import { styled } from "styled-components";
import ethIcon from 'Assets/Ethereum (ETH).svg'
import { Button } from "component/Button";
import plus from 'Assets/plus.svg'
import arrowright from 'Assets/arrowright.svg'
const StyleCard = styled.div`
width: 228px;
height: 220px;
left: 32px;
top: 772px;


background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
border-radius: 16px;
    padding: 24px;
    
    
  
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    border: 2px solid black;
    align-items: center;
    justify-content: center;
 .title, .amount-wraper{
    padding-bottom: 10px;
 } 
 .title{
    color: #E0DEE5;
;
 } 
 .amount{
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
 } 
 .balance{
    display: inline;
    text-align: center;
    justify-content: center;
 }
`
export const TopUpCard = ({ title, amount, content, percent }) => {
    return <StyleCard
        title={title}
        amount={amount}
        content={content}
        percent={percent}
    >
        <div className="title">{title}</div>
            <div className="amount-wraper">
               
                <div className="amount">{amount}</div>
                <img className="eth" src={ethIcon} alt="" />ETH
            </div> 
        <Button className="balance" percent={percent} width= "196" height= "49" >
            <img src={plus} alt="" />
            <span>Top Up Balance</span>
            <img src={arrowright} alt="" />
        </Button>

    </StyleCard>

}