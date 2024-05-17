import React from "react";
import styled from "styled-components";
import MenuBlock from "../components/MenuBlock";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Background = styled.div`
    background: #FFF6F6;
    width: 100vw; // 화면 전체 너비
    height: 100vh; // 화면 전체 높이
`;

const Team = styled.div`
font-size: 30px;
font-weight: 700;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
/* gap: 1vw; */
padding: 20px;
`;

const Contents = styled.div`
/* margin-top: px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4vh;
`

function SellerMenu() {
    const { selectedTeam } = useParams();
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        if (selectedTeam) {
            fetchMenuData();
            console.log("Selected Team:", selectedTeam); // 1. selectedTeam 값 확인
        } else {
            console.log("Selected Team is not defined"); // 1. selectedTeam이 정의되지 않은 경우 확인
        }
    }, [selectedTeam]); // useEffect를 selectedTeam에 의존하도록 설정

    const fetchMenuData = () => {
        axios
            .get(`/seller/info/${selectedTeam}`)
            .then((response) => {
                setMenuList(response.data);
                console.log("Menu List:", response.data); // 2. menuList 데이터 확인
            })
            .catch((error) => {
                console.log("Error fetching menu data: ", error);
            });
    };

    useEffect(() => {
        console.log("Menu List State:", menuList); // 3. menuList 상태 확인
    }, [menuList]); // useEffect를 menuList에 의존하도록 설정

    return (
        <Background>
            <Team>{selectedTeam}팀</Team>
            <Contents>
                {menuList["team"] &&
                    menuList["team"].map((menu, index) => (
                        <MenuBlock
                            key={index}
                            menuInfo={menu}
                            selectedTeam={selectedTeam}
                        />
                    ))}
            </Contents>
            
            {/* {menuList["team"].length === 0 && <div>No menu data available</div>} */}
        </Background>
    );
}

export default SellerMenu;
