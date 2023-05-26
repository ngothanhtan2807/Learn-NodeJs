import banner from 'Assets/Rectangle 13.svg'
import { Button } from 'component/Button'
import { Card } from 'component/Card'
import { TopCreator } from 'component/TopCreator'
import { CardTrending } from 'containers/Layout'
import { styled } from 'styled-components'
import img2 from 'Assets/Ellipse 6avt2.svg'

const ContentStyled = styled.div`
   /* margin-left:30px  ; */
   margin-top: 30px;
   /* padding-right: 30px; */

   .top-content{
    width: 100%;
    height: 300px;
    display: flex;
    margin-bottom: 50px;
   }
   .top-left{
        float: left;
        width: 800px;
        height: 100%;
        position: relative;
        display: flex;
    }
    .top-right{
        float: right;
        width: 400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 12px
    }
    .background-banner{
        position: absolute;
        /* z-index: 1; */
        display: block;
        max-width:100%;
        max-height:100%;
        width: auto;
        height: auto;
  
    }
    .content-left{
        width: 85%;
        height: 100%;
        padding-left: 50px;
        position: absolute;
        z-index: 1000;
        
    }
    .title{ 
        width: 90%;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 120%;
        color: #FFFFFF;
   
    }
    .btn-left1{
        margin-left: 3px;
    }
    .btn-total{
        display: flex;
        gap: 10px;
        width: 80%;
    }

    .bottom-content{
    width: 100%;
    height: 500px;
    display: flex;
    margin-bottom: 50px;
   }
   .bottom-left{
    float: left;
    width: 800px;
    height: 800px;
    /* position: relative; */
    display: block;
   }

    .bottom-left-top{
    width: 100%;
    height: 31px;

    }
    .bottom-right{
        float: right;
        width: 380px;
        height: 478px;
        padding-left: 10px;
        padding-right: 10px;
        /* display: flex; */
        background-color: #FFFFFF;
        border-radius: 16px;
       
    }
    .topCreator{
            width: 290px;
            display: flex;      
            align-items: center;
            justify-content: space-between;
        }
    .trending-list-category{
        display: flex;
        width: 400px;
        height: 31px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #747475;
        ul{
            display: flex;
            justify-content: end;
            a{
                text-decoration: none;
            }
        }
        li{
            list-style: none;
            padding-left: 20px;
            align-items: center;
            justify-content: center;
         
        }
}
        
        .title-creator{
            height: 31px;
            width: 100%;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 22px;
        }    
        .seeAll-creator{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #747475;

        } 
        .trendingCenter{
            margin-top: 20px;
            /* margin-right: 30px; */
            width: 720px;
            height: 800px;
            /* background-color: #FFFFFF; */
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        } 
        .contentCreator{
            height: 447px;
            width: 100%;
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
                <div className="top-right">
                    <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                    <Card title="Spending" amount="2.00" percent={8.1}></Card>
                    <Card title="Roi" content="+14.02" percent={-5.1}></Card>
                    <Card title="Estimated" amount="7.00" percent={3.2}></Card>
                </div>
            </div>
            <div className="bottom-content">
                <div className="bottom-left">
                    <div className="title-creator">
                        <div className="titleTrending">Trending Auctions</div>
                        <div className="trending-list-category">
                            <ul>
                                <a href="#"><li>Art</li></a>
                                <a href="#"> <li>Music</li></a>
                                <a href="#"><li>Collectibles</li></a>
                                <a href="#"><li>Utility</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="trendingCenter">
                    <CardTrending like="21,5K Likes" nameTren="Ape In Love" idAuthor="@johnti60" amount="9.10" time="12 : 03 : 45" imgAvt={img2}></CardTrending>
                    <CardTrending like="21,5K Likes" nameTren="Ape In Love" idAuthor="@johnti60" amount="9.10" time="12 : 03 : 45" imgAvt={img2}></CardTrending>
                    <CardTrending like="21,5K Likes" nameTren="Ape In Love" idAuthor="@johnti60" amount="9.10" time="12 : 03 : 45" imgAvt={img2}></CardTrending>
                    <CardTrending like="21,5K Likes" nameTren="Ape In Love" idAuthor="@johnti60" amount="9.10" time="12 : 03 : 45" imgAvt={img2}></CardTrending>
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="title-creator">
                        <div className="">Top Creator</div>
                        <div className="seeAll-creator">See All</div>
                    </div>
                    <div className="contentCreator">
                        <TopCreator></TopCreator>
                    </div>
                </div>


            </div>
        </ContentStyled>
    )
}
export { Content }