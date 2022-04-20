import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import "./Delete.css";


export default function Delete(props) {
  const { DeleteOpen, setDeleteOpen, selectionModel } = props;
 
  function handleFormSubmit(e) {
    e.preventDefault();
    postInvoice(selectionModel);
  }
  const postInvoice = (selectionModel) => {
    axios
      .get(
        "http://localhost:8080/servlet/Delete?sl_no=" + selectionModel
      )
      .then((d) => {
        setDeleteOpen(false);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <Modal
        open={DeleteOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleFormSubmit}>
          <Box className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete Records ?
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Are you sure you want to delete the record?
            </Typography>
            <br></br>
            <div className="modal-actions">
              <Button type="submit" variant="outlined" >
                Delete
              </Button>
              <Button variant="outlined"
                onClick={() => {
                  setDeleteOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
