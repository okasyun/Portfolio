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
import { AiOutlineMail } from "react-icons/ai";

type Props = {
  image: string;
  title: string;
  cardDescription: string;
  dialogDescription: string;
};

const WorksCard: FC<Props> = memo((props: Props) => {
  const { image, title, cardDescription, dialogDescription } = props;
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
        sx={{ width: 350, maxHeight: 400, cursor: "pointer", boxShadow: 5 }}
        onClick={handleClickOpen}
      >
        <CardMedia component="img" height="200" image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Divider sx={{ bgcolor: "text.secondary", mb: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {cardDescription}
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>{title}</DialogTitle>
        <Divider sx={{ bgcolor: "text.secondary", mb: 1 }} />
        <DialogContent>
          <Box
            component="img"
            src={image}
            sx={{ maxWidth: "100%", height: "400px", objectFit: "cover" }}
          ></Box>
          <DialogContentText>{dialogDescription}</DialogContentText>
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
