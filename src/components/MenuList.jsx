import React from "react";
import styled from "styled-components";

const Block = styled.div`
    width: 316px;
    height: 202px;
    background-color: #71e5b6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Text = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

function MenuList({ menus }) {
    const { team, menu, price, remain } = menus;
    return (
        <Block>
            <Text>{team}팀</Text>
            <Text>메뉴명: {menu}</Text>
            <Text>가격: {price}</Text>
            <Text>현재 재고 수량: {remain}</Text>
        </Block>
    );
}

export default MenuList;
