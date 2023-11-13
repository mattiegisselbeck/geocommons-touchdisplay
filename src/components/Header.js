import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SvgIcon,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" style={{ flex: 2, textAlign: "left" }}>
          John R. Borchert Map Library x GeoCommons
        </Typography>
        <Tooltip title="Information">
          <IconButton
            color="inherit"
            onClick={handleDialogOpen}
            sx={{
              position: "absolute",
              right: "1%",
              transform: "translateX(1%)",
            }}
          >
            <SvgIcon component={InfoIcon} />
          </IconButton>
        </Tooltip>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This application enables users to interact with maps via hand
              gestures.
              <br />
              <br />
              <b>Gestures</b>
              <br />✊ Use a closed fist and move your hand to pan the map in
              the direction you move your hand.
              <br />
              👍 Use a thumbs up to zoom out.
              <br />
              👎 Use a thumbs down to zoom in.
              <br />
              ☝️ Use your index finger pointing up to return to the initial map
              position.
              <br />
              ✌️ Use the Victory Hand/Peace Sign symbol to turn gesture controls
              off.
              <br />
              <br />
              Created by Luke Zaruba, University of Minnesota, MGIS Program
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
