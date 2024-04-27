import React from "react";
import styled from "styled-components";
import Block from "./Block";
import { SiGithub, SiInstagram } from "react-icons/si";

import {
  SiAwsamplify,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiSpring,
} from "react-icons/si";

const AboutWrapper = styled.div`
  display: flex;
  width: 70%;
`;

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 870px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
  }
`;

const LinkTrans = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Image = styled.div`
  width: 330px;
  height: 450px;
  border-radius: 16px;
  background-image: url("img/me.jpeg");
  background-position: center;
  background-size: cover;
  margin-left: 10px;

  @media (min-width: 1300px) {
    width: 270px;
    height: 450px;
    border-radius: 16px;
    background-image: url("img/me.jpeg");
    background-position: center;
    background-size: cover;
    margin-left: -70px;
  }
`;

const GridWrapper = styled.div`
  margin: 30px auto;
  text-align: center;

  @media (min-width: 870px) {
    margin: 30px auto;
    margin-left: 20px;
    text-align: left;
  }

  @media (min-width: 1300px) {
    margin-left: -70px;
    text-align: left;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 350px);
  grid-auto-rows: minmax(auto);
  grid-auto-flow: dense;
  grid-gap: 5px;

  @media only screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
  }
`;

const About = () => {
  return (
    <Block>
      <AboutWrapper>
        <AboutLayout>
          <Image />
          <GridWrapper>
            <h1>About Me</h1>
            <InfoGrid>
              <div>
                <h3>Achievement</h3>
                <p>201.03 ~ 2014.02 &nbsp;&nbsp;일산동고등학교</p>
                <p>2016.03 ~ 2016.03 &nbsp;&nbsp;중부대 전기전자공학과</p>
                <p>
                  2021. 03 ~
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;단국대
                  소프트웨어학과
                </p>
                <p>2022.09 ~ 2023.03 &nbsp;&nbsp; 부트캠프 </p>
              </div>
              <div>
                <h3>Stack</h3>
                <p>
                  <SiPython />
                  &nbsp;&nbsp;Python
                </p>
                <p>
                  <SiDocker />
                  &nbsp;&nbsp;Docker
                </p>
                <p>
                  <SiGit />
                  &nbsp;&nbsp;Git
                </p>
                <p>
                  <SiSpring />
                  &nbsp;&nbsp;Spring
                </p>
                <p>
                  <SiMysql />
                  &nbsp;&nbsp;Mysql
                </p>
              </div>
              <div>
                <h3>Like</h3>
                <p>🎹 음악을 좋아합니다</p>
                <p>🎞️ 영화, 드라마를 좋아합니다</p>
                <p>🏃‍♂️ 운동을 즐깁니다</p>
              </div>
              <div>
                <h3>Code</h3>
                <LinkTrans>
                  <p>
                    <span
                      onClick={() =>
                        window.open("https://github.com/willBeDuke/Online-town-market.git", "_blank")
                      }
                    >
                      <SiGithub /> 중고거래 온라인 스토어 
                    </span>
                  </p>
                  <p>
                    <span
                      onClick={() =>
                        window.open("https://github.com/GraduationDku/tastyHub.git", "_blank")
                      }
                    >
                      <SiGithub /> 캡스톤 졸업프로젝트 - tastyhub
                    </span>
                  </p>
                  <p>
                    <span
                      onClick={() =>
                        window.open("https://github.com/skyriv213/Note-Algorithm.git", "_blank")
                      }
                    >
                      <SiGithub /> 알고리즘 문제풀이 
                    </span>
                  </p>
                </LinkTrans>
              </div>
              <div>
                <h3>Youtube 링크 삽입 항목</h3>
                <LinkTrans>
                    <p> <span
                      onClick={() =>
                        window.open("https://www.youtube.com/watch?v=yYbnZVPhMBA", "_blank")
                      }
                    >🎹 음악을 좋아합니다</span></p>

                </LinkTrans>
              </div>
              <div>
                <h3>&nbsp;</h3>
                <pre>
                  스스로 느끼기에 아직 부족하다고 느끼며 <br></br>계속해서
                  성장하고 싶습니다.!
                </pre>
                <p>잘 부탁드립니다 🙏</p>
              </div>
            </InfoGrid>
          </GridWrapper>
        </AboutLayout>
      </AboutWrapper>
    </Block>
  );
};

export default About;
