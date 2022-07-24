import React from "react";
import Image from "next/image";
import logoWhite from "../public/logo_white.svg";
import styled from "styled-components";
import fb from "../public/icon-facebook.svg";
import tw from "../public/icon-twitter.svg";
import pin from "../public/icon-pinterest.svg";
import ins from "../public/icon-instagram.svg";

function Footer(props) {
  return (
    <FooterWrapper>
      <SubWrapper>
        <Socials>
          <Image src={logoWhite} />
          <Row>
            <Image src={fb} />
            <Image src={tw} />

            <Image src={pin} />
            <Image src={ins} />
          </Row>
        </Socials>

        <Details>
          <Vertical>
            <h3>Features</h3>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </Vertical>

          <Vertical>
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </Vertical>

          <Vertical>
            <h3>Company</h3>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </Vertical>
        </Details>
      </SubWrapper>
    </FooterWrapper>
  );
}

/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from "@emotion/react";

const FooterWrapper = styled.div`
  font-family: ${(props) => props.theme.poppins};
  width: 100%;
  height: 270px;

  padding-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${(props) => props.theme.veryDarkBlue};
  color: ${(props) => props.theme.grey};
  font-size: 18px;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 67%;
  height: 100%;
  margin-left: -228px;
`;

const Socials = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 25px;
  flex-direction: column;
  margin-top: 17px;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 60px;
  flex-direction: row;
  width: 550px;
  line-height: 0.3;

  p {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.cyan};
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 170px;
`;

const Vertical = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export default Footer;
