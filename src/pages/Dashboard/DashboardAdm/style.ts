import styled from "styled-components";

export const StyledDashboard = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;

    .backgroundDash{
        background-image: url("https://i.imgur.com/xNMEX8F.png");
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        width: 100vw;
    }

    .containerDash{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        width: 100%;
        /* height: 100vh */
    }

    .userBio{
        color: white;
        width: 90%;
        height: 150px;
        text-align: center;
        border: 1px solid var(--gray-1);
        padding: 10px;
        border-radius: 20px;
        overflow-y: scroll
    }

    h2{
        width: 100%;
        height: 100px;
        text-align: center;
        word-break: break-all
    }

    .questionAreaTitle{
        margin: 40px 0px 20px 0px;
        align-self: baseline;
        color: var(--white);
        margin-left: 50px;
    }

    .questionArea{
        width: 90%;
        max-height: 400px; 
        overflow: hidden;
        overflow-y: scroll;
    }

    .questionCard{
        width: 100%;
        height: 150px;
        border: 2px solid var(--gray-1);
        border-radius: 20px;
        margin-top: 30px;
        color: var(--white);
        font-size: 0.7rem;
    }

    
    .searchArea{
        display: flex;
        align-self: flex-end;
        width: 100%;
        height: 70px;
    } 

    .questionAreaTitle{
        margin-top: 100px;
        z-index: 999;
        margin: 40px;
    }


    @media(max-width: 770px){
        flex-direction: column;

        .searchArea{
        display: none;
         }
        
    }
`

export const StyledAdminCard = styled.div`
    width: 90%;
    height: 150px;
    display: flex;
    margin-top: 20px;

    img{
        width: 100%;
        height: 100%;
    }

    .userContent{
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        color: var(--white);
        font-size: 0.7rem;
        width: 50%;
        height: 100px;
    }

    span{
        color: green;
    }

`

