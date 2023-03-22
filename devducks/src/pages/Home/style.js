import styled from "styled-components";



export const HomeContainer = styled.section`


    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

   .box{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        gap: 7px;
        margin-top: 90px;
        margin-bottom: 15px;
        animation: fadeIn 1s;
        text-align: center;

        .devdocs{
          width: 400px;
          height: 400px;
        }

        .welcome{
            font-size: 35px;
            line-break: auto;
            font-weight: bold;
            color: white;
            margin-top: 7px;
            margin-bottom: 7px;
            padding: 0;
        }

        .about{
            font-size: 1rem;
            text-align: center;
            font-weight: bold;
            justify-self: center;
            color: var(--Grey-0);
            margin-top: 3px;
            width: 80%;
        }

   }


      .techs{
        width: 300px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
        margin-top: 15px;
        animation: fadeInUp 1s;
        text-align: center;

        

        .reactIcon{
            cursor: pointer;
            padding: 2px;
            color: var(--Grey-0);
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #61DAFB;
            color: #61DAFB;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .gitIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #EF391A;
            color: #EF391A;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .nodeIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #237A1F;
            color: #237A1F;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .yarnIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #117CAD;
            color: #117CAD;
            transform: translateY(-10px);
            transition: 0.5s;
        }
        }

        .tsIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #3178C6;
            color: #3178C6;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

}



//MEDIA QUERY ---- -- - -- - - -- -- 

@media(min-width:768px){

    .box{
      gap: 20px;
    }
  
    .logo{
        font-size: 60px;
    }

    .devdocs{
        width: 400px;
        height: 400px;
        padding: 0;
    }

    .techs{
        width: 600px;
        gap: 20px;
        margin-top: 15px;
    }


} 



`;

