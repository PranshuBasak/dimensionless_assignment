import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,Type,News, Score, Impact, Probability) {
  return { name,Type, News, Score, Impact, Probability };
}

const rows = [
  createData('1','ERU', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "Neutral", "High"),
  createData('2','INR', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "High", "High"),
  createData('3','CAD', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes","+1", "Medium", "High"),
  createData('4','CAD', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "Neutral", "High"),
  createData('6','OIL', "The Europe has steady against US Dollar on Thursday as the market ponders the path of Fed rates hikes", "+1", "High", "High"),
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
              <TableCell component="th" scope="row" >
                <div className='text-extrabold'>
                  {row.Type}
                </div>
              </TableCell>
              <TableCell align="left">{row.News}</TableCell>
              <TableCell align="left">{row.Score}</TableCell>
              <TableCell align="center">{row.Impact}</TableCell>
              <TableCell align="center" className=''>
                <div className="m-2 bg-sky-100 p-1 rounded text-sky-400">{row.Probability}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}