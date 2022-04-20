import React from 'react';
import Typography from '@mui/material/Typography';

function Footer() {
    let copyright = String.fromCodePoint(0x00A9);
  return (
      <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',}}>
      <Typography style={{ color: 'white'}}>
        Privacy Policy |{copyright} 2022 Highradius Corporation. All Rights Reserved.
      </Typography>
      </div>
  );
}

export default Footer;