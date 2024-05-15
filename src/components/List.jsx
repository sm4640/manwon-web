import React, { usestate } from "react";
import { useNavigate } from "react-router-dom";

const List = ({ team, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        onClick(team); // 클릭된 팀의 정보를 전달
        // navigate("/sellermenu"); // 페이지 이동
    };

    return (
        <>
            <li onClick={handleClick}>
                <span>{team}</span>
                <div>
                    <div>상품 수량 수정하러 가기</div>
                    <div className="button-list">
                        <button>{"＞"}</button>
                    </div>
                </div>
            </li>

            <style jsx>{`
                article {
                    height: 10vh;
                    width: 100vw;
                    max-width: 30rem;
                    margin: 0 auto;
                    padding: 1.5rem;
                    background: #ffc0cb21;
                }

                article h1 {
                    padding: 0 0.5rem;
                }

                section.list {
                    display: flex;
                    flex-direction: column;
                }

                section.list ol {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem; //블럭 두께 입력
                    border-radius: 0.5rem;
                    background-color: pink;
                    box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
                    color: white;
                    height: 2rem;
                }

                li span {
                    font-size: 1.5rem;
                    font-weight: 500;
                }

                li div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }

                li div:first-child {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 0 0.5rem;
                    font-size: 1.3rem;
                    font-weight: 700;
                }

                li div.button-list {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                }

                li div.button-list button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 1.7rem;
                    height: 1.7rem;
                    cursor: pointer;
                    border-radius: 5px;
                    border: none;
                    background: pink;
                    font-size: 1.3rem;
                    font-weight: 500;
                }
            `}</style>
        </>
    );
};

export default List;
