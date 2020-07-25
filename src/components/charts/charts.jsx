import React, {useEffect, useState} from 'react';
import {fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './charts.css';


const Charts = ({data: { confirmed, recovered, deaths }, country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);
        fetchApi();
    }, []);

    const lineChart = (
       
       dailyData.length 
       ?(
        <Line 
        data={{
            labels: dailyData.map(({ date}) => date ),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,

            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgb(255,0,0,0.5)',
                fill: true,
            }],
        }}
        />):null

    );

    const  barChar =(
    confirmed
    ?(
        <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Death'],
            datasets: [{
                label: 'People',
                backgroundColor: [
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)'
            ],
            data: [confirmed.value, recovered.value, deaths.value]
            }]

        }}

        options={{
            legend: {display: false},
            title: { display: true, text:`Current stste in ${country}`},
        }}
        
        />
    ):null
    );
    return(
        <div className="containerChart">
            {country ? barChar : lineChart }
        </div>  
    )
}

export default Charts;