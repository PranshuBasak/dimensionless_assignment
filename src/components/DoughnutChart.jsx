import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { margin: { right: 0 } }; 

export default function DoughnutChart() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2} className="h-[400px]">
      <Box flexGrow={1} className="h-full"> 
        <div className='font-bold mt-3 text-[20px]'>Average Score</div>
        <div className="h-full flex justify-start items-center w-full"> 
          <PieChart
            series={[
              {
                data: [
                  { value: 75,  fill: '#ff6384' },  
                  { value: 25,  fill: '#36a2eb' }   
                ],
                innerRadius: 75,
                outerRadius: 90,
                paddingAngle: 0,
                cornerRadius: 0,
                startAngle: 10,
                endAngle: 370,
              }
            ]}
            {...pieParams}
          />
          <div className="flex-row  p-5">
            <p className="text-xl ">75%</p>
            <p className="text-sm text-gray-400 pr-5">About_Graph</p>
            <p className="text-sm text-sky-500">{`See Details   >`}</p>
            
          </div>
        </div>
      </Box>
    </Stack>
  );
}
