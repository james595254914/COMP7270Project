

var app = new Vue({
    el: '#app',

    async mounted() {

        var response = await fetch("https://api.npoint.io/326e69c1c004a6677425");

        if (response.ok) {
            this.chartDatas = await response.json();
            console.log(this.chartDatas);
            this.cardDatas = this.chartDatas.cardDatas;
            this.plotChart0(this.chartDatas.chart0);
            this.plotChart1(this.chartDatas.chart1);
            this.plotChart2(this.chartDatas.chart2);
            this.plotChart3(this.chartDatas.chart3);
        } else {
            console.log(response.statusText);
        }
    },
    data: {
        teamName: 'S1_Vita',
        carousels: [
            { text: 'Quit Smoking Now', color: 'primary' },
            { text: 'Slide 2', color: 'info' },
            { text: 'Slide 3', color: 'success' },
            { text: 'Slide 4', color: 'warning' },
            { text: 'Slide 5', color: 'danger' }
        ], 
        cardDatas:[],
        gallery: false,
        al: {
            hasGrayscale: true,
            itemsToShow: 2,
            breakpoints: {
                768: {
                    hasGrayscale: false,
                    itemsToShow: 4
                },
                960: {
                    hasGrayscale: true,
                    itemsToShow: 6
                }
            }
        },
        items: [
            {
                title: 'Slide 1',
                image: 'image/Banner00.png'
            },
            {
                title: 'Slide 2',
                image: 'image/Banner2.png'
            },
            {
                title: 'Slide 3',
                image: 'image/Banner3.png'
            },
            {
                title: 'Slide 4',
                image: 'image/Banner4.png'
            },
            // {
            //     title: 'Slide 5',
            //     image: 'https://picsum.photos/id/4/1230/500'
            // },
            // {
            //     title: 'Slide 6',
            //     image: 'https://picsum.photos/id/5/1230/500'
            // },
            // {
            //     title: 'Slide 7',
            //     image: 'https://picsum.photos/id/6/1230/500'
            // },
            // {
            //     title: 'Slide 8',
            //     image: 'https://picsum.photos/id/7/1230/500'
            // }
        ],
        chartDatas: [],
        tableDatas: {
            columns: [
                {
                    field: 'District',
                    label: 'District',
                },
                {
                    field: 'Centre',
                    label: 'Centre',
                },
                {
                    field: 'Address',
                    label: 'Address',
                },
                {
                    field: 'Tel',
                    label: 'Tel',
                }
            ]
        },
    },


    methods: {

        switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        },

        // plotCard1(datas) {
        //     cardDatas[1] = datas.Cigarettes;
        //     cardDatas[2] = datas.HeatedTobacco;
        //     cardDatas[3] = datas.Ecigarettes;
        //     cardDatas[4] = datas.OtherForms;
        // },

        plotChart0(datas) {
            const labels = Object.keys(datas);
            const config = {
                type: 'bar',
                data: {
                    labels: ["1998", "2000", "2002", "2005", "2007", "2010", "2012", "2015", "2017", "2019"],

                    datasets: [
                        {
                            label: "Daily cigarette smokers ",
                            backgroundColor: "#3e95cd",
                            data: datas[1]
                        }, {
                            label: "Ex-daily cigarette smokers ",
                            backgroundColor: "#8e5ea2",
                            data: datas[2]
                        }
                    ]
                },

                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Percentage of daily cigarette smokers and ex-daily cigarette smokers among all persons aged 15 and over',
                            font: {
                                size: 12
                            },
                            // padding: 10
                        },
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Survey period(Year)",
                                font: {
                                    size: 18
                                },
                                padding: 5
                            }
                        },
                        y: {
                            // suggestedMin: 0,
                            // suggestedMax: 1.0,
                            title: {
                                display: true,
                                text: "Percentage (%)",
                                font: {
                                    size: 18
                                },
                                padding: 5
                            },
                            ticks: {
                                stepSize: 0.2
                            }
                        }
                    },
                }

            };

            var myChart = new Chart(
                document.getElementById('myChart0'),
                config
            );
        },

        plotChart1(datas) {
            const labels = datas.label;
            const data = {
                labels: labels,
                datasets: [{
                    data: datas.data,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(160, 160, 160)',
                        'rgb(255, 102, 255)',
                        'rgb(153, 102, 255)',
                        // 'rgb(201, 203, 207)',
                        // 'rgb(54, 62, 235)',
                        // 'rgb(153, 102, 55)',
                        // 'rgb(201, 203, 250)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(160, 160, 160)',
                        'rgb(255, 102, 255)',
                        'rgb(153, 102, 255)',
                        // 'rgb(201, 203, 207)',
                        // 'rgb(54, 62, 235)',
                        // 'rgb(153, 102, 55)',
                        // 'rgb(201, 203, 250)'
                    ],
                    borderWidth: 0
                }],
            };
            const config = {
                type: 'bar',
                data: data,
                options: {
                    indexAxis: 'y',
                    plugins: {
                        title: {
                            display: true,
                            text: '',
                            font: {
                                size: 24
                            },
                            padding: 5
                        },
                        legend: {
                            display: false
                        }
                    },

                    scales: {
                        x: {
                            grid: {
                                borderColor: 'rgb(250, 250, 250)',
                                color: 'rgb(250, 250, 250)',
                                tickColor: 'rgb(250, 250, 250)',
                            },
                            ticks: {
                                color: 'rgb(250, 250, 250)',
                            },
                            title: {
                                display: true,
                                text: "638 Person in total",
                                color: 'rgb(250, 250, 250)',
                                font: {
                                    size: 24
                                },
                                padding: 5
                            },
                        },
                        y: {
                            ticks: {
                                color: 'rgb(250, 250, 250)',
                            },
                            grid: {
                                borderColor: 'rgb(250, 250, 250)',
                                color: 'rgb(250, 250, 250)',
                                tickColor: 'rgb(250, 250, 250)',
                            },
                        }
                    },
                }

            };
            var myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
        },


        plotChart2(datas) {
            const data = {
                labels: [
                    'Health had already been harmed',
                    'Prevent health from being harmed',
                    'Objection from close people',
                    'Cigarette too expensive',
                    'Advised by doctor',
                    'Avoided setting a bad example',
                    'Others'
                ],
                datasets: [{
                    label: 'Female',
                    data: datas[1],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                    label: 'Male',
                    data: datas[2],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            };

            const config = {
                type: 'radar',
                data: data,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Reason for giving up smoking',
                            font: {
                                size: 24
                            },
                            padding: 5
                        },
                        legend: {
                            display: true
                        }
                    },

                    elements: {
                        line: {
                            borderWidth: 2
                        }
                    }
                },
            };

            var myChart2 = new Chart(
                document.getElementById('myChart2'),
                config
            );
        },

        plotChart3(datas) {
            // console.log("in plot chart3");
            // console.log(datas);
            am4core.useTheme(am4themes_dark);
            am4core.useTheme(am4themes_kelly);
            am4core.useTheme(am4themes_animated);
            var chart3 = am4core.createFromConfig({
                "data": datas,
                "series": [{
                    "type": "PictorialStackedSeries",
                    "dataFields": {
                        "value": "value",
                        "category": "name"
                    },
                    "maskSprite": {
                        "path": cigarettePath,
                    },
                    "alignLabels": true,
                }],
            }, "chart3", am4charts.SlicedChart);
        },
    },
})


