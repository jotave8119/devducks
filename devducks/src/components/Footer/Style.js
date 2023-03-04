import styled from "styled-components";

export const FooterBox = styled.footer`

    width: 100vw;
    height: 220px;
    padding: 3em;
    background-color: var(--Grey-4);
    border-top: solid 3px var(--Color-primary);
    display: flex;
    flex-direction: column;
    gap: 7px;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    text-align: justify;


    .gitContact{
        color: var(--Grey-0);
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-right: 10px;
        font-weight: bold;

        &:hover{
            border-radius: 10px;
            color: #000;
            border-radius: 3px;
            transform: translateY(-5px);
            background-color: var(--Grey-0);
            transition: 0.5s;
           }
    }

    .LinContact{
        color: var(--Grey-0);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 5px;

        &:hover{
            border-radius: 3px;
            transform: translateY(-5px);
            color: #0e76a8;
            background-color: var(--Grey-0);
            transition: 0.5s;
           }
    }

    .instContact{
        color: var(--Grey-0);
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin-left: 25px;
        gap: 5px;

            &:hover{
                transition: 0.5s;
                transform: translateY(-5px);
                border-radius: 3px;
                color: white;
                background: #f09433; 
                background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
                background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
            }
    }

    .copy{
        color: var(--Grey-1);
        font-size: 12px;
        font-weight: 500;
        display: flex;
        margin-top: 5px;
        align-items: center;
    }

    .toTop{
        color: var(--Grey-0);
        width: 70px;
        height: 30px;
        font-weight: bold;
        background-color: var(--Color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 5px;
        &:hover{
                box-shadow: 0px 5px 10px 2.5px var(--Grey-0) ;
                transform: translateY(-5px);
                background-color: var(--Grey-0);
                color: var(--Color-primary);
                transition: 0.5s;
            }
    }

    @media(min-width: 768px){
        
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            .toTop{
                margin-top: 0;
            }
        
    }
`;