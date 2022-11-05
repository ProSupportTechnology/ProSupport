import styled from "styled-components";

export const StyledRegister = styled.div`

    display: flex;
    flex-direction: column;

    width:100vw;
    height: 100vh;

    align-items: center;

    .containerRegisterLogin{
        width: 90%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .loginBackground{
        width: 90%;
        height: 50%;
        max-width: 400px;
        border-radius: 20px 20px 0px 0px;
        margin-top: 20px;
    }

    .btnLogin{
        position: relative;
        top: -620px;
        background-color: white;
    }

    @media(min-width: 1000px){
        .containerRegisterLogin{
            height: 100vh;
            width: 100vw;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .loginBackground{
            min-width: 400px;
            max-width: 30%;
            height: 70%;
            border-radius: 20px 0px 0px 20px;
            margin: 0px;
        }

        .btnLogin{
        position: relative;
        top: -50%;
        left: -200px;
        background-color: white
        }
    }

    /* @media(min-width: 300px){
        .btnLogin{
        top: -500px;
        }
    } */

`
