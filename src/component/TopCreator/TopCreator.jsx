import { Creator } from '.'
import img1 from 'Assets/Ellipse 6avt1.svg'
import img2 from 'Assets/Ellipse 6avt2.svg'
import img3 from 'Assets/Ellipse 6avt3.svg'
import img4 from 'Assets/Ellipse 6avt4.svg'
import img5 from 'Assets/Ellipse 6avt5.svg'
import img6 from 'Assets/Ellipse 6avt6.svg'
import { styled } from 'styled-components'
const listuser = [
    {
        top: 1,
        id: '@jordan_',
        name: 'Michael Jordan',
        avatar: img1
    },
    {
        top: 2,
        id: '@johnti60',
        name: 'John Tibao',
        avatar: img2
    },
    {
        top: 3,
        id: '@teressa',
        name: 'Teressa',
        avatar: img3
    },
    {
        top: 4,
        id: '@j_hawn',
        name: 'Johan Hawn',
        avatar: img4
    },
    {
        top: 5,
        id: '@m_alisson',
        name: 'Maria Alisson',
        avatar: img5
    },
    {
        top: 6,
        id: '@erricsonsam',
        name: 'Sam Erricson',
        avatar: img6
    },


]; 

const TopCreatorStyled= styled.div`
    width: 300px;
    height: 270px;
    display: flex;
    background-color: white;
    align-items: center;
    flex-direction: column;
    /* padding-bottom: 20px; */
    gap: 20px;
`
const TopCreator = () => {
    return (
        <TopCreatorStyled >
            {listuser.map((user)=>{
                const list=(
                <Creator top={user.top} name={user.name} id={user.id} avatar={user.avatar}></Creator>
            )
        return list;
        }
            )}
        </TopCreatorStyled>
    )
}
export { TopCreator }
