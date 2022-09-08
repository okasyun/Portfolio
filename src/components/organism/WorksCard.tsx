import React, { FC, memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineMail } from "react-icons/ai";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

type Props = {
  image: string;
  title: string;
  description: string;
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "Exo",
      "sans - serif",
      "Noto Sans JP",
      // 使用したいフォントを以降に羅列してください
    ].join(","), // フォント
    h5: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: purple[100],
    },
  },
});

const WorksCard: FC<Props> = memo((props: Props) => {
  const { image, title, description } = props;
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
        sx={{ width: 300, maxHeight: 400, cursor: "pointer" }}
        onClick={handleClickOpen}
      >
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <ThemeProvider theme={theme}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </ThemeProvider>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            ソースコード
          </Button>
          <Button size="small" variant="contained">
            デモサイト
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            startIcon={<AiOutlineMail />}
            variant="contained"
          >
            ソースコード
          </Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            デモサイト
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default WorksCard;
