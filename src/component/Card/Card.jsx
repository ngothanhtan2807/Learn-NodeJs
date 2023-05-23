import { styled } from "styled-components";
import ethIcon from 'Assets/Ethereum-blue.svg'
import { Button } from "component/Button";

const StyleCard = styled.div`
    padding: 24px;
    width: 150px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    
 .title, .amount-wraper{
    padding-bottom: 10px;
 } 
 .title{
    color: #747475;
;
 } 
 .amount{
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
 } 
`
export const Card = ({ title, amount, content, percent }) => {
    return <StyleCard
        title={title}
        amount={amount}
        content={content}
        percent={percent}
    >
        <div className="title">{title}</div>
        {amount ?
            <div className="amount-wraper">
                <img className="eth" src={ethIcon} alt="" /><span className="amount">{amount}</span>ETH
            </div> :
            <div>
                <span className="amount">{content}</span>%
            </div>
        }
        <Button percent={percent} >{Math.abs(percent)}%</Button>

    </StyleCard>

}