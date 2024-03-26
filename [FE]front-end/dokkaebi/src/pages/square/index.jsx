import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import Background from "../../images/channel/background4.gif";
import UserList from "../../components/square/UserList";
import RoomList from "../../components/square/RoomList";
import ChatContainer from "../../components/square/ChatContainer";
import TopButtons from "../../components/square/TopButtons";
import styles from "./index.module.css";

export default function Square() {
  // 배경 GIF 설정
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
  };

  // useEffect(() => {
  //   return () => {
  //     console.log("Square 페이지 이탈");
  //   };
  // }, []);

  return (
    <div style={backgroundStyle} className={styles.squareContainer}>
      {/* 상단 버튼들 */}
      <TopButtons />

      {/* 광장 메인 영역 (좌/우 컨테이너로 분리)*/}
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          {/* 유저 리스트 */}
          <UserList />
        </div>

        <div className={styles.rightContainer}>
          {/* 방 목록 컴포넌트 */}
          <RoomList />
          {/* 채팅창 컨테이너 */}
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}
