// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React from 'react';
import { ResponsiveLine } from '@nivo/line'

function Graph2(props) {
    const sampleData = [
        {
          "id": "Machine 1",
          "color": "hsl(231, 70%, 50%)",
          "data": [
            {
              "x": "Monday",

              "y": 107
            },
            {
              "x": "Tuesday",
              "y": 234
            },
            {
              "x": "Wednesday",
              "y": 170
            },
            {
              "x": "Thursday",
              "y": 234
            },
            {
              "x": "Friday",
              "y": 214
            },
            {
              "x": "Saturday",
              "y": 46
            },
            {
              "x": "Sunday",
              "y": 17
            },
          ]
        },
        {
          "id": "Machine 2",
          "color": "hsl(87, 70%, 50%)",
          "data": [
            {
              "x": "Monday",

              "y": 61
            },
            {
              "x": "Tuesday",
              "y": 285
            },
            {
              "x": "Wednesday",
              "y": 200
            },
            {
              "x": "Thursday",
              "y": 166
            },
            {
              "x": "Friday",
              "y": 133
            },
            {
              "x": "Saturday",
              "y": 176
            },
            {
              "x": "Sunday",
              "y": 111
            },
          ]
        },
        {
          "id": "Machine 3",
          "color": "hsl(233, 70%, 50%)",
          "data": [
            {
              "x": "Monday",

              "y": 120
            },
            {
              "x": "Tuesday",
              "y": 147
            },
            {
              "x": "Wednesday",
              "y": 282
            },
            {
              "x": "Thursday",
              "y": 88
            },
            {
              "x": "Friday",
              "y": 146
            },
            {
              "x": "Saturday",
              "y": 192
            },
            {
              "x": "Sunday",
              "y": 176
            },
          ]
        },
        {
          "id": "Machine 4",
          "color": "hsl(238, 70%, 50%)",
          "data": [
            {
              "x": "Monday",

              "y": 169
            },
            {
              "x": "Tuesday",
              "y": 288
            },
            {
              "x": "Wednesday",
              "y": 122
            },
            {
              "x": "Thursday",
              "y": 97
            },
            {
              "x": "Friday",
              "y": 95
            },
            {
              "x": "Saturday",
              "y": 272
            },
            {
              "x": "Sunday",
              "y": 248
            },
          ]
        },
        {
          "id": "Machine 5",
          "color": "hsl(72, 70%, 50%)",
          "data": [
            {
              "x": "Monday",

              "y": 221
            },
            {
              "x": "Tuesday",
              "y": 197
            },
            {
              "x": "Wednesday",
              "y": 31
            },
            {
              "x": "Thursday",
              "y": 128
            },
            {
              "x": "Friday",
              "y": 254
            },
            {
              "x": "Saturday",
              "y": 221
            },
            {
              "x": "Sunday",
              "y": 238
            },
          ]
        }
    ]
    return (
        <ResponsiveLine
            data={sampleData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default Graph2;