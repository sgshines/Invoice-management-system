import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';


export default function AnalyticsModal(props) {
  const { Analyticsopen, setAnalyticsopen } = props;

  return (
    <>
      <Dialog size='sm'
        open={Analyticsopen}
      >
        <form>
        <DialogTitle style={{ backgroundColor: "#10243a", color: "#FFFFFF" }}>Analytics View</DialogTitle>
        <DialogContent style={{ backgroundColor: "#10243a", color: "#FFFFFF" }}>
          <Grid container spacing={2} columns={24}>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%"}}
              id="invoice_currency"
              label="Invoice Currency"
              multiline
              variant="filled"
              size='small'
              name="invoice_currency"
            />
            </Grid>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%"}}
              id="due_in_date"
              label="Due Date"
              name="due_in_date"
              multiline
              variant="filled"
              size='small'
            />
            </Grid>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%"}}
              id="baseline_create_date"
              label="Baseline Create Date"
              name="baseline_create_date"
              multiline
              variant="filled"
              size='small'
            />
            </Grid>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%"}}
              id="clear_date"
              label="Clear Date"
              name="clear_date"
              multiline
              variant="filled"
              size='small'
            />
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#10243a", color: "#FFFFFF", paddingLeft: "15px" }}>
              <Button 
              onClick={() => {
                  setAnalyticsopen(false);
                }}
              type="submit" style={{ minWidth: "50%", color: "#FFFFFF", }} variant="outlined">
                Submit
              </Button>
              <Button
                style={{ minWidth: "50%", color: "#FFFFFF", }}
                variant ="outlined"
                onClick={() => {
                  setAnalyticsopen(false);
                }}
              >
                Cancel
              </Button>
            </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
