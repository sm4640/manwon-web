import React, { useState } from "react";
import List from "../components/List";
import styled from "styled-components";
import MenuBlock from "../components/MenuBlock";
import SellerMenu from "./SellerMenu";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
    background: #f7e8dd;
    width: 100vw;
    height: 100vh;
    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
        display: none;
    }
`;

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
            <article>
                <section className="team">
                    <h1>만원 프로젝트</h1>
                    <ol>
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
                                <List
                                    key={team}
                                    team={team}
                                    onClick={() => handleTeamClick(team)}
                                />
                            );
                        })}
                    </ol>
                </section>
            </article>
            {/* {selectedTeam && <MenuBlock selectedTeam={selectedTeam} />} */}
            {/* <SellerMenu selectedTeam={selectedTeam} /> */}
        </Background>
    );
}

export default SellerHome;
