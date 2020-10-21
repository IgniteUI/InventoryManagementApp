import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public pieChartData = [
    { Sale: 33, City: 'New York',    },
    { Sale: 29, City: 'San Francisco', },
    { Sale: 20, City: 'New Jersey', },
    { Sale: 18, City: 'London',   }
  ];

  public channelData = [
    { Channel: 'Amazon', Orders: 37},
    { Channel: 'Ebay', Orders: 13},
    { Channel: 'Website', Orders: 25},
    { Channel: 'Facebook', Orders: 25},
  ];

  public approved = [
    { Year: 'Sep 30', approved: 220 },
    { Year: 'Oct 1', approved: 520 },
    { Year: 'Oct 2', approved: 200 },
    { Year: 'Oct 3', approved: 360 },
    { Year: 'Oct 4', approved: 490 }
  ];

  public canceled = [
    { Year: 'Sep 30', canceled: 60 },
    { Year: 'Oct 1', canceled: 80 },
    { Year: 'Oct 2', canceled: 30 },
    { Year: 'Oct 3', canceled: 100 },
    { Year: 'Oct 4', canceled: 85 }
  ];

  public orderStatus = [ this.approved, this.canceled ];
}
