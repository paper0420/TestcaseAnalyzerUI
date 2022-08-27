import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './SelectTestcaseType.module.css'

export default function SelectTestcaseType({onSelect}) {

  return (
    <Box sx={{ minWidth: 150 }} className={styles.tcType} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Testcase Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Testcases Type"
          onChange={onSelect}
        >
          <MenuItem value="HV">HVRTU</MenuItem>
          <MenuItem value="Fusa">Fusa</MenuItem>
          <MenuItem value="Full">Full</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}


