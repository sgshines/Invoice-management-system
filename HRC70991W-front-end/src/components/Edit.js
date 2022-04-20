import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import axios from 'axios';

export default function Edit(props) {
  const { Editopen, setEditOpen, selectionModel, inv_curr, cust_pay_term } = props;
  const [invCurrValue, setinvCurrvalue] = useState(inv_curr);
  const [invCustValue, setinvCustValue] = useState(cust_pay_term);


  const handleInvCurrChange = (e) => {
    setinvCurrvalue(e.target.value);
  };
  const handleInvCustValue = (e) => {
    setinvCustValue(e.target.value);
  };
  function handleFormSubmit(e) {
    e.preventDefault();
    submit(e);
  }
  const submit = (e) => {
    let invoice_currency = e.target["invoice_currency"].value;
    let cust_payment_terms = e.target["cust_payment_terms"].value;

    let data = {
      invoice_currency,
      cust_payment_terms,
      selectionModel,
    };
    console.log(data);
    postInvoice(data);
  };
  const postInvoice = (data) => {
    axios
      .get(
        `http://localhost:8080/servlet/Edit?sl_no=${data.selectionModel}&invoice_currency=${data.invoice_currency}&cust_payment_terms=${data.cust_payment_terms}`
      )
      .then((d) => {
        console.log(d);
        setEditOpen(false);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <Dialog size='sm' 
        open={Editopen}>
        <form
        onSubmit={handleFormSubmit}
        >
        <DialogTitle style={{ backgroundColor: "#10243a", color: "#FFFFFF" }}>Edit</DialogTitle>
        <DialogContent style={{ backgroundColor: "#10243a", color: "#FFFFFF" }}>
        <Grid container spacing={2} columns={24}>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%"}}
              id="invoice_currency"
              label="Invoice Currency"
              variant="outlined"
              name="invoice_currency"
              onChange={handleInvCurrChange}
            />
            </Grid>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%"}}
              id="cust_payment_terms"
              label="Customer Payment Terms"
              name="cust_payment_terms"
              variant="outlined"
              onChange={handleInvCustValue}
            />
            </Grid>
            </Grid>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#10243a", color: "#FFFFFF", paddingLeft: "15px" }}>
              <Button 
              variant = "outlined"
              type="submit" style={{ minWidth: "50%", color: "#FFFFFF", }}>
                Edit
              </Button>
              <Button
                style={{ minWidth: "50%", color: "#FFFFFF", }}
                variant = "outlined"
                onClick={() => {
                  setEditOpen(false);
                }}
              >
                Cancel
              </Button>
              </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
