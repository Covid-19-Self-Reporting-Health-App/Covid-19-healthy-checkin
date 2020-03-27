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

const characterData = [
    { social: 8, informational: 10, physical: 4, mental: 7 },
    { social: 4, informational: 6, physical: 7, mental: 5 },
    { social: 3, informational: 8, physical: 6, mental: 1 },
]

class RadarGraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.processData(characterData),
            maxima: this.getMaxima(characterData),
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
            >
                <VictoryGroup
                    colorScale={['gold', 'orange', 'tomato']}
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
                                <VictoryLabel labelPlacement="vertical" />
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
