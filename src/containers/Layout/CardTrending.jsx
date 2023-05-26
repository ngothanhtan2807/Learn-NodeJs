import imagine from 'Assets/image.svg'
import clock from 'Assets/clock.svg'
import { Button } from 'component/Button'
import amountIcon from 'Assets/Ethereum.svg'
import { styled } from 'styled-components'

const CardTrendingStyled = styled.div`
    width: 348px;
    height: 364px;
    background-color: #ffffff;
    display: block;
    border-radius: 16px;
.imageTrending{
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.imageTrending:not(:hover){
    .btnPlaceABid{
        display: none;
    }
}
.btnPlaceABid{
    position: absolute;
    /* display: none; */
}
.btnTime{
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
color: #FFFFFF;
background-color: rgba(0,0,0,0);
position: absolute;
margin-top: 140px;
margin-left: -200px;
}
.iconTime{
    width: 16px;
height: 16px;
}
.centerCardTrend{
    display: flex;
    width: 320px;
    padding-left: 10px;
    justify-content: space-between;
    align-items: center;
}
.nameTrending{
width: 133px;
height: 31px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
}
.countLike{
width: 90px;
height: 21px;
left: 247px;
top: 240px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: right;
color: #747475;
}
.inforAuthor{
    display: flex;
    width: 320px;
    align-items: center;
    padding-left: 10px;
}
.idAuthor{
    padding-left: 10px;
    text-align: center;
}
.amountTrend{
    width: 320px;
    padding-left: 10px;
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    /* align-items: center; */
}
.currentBid{
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;

display: flex;
align-items: flex-end;
font-feature-settings: 'salt' on;

/* Text/color2 */

color: #747475;
}
.currentAmout{
text-align: center;
}
`

const CardTrending = ({ children, like, nameTren, author, amount, time, idAuthor, imgAvt }) => {
    return (
        <CardTrendingStyled
            children={children}
            like={like}
            nameTren={nameTren}
            author={author}
            amount={amount}
            time={time}
            idAuthor={idAuthor}
            imgAvt={imgAvt}

        >
            <div className="imageTrending">
                <img src={imagine} alt="" />
                <Button className="btnPlaceABid" width={144} height={46} bradius={40}>Place a Bid</Button>
                <Button className="btnTime" width={100} height={28}>
                    <img className="iconTime" src={clock} alt="" />{time}
                </Button>
            </div>
            <div className="centerCardTrend">
                <div className="nameTrending">
                    {nameTren}
                </div>
                <div className="countLike">
                    {like}
                </div>
            </div>
                <div className="inforAuthor">
                    <img className="avtAuthor" src={imgAvt} alt="" />
                    <div className="idAuthor">{idAuthor}</div>
                </div>
            <div className="amountTrend">
                <div className="currentBid">Current Bid</div>
                <div className="currentAmout"><img src={amountIcon} alt="" />{amount} ETH</div>
            </div>

        </CardTrendingStyled>
    )
}
export { CardTrending }