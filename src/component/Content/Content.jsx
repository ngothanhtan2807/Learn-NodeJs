import banner from 'Assets/Rectangle 13.svg'
import { Button } from 'component/Button'
import { Card } from 'component/Card'
import { styled } from 'styled-components'

const ContentStyled = styled.div`
   margin-left:30px  ;
   margin-top: 30px;
   padding-right: 30px;

   .top-content{
    /* background-color: #CAEAE6; */
    width: 100%;
    height: 354px;
    display: flex;
    margin-bottom: 50px;
   }
   .top-left{
   float: left;
    width: 70%;
    height: 100%;
    position: relative;
        display: flex;
    }
    .background-banner{
        position: absolute;
        /* z-index: 1; */
        display: block;
        /* max-width:100%;
  max-height:100%;
  width: auto;
  height: auto; */
  width: 716px;
  height: 354px;
    }
    .content-left{
        width: 85%;
        height: 100%;
        /* margin-left: 100px; */
        padding-left: 100px;
        position: absolute;
        z-index: 1000;
        
    }
    .title{ 
        width: 80%;
        font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    /* position: absolute; */
    /* padding-right: 80px; */
    color: #FFFFFF;
    /* or 65px */
    }
    .btn-left1{
        margin-left: 3px;
    }
    .btn-total{
        display: flex;
        gap: 10px;
        width: 80%;
    }
    .top-right-content{
        float: right;
        width: 400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px
    /* background-color: beige; */
    /* padding-left: 30px; */
    }

.bottom-right-content{
    width: 348px;
    height: 478px;
    background-color: #FFFFFF;
}
    
   
`
const Content = ({ children }) => {
    return (
        <ContentStyled>
            <div className="top-content">
                <div className="top-left">
                    <img className="background-banner" src={banner} alt="" />
                    <div className="content-left">
                        <div className="title">
                            <p >Discover, Create and Sell Your Own NFT.</p>
                        </div>
                        <div className="btn-total">
                            <Button className="btn-left1" width={128} height={46} textColor="#5429FF" bgColor="#FFFFFF" bradius="40">Following</Button>
                            <Button className="btn-left1" width={113} height={46} textColor="white" bgColor="rgba(0,0,0,0)" bradius="40" borderColor="#FFFFFF">Following</Button>

                        </div>
                    </div>

                </div>
                <div className="top-right-content">
                    <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                    <Card title="Spending" amount="2.00" percent={8.1}></Card>                 
                    <Card title="Roi" content="+14.02" percent={-5.1}></Card>
                    <Card title="Estimated" amount="7.00" percent={3.2}></Card>
                </div>
            </div>
            <div className="bottom-content">
                <div className="bottom-left-content">
                    <div className="bottom-left-top">
                        <h2>Trending Auctions</h2>
                    </div>
                </div>
                <TopCreator>
                    
                </TopCreator>

                
            </div>
        </ContentStyled>
    )
}
export { Content }