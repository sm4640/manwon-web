import React from "react";
import styled from "styled-components";
import MenuList from "../components/MenuList";
import ManwonText from "../components/ManwonText";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Background = styled.div`
    background: #f3fdf9;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
`;

const MenuWrapper = styled.div`
    flex-basis: calc(33.33% - 20px);
    display: flex;
    justify-content: center;
`;

function CustomerHome() {
    const currentDate = new Date();
    const today = currentDate.getDate();

    const [todayMenuList, setTodayMenuList] = useState([]);
    useEffect(() => {
        // postToday();
        setInterval(() => postToday(), 5000);
    }, [today]);
    const postToday = () => {
        const data = {
            date: 21,
        };
        axios
            .post("/buyer/info/", data)
            .then((response) => {
                console.log(response.data);
                setTodayMenuList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Background>
            <Container>
                <ManwonText />
                {todayMenuList["all"] &&
                    todayMenuList["all"].map((menus, index) => (
                        <MenuWrapper>
                            <MenuList key={index} menus={menus} />
                        </MenuWrapper>
                    ))}
            </Container>
        </Background>
    );
}

export default CustomerHome;
