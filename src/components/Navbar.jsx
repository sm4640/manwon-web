import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const BabyakButton = styled.button`
    width: 180px;
    height: 50px;
    border: none;
    border-radius: 100px;
    margin: 10px;
    background-color: ${(props) => (props.$isActive ? '#F3FDF9' : '#27A09E')};
    color: ${(props) => (props.$isActive ? '#27A09E' : '#F3FDF9')};
    font-size: 24px;
    font-weight: 600;
    transition: background-color 0.1s;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.$isActive ? '#F3FDF9' : '#27A09E'};
        color: ${(props) => (props.$isActive ? '#27A09E' : '#F3FDF9')};
    }
`;

const ButtonDiv = styled.div`
    width: 840px;
    height: 80px;
    background-color: #27A09E;
    border-radius: 50px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Navbar() {
    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/events/pending')) {
            setActiveButton('waiting');
        } else if (location.pathname.includes('/events/scheduled')) {
            setActiveButton('confirmed');
        } else if (location.pathname.includes('/events/result')) {
            setActiveButton('ended');
        } else {
            setActiveButton('');
        }
    }, [location]);

    const handleClick = (buttonName, path) => {
        navigate(path);
    };

    return (
        <>
            <ButtonDiv>
                <BabyakButton
                    $isActive={activeButton === 'waiting'}
                    onClick={() => handleClick('waiting', '/events/pending')}
                >
                    5/20 (월)
                </BabyakButton>
                <BabyakButton
                    $isActive={activeButton === 'confirmed'}
                    onClick={() =>
                        handleClick('confirmed', '/events/scheduled')
                    }
                >
                    5/21 (화)
                </BabyakButton>
                <BabyakButton
                    $isActive={activeButton === 'ended'}
                    onClick={() => handleClick('ended', '/events/result')}
                >
                    5/22 (수)
                </BabyakButton>
                <BabyakButton
                    $isActive={activeButton === 'ended'}
                    onClick={() => handleClick('ended', '/events/result')}
                >
                    5/23 (목)
                </BabyakButton>
            </ButtonDiv>
        </>
    );
}

export default Navbar;
