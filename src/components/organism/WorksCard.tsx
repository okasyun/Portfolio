import React, { FC, memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebAssetIcon from "@mui/icons-material/WebAsset";

type Props = {
  image: string;
  title: string;
  cardDescription: string;
  dialogDescription: string;
  tools: string[];
  link: {
    demoBoolean: boolean;
    sourceCode: string;
    demoSite: string;
  };
};

const WorksCard: FC<Props> = memo((props: Props) => {
  console.log("レンダリングされました");
  const { image, title, cardDescription, dialogDescription, tools, link } =
    props;
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          "@media screen and (max-width:900px)": {
            width: "90%",
          },
          maxHeight: 500,
          width: 400,
          cursor: "pointer",
          boxShadow: 5,
          borderRadius: "20px",
        }}
        onClick={handleClickOpen}
      >
        <CardMedia component="img" height="200" image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Divider sx={{ mb: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {cardDescription}
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
        <DialogTitle
          sx={{
            fontWeight: "bold",
            "@media screen and (max-width:900px)": {
              textAlign: "center",
            },
            backgroundColor: "#f5f5f5",
          }}
        >
          {title}
        </DialogTitle>
        <Divider sx={{}} />
        <DialogContent>
          <Box
            component="img"
            src={image}
            sx={{ maxWidth: "100%", maxHeight: "350px", objectFit: "cover" }}
          ></Box>
          <DialogContentText mt={2} lineHeight={1.5}>
            {dialogDescription}
          </DialogContentText>

          <Stack direction="row" flexWrap={"wrap"} gap={"8px"} mt={2}>
            {tools.map((tool) => (
              <Chip key={tool} label={tool} sx={{ margin: 0 }}></Chip>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            href={link.sourceCode}
            onClick={handleClose}
            startIcon={<GitHubIcon />}
            variant="contained"
          >
            ソースコード
          </Button>
          {link.demoBoolean && (
            <Button
              href={link.demoSite}
              onClick={handleClose}
              startIcon={<WebAssetIcon />}
              variant="contained"
            >
              デモサイト
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
});

export default WorksCard;
