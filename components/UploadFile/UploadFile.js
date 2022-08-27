import React from 'react'
import { useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './UploadFile.module.css'

export default function UploadFile({uploadCurrentData,uploadNewData,analyzeButtonCliked }) {

  return (
    <div >

    <h4>Current Requirement</h4>
    <div>
      <input onChange={uploadCurrentData} type="file" />
    </div>

    <h4>New Requirement</h4>
    <div>
      <input onChange={uploadNewData} type="file" />
    </div>
    <button onClick={() => uploadData(currentFile, neWFile)}>Analyse</button>
    <button className={styles.analyzeBT} onClick={analyzeButtonCliked}>Analyze</button>
  </div>
  )
}
