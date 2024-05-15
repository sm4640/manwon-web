import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//styled component 작성
const Container = styled.div`
    width: 306px;
    height: 302px;
    background-color: #f95965;
    border-radius: 20px;
    margin: auto;
    padding-right: 20px;
`;

const Text = styled.div`
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    position: relative;
    left: 20px;
    line-height: 50px;
    padding-right: 20px;
`;

const Line = styled.div`
    border-top: 2px solid #ffffff;
    margin: 30px 0px;
`;

const Total = styled.div`
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: -15px;
`;

const Button = styled.button`
    background-color: #ffffff;
    color: #f95965;
    border: none;
    border-radius: 20%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    cursor: pointer;
    margin-right: 10px;
`;
const ButtonWrapper = styled.div`
    margin-left: 180px;
    margin-top: -49px;
`;

const Header = styled.div`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 20px;
`;

function MenuBlock({ menuInfo, selectedTeam }) {
    const { menu, price, remain, sell } = menuInfo;
    const [countRemain, setCountRemain] = useState(remain);
    const [countSell, setCountSell] = useState(sell);
    console.log("team is: ", selectedTeam);
    const revenue = price * countSell;
    useEffect(() => {
        postCurrentCount();
    }, [countRemain, countSell]);

    const postCurrentCount = () => {
        const count = {
            team: selectedTeam,
            menu: menu,
            remain: countRemain,
            sell: countSell,
        };
        axios
            .post("/seller/count/", count)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const ps = () => {
        if (countRemain >= 0) {
            setCountRemain(countRemain + 1);
            // postCurrentCount();
        }
    };
    const pp = () => {
        setCountSell(countSell + 1);
        // postCurrentCount();
    };
    const ms = () => {
        if (countRemain > 0) {
            setCountRemain(countRemain - 1);
            // postCurrentCount();
        }
    };
    const mp = () => {
        if (countSell > 0) {
            setCountSell(countSell - 1);
            // postCurrentCount();
        }
    };
    return (
        <>
            <Container>
                <Text>메뉴명: {menu}</Text>
                <Text>가격: {price}원</Text>
                <Text>
                    재고 수량:{countRemain}
                    <ButtonWrapper>
                        <Button onClick={ms}>-</Button>
                        <Button onClick={ps}>+</Button>
                    </ButtonWrapper>
                </Text>
                <Text>
                    판매 수량:{countSell}
                    <ButtonWrapper>
                        <Button onClick={mp}>-</Button>
                        <Button onClick={pp}>+</Button>
                    </ButtonWrapper>
                </Text>
                <Line></Line>
                <Total>현재 수익: {revenue}원</Total>
            </Container>
        </>
    );
}

export default MenuBlock;
