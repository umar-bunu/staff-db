import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function ShowModal({ selectedRow, shouldShowModal, setshouldShowModal }) {
  console.log(selectedRow);
  return (
    <div>
      <Modal
        open={shouldShowModal == null ? false : true}
        onClose={function () {
          setshouldShowModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "rgb(7, 30, 73)",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() => {
                setshouldShowModal(false);
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ShowModal;
