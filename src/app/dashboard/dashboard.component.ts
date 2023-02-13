import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  type = 'bar';
  data = {
    labels: ["January", "February", "March", "April", "May","June", "July"],
    datasets: [
      {     
        label: "Sales for last 7 months",
        fill:'true',
        backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d","#fbrd50","#fba350"],
        data: [65, 59, 80, 81, 56, 80, 90]
      }
    ]
  };

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      { display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [
      {
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}


me = 'line';
  donne = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        borderColor: 'purple', //line color
        pointRadius:4,
        pointBorderColor: 'white',
        pointBackgroundColor:'#cd486b',
        label: "Sales",
        fill:false,
        data: [65, 59, 80, 81, 56, 80, 90]
      }
    ]
  };

lesoptions = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{ display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}

}

