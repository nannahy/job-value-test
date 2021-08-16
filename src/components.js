export const StartContainer = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 30px;
    }
`;

export const Button = styled.button`
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: lightgray;

    &:hover {
        ${({disabled}) => !disabled && css`
        background: gray;
        cursor: pointer;
        `}
    }

    ${({disabled}) => disabled && css`
        opacity: 0.5;
    `}
`;

export const InfoContainer = styled.div`
    width: 200px;
    font-size: 14px;

    + div {
        margin-top: 20px;
    }

    > p {
        margin: 5px;;
        font-size: 16px;
        font-weight: bold;
    }

    > label {
        display: inline-block;
        font-size: 20px;
        width: 100px;
    }
`;

export const Input = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid lightgray;
    font-size: 20px;
`;