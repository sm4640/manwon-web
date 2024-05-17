import React, { useState } from "react";
// import List from "../components/List";
import styled from "styled-components";
import MenuBlock from "../components/MenuBlock";
import SellerMenu from "./SellerMenu";
import { useNavigate } from "react-router-dom";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import ListTest from "../components/ListTest";

const Background = styled.div`
    background: #FFF6F6;
    width: 100vw;
    /* height: 100vh; */
    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
        display: none;
    }
`;

const ManwonText = styled.div`
font-size: 26px;
font-weight: 600;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1vw;
padding-top: 20px;
`;

const Contents = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.3vh;
`

function SellerHome() {
    // const [selectedTeam, setSelectedTeam] = useState(null); // 선택된 팀의 정보를 저장하는 상태
    const navigate = useNavigate();

    const handleTeamClick = (team) => {
        // setSelectedTeam(team.split("팀")[0]); // 클릭된 팀의 정보를 상태에 저장
        navigate(`/sellermenu/${team.split("팀")[0]}`);
        // console.log(team.split("팀")[0]);
        // console.log(selectedTeam);
    };

    return (
        <Background>
            <ManwonText>
                    <FaMoneyBill1Wave size="20px"/>
                    만원프로젝트 판매자 홈
                    <FaMoneyBill1Wave />
            </ManwonText>
            <Contents>
                {[
                    "1팀",
                    "2팀",
                    "3팀",
                    "4팀",
                    "5팀",
                    "6팀",
                    "7팀",
                    "8팀",
                    "9팀",
                    "10팀",
                    "11팀",
                    "12팀",
                    "13팀",
                    "14팀",
                    "15팀",
                    "16팀",
                    "17팀",
                    "18팀",
                ].map((team) => {
                    return (
                        <ListTest
                            key={team}
                            team={team}
                            onClick={() => handleTeamClick(team)}
                        />
                    );
                })}
            </Contents>
           
        </Background>
    );
}

export default SellerHome;
