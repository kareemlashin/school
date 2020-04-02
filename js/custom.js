
      
        var options = {
            series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
            chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        


          var options2 = {
            chart: {
                height: 400,
                type: 'heatmap',
            },


        plotOptions: {
        heatmap: {
          enableShades: true,
          shadeIntensity: .5,
          distributed: false,

        }
      }, 


            dataLabels: {
                enabled: false
            },
            colors: ['#506fe4'],
            min: -1,
            max: 10,
            series: [


                {name: 'wed',
                data: 
                    [{x: '1am', y: 1},
                
                     {x: '7am', y: 4}, 
                     {x: '8am', y: 2},
                     {x: '9am', y: 1}, 
                     {x: '10am',y: 1}, 
                     {x: '11am',y: 3}, 
                     {x: '12pm',y: 4},
                     {x: '1pm',y: 2},
                     {x: '2pm',y: 1}, 
                 
                     {x: '11pm',y: 2}, 
                     {x: '12am',y: 1}]},       {name: 'thr',
                     data: 
                         [{x: '1am', y: 3},
                     
                          {x: '7am', y: 4}, 
                          {x: '8am', y: 2},
                          {x: '9am', y: 1}, 
                          {x: '10am',y: 1}, 
                          {x: '11am',y: 3}, 
                          {x: '12pm',y: 4},
                          {x: '1pm',y: 2},
                          {x: '2pm',y: 1}, 
                      
                          {x: '11pm',y: 5}, 
                          {x: '12am',y: 4}]},       {name: 'fri',
                          data: 
                              [{x: '1am', y: 5},
                          
                               {x: '7am', y: 4}, 
                               {x: '8am', y: 2},
                               {x: '9am', y: 1}, 
                               {x: '10am',y: 1}, 
                               {x: '11am',y: 3}, 
                               {x: '12pm',y: 4},
                               {x: '1pm',y: 2},
                               {x: '2pm',y: 1}, 
                           
                               {x: '11pm',y: 4}, 
                               {x: '12am',y: 3}]},       {name: 'mon',
                               data: 
                                   [{x: '1am', y: 2},
                               
                                    {x: '7am', y: 4}, 
                                    {x: '8am', y: 2},
                                    {x: '9am', y: 1}, 
                                    {x: '10am',y: 1}, 
                                    {x: '11am',y: 3}, 
                                    {x: '12pm',y: 4},
                                    {x: '1pm',y: 2},
                                    {x: '2pm',y: 1}, 
                                
                                    {x: '11pm',y: 3}, 
                                    {x: '12am',y: 4}]},       {name: 'tue',
                                    data: 
                                        [{x: '1am', y: 5},
                                    
                                         {x: '7am', y: 4}, 
                                         {x: '8am', y: 2},
                                         {x: '9am', y: 1}, 
                                         {x: '10am',y: 1}, 
                                         {x: '11am',y: 3}, 
                                         {x: '12pm',y: 4},
                                         {x: '1pm',y: 2},
                                         {x: '2pm',y: 1}, 
                                     
                                         {x: '11pm',y: 1}, 
                                         {x: '12am',y: 2}]},       {name: 'thr',
                                         data: 
                                             [{x: '1am', y: 3},
                                         
                                              {x: '7am', y: 4}, 
                                              {x: '8am', y: 2},
                                              {x: '9am', y: 1}, 
                                              {x: '10am',y: 1}, 
                                              {x: '11am',y: 3}, 
                                              {x: '12pm',y: 4},
                                              {x: '1pm',y: 2},
                                              {x: '2pm',y: 1}, 
                                          
                                              {x: '11pm',y: 2}, 
                                              {x: '12am',y: 4}]},       {name: 'fri',
                                              data: 
                                                  [{x: '1am', y: 2},
                                              
                                                   {x: '7am', y: 4}, 
                                                   {x: '8am', y: 2},
                                                   {x: '9am', y: 1}, 
                                                   {x: '10am',y: 1}, 
                                                   {x: '11am',y: 3}, 
                                                   {x: '12pm',y: 4},
                                                   {x: '1pm',y: 2},
                                                   {x: '2pm',y: 1}, 
                                               
                                                   {x: '11pm',y: 1}, 
                                                   {x: '12am',y: 3}]}
                                                   ,       {name: 'Wen',
                                                   data: 
                                                       [{x: '1am', y: 3},
                                                   
                                                        {x: '7am', y: 4}, 
                                                        {x: '8am', y: 2},
                                                        {x: '9am', y: 1}, 
                                                        {x: '10am',y: 1}, 
                                                        {x: '11am',y: 3}, 
                                                        {x: '12pm',y: 4},
                                                        {x: '1pm',y: 2},
                                                        {x: '2pm',y: 1}, 
                                                    
                                                        {x: '11pm',y: 2}, 
                                                        {x: '12am',y: 1}]}
                

               ],

            title: {
                text: ''
            },

        }

        var chart = new ApexCharts(
            document.querySelector("#chart2"),
            options2
        );

        chart.render();