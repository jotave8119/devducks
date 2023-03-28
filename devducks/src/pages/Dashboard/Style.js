import styled from "styled-components";

export const DashboardContainer = styled.main`


    width: 100vw;
    min-height: 100vh;
    background-color: var(--Grey-3);
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    scroll-behavior: smooth;

    .navBar{
        width: 100%;
        height: 100px;
        padding: 20px;
        display: flex;
        background-color: var(--Grey-4-transparent);
        justify-content: space-around;
        gap: 10px;
        align-items: center;
        border-bottom: solid 3px var(--Color-primary);
        top: 0;
        left: 0;
        position: sticky;
        z-index: 9999;
        animation: fadeInDown 0.5s;

        .dashLogo{
            width: 60px;
            height: 60px;
            animation: fadeIn 1s;
            transition: all 1s;

            &:hover{
                -webkit-transform: rotateZ(360deg);
                transform: rotateZ(360deg);
            }
        }

        .form{
            height: 40px;
            color: var(--Grey-0);
            background-color: var(--Grey-3);
            border-radius: 5px;
            border: solid 2px var(--Color-primary);
            padding: 5px;
            width: 130px;
}
    }

.list{
            width: 90%;
            height: 80%;
            padding: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--Grey-3);
            flex-direction: column;
            margin-bottom: 40px;
            scroll-behavior: smooth;
        }



// @MEDIA - BREAKPOINT -----------

    @media(min-width: 768px){
        .list{
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            width: 85%;
        }

        nav{
            display: flex;
            justify-content: space-evenly;
        }
        
        input{
           width: 200px;
           
       }
    } 
`;