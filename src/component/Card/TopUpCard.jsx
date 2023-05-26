import { styled } from "styled-components";
import ethIcon from 'Assets/Ethereum (ETH).svg'
import { Button } from "component/Button";
import plus from 'Assets/plus.svg'
import arrowright from 'Assets/arrowright.svg'
const StyleCard = styled.div`
    width: 180px;
    height: 160px;
    background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
    border-radius: 16px;
    
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    border: 2px solid black;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
 .title, .amount-wraper{
    padding-bottom: 10px;
 } 
 .title{
    color: #E0DEE5;
;
 } 
 .amout-cen{
     display: flex;
     justify-content: center;
     align-items: center;
     padding-top: 10px;
 }
 .amout-cen1{
     display: flex;
     /* justify-content: center; */
     /* align-items: center; */
    
 }
 .amount{
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
 } 
 .balance{
    margin-top: 10px;
    display: inline;
    text-align: center;
    justify-content: center;
 }
 .eth{
   
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
            <div className="amout-cen">
                <img className="eth" src={ethIcon} alt="" />ETH
            </div>
        </div>
        <Button className="balance" percent={percent} width="150" height="44" fontSize={14}>
            <div className="amout-cen1">

                <img src={plus} alt="" />
                <span>Top Up Balance</span>
                <img style={{ paddingLeft: "5px" }} src={arrowright} alt="" />
            </div>
        </Button>

    </StyleCard>

}