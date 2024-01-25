import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bubble } from "react-chartjs-2";
import sourceData from '../data/sourceData.json';
import 'chartjs-adapter-date-fns';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
export default function Chart() {
    // Convert each entry in sourceData to a dataset
    const datasets = sourceData.map(dataEntry => ({
        label: dataEntry.label,
        data: dataEntry.data.map(item => ({
            x: item.x,
            y: item.y,
            r: item.r
        })),
        backgroundColor: dataEntry.backgroundColor,
        borderColor: dataEntry.borderColor,
        borderWidth: dataEntry.borderWidth
    }));

    return (
        <div style={{ height: '400px', position: 'relative' }}>
            <Bubble
                data={{
                    datasets: datasets
                }}
                options={{
                    layout: {
                        padding: 20
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'hour'
                            },
                            min: "2024-11-06 11:59:30",
                            max: "2024-11-06 18:59:30"
                        },
                        y: {
                            min: 0,
                            max: 100
                        }
                    },
                    plugins: {
                      title: {
                        text: "News & Data Flow",
                      }
                    }
                }}
            />
        </div>
    );
}
