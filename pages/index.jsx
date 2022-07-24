import Navbar from "../components/Navbar";
import workingPeople from "../public/people working.svg";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import * as theme from "../config/theme";
import styled from "styled-components";
import Head from "next/head";
import bannerImage from "../public/Meteor.svg";
import Card from "../components/Card";
import brandImage from "../public/icon-brand-recognition.svg";
import React from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Home() {
  let shortenLinks = [
    {
      user_Link: "yourgiveLink.com",
      shortLink: "ourShortenLink.com",
    },
  ];

  const [userLink, setUserLink] = useState("");

  const [shortLinks, setShortLinks] = useState(shortenLinks);

  async function shortUrl() {
    if (userLink == "") {
      alert("Enter a link Please!");
    } else {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${userLink}`
      );
      const short_Link = await response.data.result.short_link;

      const newShortenLinks = { user_Link: userLink, shortLink: short_Link };

      setShortLinks([...shortLinks, newShortenLinks]);
    }

    setUserLink("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
      <title>Shortly</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Body>
        {/* stack overflow */}
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              background-color: #e6e6e6;
              min-height: "100vh";
              max-width: "100vw";
            }
          `}
        />

        {/* BODY */}

        <Navbar />

        <Heading>MORE THAN JUST </Heading>
        <Heading>SHORTER LINKS</Heading>

        <ImageDiv>
          <Image src={workingPeople} />
        </ImageDiv>

        {/* input boxess */}

        <InputLinksDiv>
          <InputDiv>
            <Image src={bannerImage} height={220} />
            <InputBox>
              <Input
                type="text"
                placeholder="Shorten a link here..."
                value={userLink}
                onChange={(e) => {
                  setUserLink(e.target.value);
                }}
              />
              <ShortButton onClick={shortUrl}>Shorten It!</ShortButton>
            </InputBox>
          </InputDiv>

          {shortLinks.map((item, index) => {
            return (
              <LinksDiv key={index}>
                <Links>
                  <p>{item.user_Link}</p>

                  <NewLink>
                    <p>{item.shortLink}</p>
                    <CopyToClipboard text={item.shortLink}>
                      <CopyButton>Copy</CopyButton>
                    </CopyToClipboard>
                  </NewLink>
                </Links>
              </LinksDiv>
            );
          })}
        </InputLinksDiv>

        {/* STATISSTIC */}

        <Statistics>
          <h1>Advanced Statistics</h1>

          <MiddleH3>
            <h3>
              Track how your links are performing across the web with our
              advanced statistic dashboard
            </h3>
          </MiddleH3>

          <Cards>
            <Line>{/* the cyan color line */}</Line>

            <Card
              heading="Brand Recognitions"
              details="Boost your brand recogination with each click. Generics links don't mean a thing. Branded links help instill confidence in your content"
              image={brandImage}
            />
            <Card
              heading="Brand Recognitions"
              details="Boost your brand recogination with each click. Generics links don't mean a thing. Branded links help instill confidence in your content"
              image={brandImage}
            />

            <Card
              heading="Brand Recognitions"
              details="Boost your brand recogination with each click. Generics links don't mean a thing. Branded links help instill confidence in your content"
              image={brandImage}
            />
          </Cards>
        </Statistics>

        {/* BANNER */}

        <Banner>
          <Image src={bannerImage} min-width={1440} height={250} />

          <BannerHeading>
            <h2>Boost your links today</h2>
            <Button>Get Started</Button>
          </BannerHeading>
        </Banner>

        {/* FOOTER */}

        <Footer />
      </Body>
    </ThemeProvider>
  );
}

/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from "@emotion/react";
import Footer from "../components/Footer";
import { useState } from "react";

const Heading = styled.h1`
  font-size: 109px;
  text-align: center;
  font-family: poppins;
  padding: 0;
  margin: 0;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1.2;
`;

const Banner = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: -7px;
  font-family: ${(props) => props.theme.poppins};
`;

const BannerHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -67%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: white;
    font-size: 40px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.cyan};
  padding: 16px 40px;
  border: none;
  border-radius: 45px;
  font-size: 20px;
  font-weight: 700;
  margin-top: -17px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const CopyButton = styled.div`
  background-color: ${(props) => props.theme.cyan};
  padding: 8px 30px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;

  color: white;

  &:hover {
    cursor: pointer;
    background: #99ffff;
  }
`;

const ShortButton = styled.div`
  background-color: ${(props) => props.theme.cyan};
  padding: 18px 10px;
  width: 150px;
  border: none;
  border-radius: 7px;
  font-size: 19px;
  font-weight: 700;
  text-align: center;
  font-family: ${(props) => props.theme.poppins};

  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div``;

const ImageDiv = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
`;

const Statistics = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.poppins};
  text-align: center;
  margin-bottom: 90px;
  h1 {
    font-size: 50px;
  }
`;

const MiddleH3 = styled.div`
  width: 48%;
  margin: auto;
  margin-top: -19px;
  h3 {
    font-size: 23px;
    color: ${(props) => props.theme.grey};

    line-height: 1.7;
    font-weight: 500;
  }
`;

const Cards = styled.div`
  position: relative;
  margin: auto;
  width: 94%;
  height: 400px;
  margin-top: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  height: 13px;
  width: 100%;
  z-index: -1;
  background: ${(props) => props.theme.cyan};
`;

const InputLinksDiv = styled.div`
  width: 100%;

  margin-top: -70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const InputDiv = styled.div`
  position: relative;
  width: 80%;
`;

const InputBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  font-size: 18px;
  font-family: ${(props) => props.theme.poppins};
  padding: 17px;
  margin: 10px;
  width: 720px;
  background: white;
  border: none;
  border-radius: 7px;
  ::placeholder {
    color: red;
  }
`;

const LinksDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  width: 76.5%;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 17px;
  padding: 5px;
  font-size: 18px;
  font-family: ${(props) => props.theme.poppins};

  p {
    padding-left: 25px;
  }
`;

const NewLink = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-right: 20px;
  p {
    color: ${(props) => props.theme.cyan};
  }
`;
