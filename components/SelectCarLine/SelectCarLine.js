import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './SelectCarLine.module.css';


export default function SelectCarLine({onSelect}) {

  return (
    <Box sx={{ minWidth: 120 }} className={styles.grid} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Car Line</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={onSelect}
          label="Car Line"
        >
          <MenuItem value="G60">G60</MenuItem>
          <MenuItem value="G70">G70</MenuItem>
          <MenuItem value="G26">G26</MenuItem>
          <MenuItem value="G28">G28</MenuItem>
          <MenuItem value="I20">I20</MenuItem>
          <MenuItem value="G08LCI">G08LCI</MenuItem>
          <MenuItem value="U11">U11</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


