import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Type,News, Score, Impact, Probability) {
  return { Type, News, Score, Impact, Probability };
}

const rows = [
  createData('ERU', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "Neutral", 4.0),
  createData('INR', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "High", 4.3),
  createData('CAD', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes","+1", "Medium", 6.0),
  createData('CAD', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "Neutral", 4.3),
  createData('OIL', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "High", 3.9),
];

export default function NewsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="center">News</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="center">Impact</TableCell>   
            <TableCell align="center">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Type}
              </TableCell>
              <TableCell align="left">{row.News}</TableCell>
              <TableCell align="left">{row.Score}</TableCell>
              <TableCell align="center">{row.Impact}</TableCell>
              <TableCell align="center">{row.Probability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}