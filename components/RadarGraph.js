import * as React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryGroup,
    VictoryArea,
    VictoryPolarAxis,
    VictoryLabel,
} from 'victory-native'

const healthData = [
    { social: 0, informational: 0, physical: 0, mental: 0 },
    { social: 0, informational: 0, physical: 0, mental: 0 },
]

const healthData2 = [
    { social: 10, informational: 10, physical: 10, mental: 7 },
    { social: 4, informational: 6, physical: 7, mental: 5 },
]

class RadarGraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.processData(healthData2),
            maxima: this.getMaxima(healthData2),
        }
    }

    getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map(d => d[key])
            return memo
        }, {})
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = 10
            return memo
        }, {})
    }

    processData(data) {
        const maxByGroup = this.getMaxima(data)
        const makeDataArray = d => {
            return Object.keys(d).map(key => {
                return { x: key, y: d[key] / maxByGroup[key] }
            })
        }
        return data.map(datum => makeDataArray(datum))
    }

    render() {
        return (
            <VictoryChart
                polar
                theme={VictoryTheme.material}
                domain={{ y: [0, 1] }}
                animate={{
                    duration: 5000,
                    easing: 'quadInOut',
                }}
            >
                <VictoryGroup
                    colorScale={['gold', 'orange']}
                    style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
                >
                    {this.state.data.map((data, i) => {
                        return <VictoryArea key={i} data={data} />
                    })}
                </VictoryGroup>
                {Object.keys(this.state.maxima).map((key, i) => {
                    return (
                        <VictoryPolarAxis
                            key={i}
                            dependentAxis
                            style={{
                                axisLabel: { padding: 10 },
                                axis: { stroke: 'none' },
                                grid: {
                                    stroke: 'grey',
                                    strokeWidth: 0.25,
                                    opacity: 0.5,
                                },
                            }}
                            tickLabelComponent={
                                <VictoryLabel
                                    labelPlacement="vertical"
                                    dx={i == 0 ? -10 : i === 2 ? 10 : 0}
                                />
                            }
                            labelPlacement="perpendicular"
                            axisValue={i + 1}
                            label={key}
                            tickFormat={t =>
                                Math.ceil(t * this.state.maxima[key])
                            }
                            tickValues={[0.25, 0.5, 0.75, 1]}
                        />
                    )
                })}
                <VictoryPolarAxis
                    labelPlacement="parallel"
                    tickFormat={() => ''}
                    style={{
                        axis: { stroke: 'none' },
                        grid: { stroke: 'grey', opacity: 0.5 },
                    }}
                />
            </VictoryChart>
        )
    }
}

export default RadarGraph
