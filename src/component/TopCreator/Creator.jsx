import avt from "Assets/avt.svg"
import { Button } from "component/Button"
import { styled } from "styled-components"

const CreatorStyled = styled.div`
    width: 300px;
    height: 45px;
    display: flex;
    /* background-color: #b62c2c; */
    align-items: center;
    /* justify-content: space-between; */
    .ustop{
        width: 25px;
        height: 100%;
        /* background-color: blue; */
       justify-content:center;
       margin-right: 10px;
        /* text-align: center; */
    }
    .usavt{
        width: 44px;
        height: 100%;
        /* background-color: green; */
        margin-right:10px;
    }
    .usnameId{
        width: 120px;
        height: 100%;
        /* background-color: blueviolet; */
    }
    .usname{
        font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
color: #27262E;
    }
    .usid{
        font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

color: #747475;
    }
`
const Creator = ({ top, name, id, avatar }) => {
    return (
        <CreatorStyled
            top={top}
            name={name}
            id={id}
            avatar={avatar}
        >
            <div className="ustop">{top}.</div>

            <div className="usavt">
                <img src={avatar} alt="" />
            </div>
            <div className="usnameId">
                <span className="usname">{name}</span><br />
                <span className="usid">{id}</span>
            </div>
            <div className="follow">
                <Button width={70} height={30} bradius={20}>Follow</Button>
            </div>

        </CreatorStyled>
    )
}
export { Creator }