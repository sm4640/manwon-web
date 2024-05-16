import React, { usestate } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
width: 350px;
height:50px;
background-color: #FB829D;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


`;

const ListContainer = styled.div`
    width: 340px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`;

const Text = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #F7E8DD;

`

const ListTest = ({ team, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        onClick(team); // 클릭된 팀의 정보를 전달
        // navigate("/sellermenu"); // 페이지 이동
    };

    return (
        <Container>
            <ListContainer onClick={handleClick}>
                <Text>{team}</Text>
                <Text>상품 수량 수정하러 가기</Text>
                <IoIosArrowForward size='24px' color='#F7E8DD'/>
                
            </ListContainer>
        </Container>
    );
};

export default ListTest;
