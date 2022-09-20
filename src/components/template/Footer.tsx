import React from "react";
import styled from "styled-components";
import { IconButton, Typography } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <a href="https://github.com/okasyun">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
        <a href="https://twitter.com/takoyakimayonai">
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </a>
        <a href="https://qiita.com/gensokyo0326">
          <IconButton>
            <LinkIcon />
          </IconButton>
        </a>
      </StyledDiv>
      <Typography mt={1} mb={2} variant="h6" align="center">
        &copy;Shun Okamoto
      </Typography>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  margin: 20px 0;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
`;

export default Footer;
