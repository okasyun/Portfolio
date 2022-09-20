import React, { FC } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

type Props = {
  title: string;
  items: {
    name: string;
    image: string;
    rating: number;
  }[];
};

const SkillCard: FC<Props> = (props: Props) => {
  const { title, items } = props;
  return (
    <Card
      sx={{
        maxWidth: "90%",
        margin: "0 auto",

        boxShadow: 5,
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Divider>
          <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Divider>
        <StyledSkill>
          {items.map((item) => (
            <StyledItem key={item.name}>
              <Typography variant="h6">{item.name}</Typography>
              <Box
                component="img"
                src={item.image}
                sx={{
                  maxWidth: "50%",
                  height: "50px",
                }}
              />
              <Box>
                <Rating value={item.rating} readOnly></Rating>
              </Box>
            </StyledItem>
          ))}
        </StyledSkill>
      </CardContent>
    </Card>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`;

const StyledItem = styled.div`
  text-align: center;
  width: calc(33.3333% - 20px);
  @media screen and (max-width: 900px) {
    width: calc(50% - 20px);
  }

  margin: 10px;
`;
export default SkillCard;
