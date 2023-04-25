import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column',
        width: '1000',
        height: '200'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    },
    yAxis: {
        title: {
            text: null
        }
    },
    series: [{
        name: 'Compras',
        data: [16, 18, 23, 27, 32, 36, 39, 38, 35, 29,
            22, 17],
        color: 'blue'
    }, {
        name: 'Vendas',
        data: [0, 0, 0, 4, 10, 14, 17, 16, 12, 6,
            2, 0],
        color: 'green'
    }]
    }

const GraficoVendasCompras = () => {
    return(
        <div>
            <HighchartsReact 
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default GraficoVendasCompras;