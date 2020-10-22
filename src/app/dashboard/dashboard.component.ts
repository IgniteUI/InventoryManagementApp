import { Component, ViewEncapsulation } from '@angular/core';
import { health, programming } from '@igniteui/material-icons-extended';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class DashboardComponent {
    private productPATH = './assets/products/';

    public cardDataSlide1  = [
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 231,
            soldPieces: 32423,
        },
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 331,
            soldPieces: 32423,
        },
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 421,
            soldPieces: 32423,
        },
    ];

    public cardDataSlide2  = [
        {
            imageURL: this.productPATH + 'Canon-RF-85mm-f1.2L.png',
            title: 'Canon RF 85mm f1.2L',
            totalEarned: 231,
            soldPieces: 32423,
        },
        {
            imageURL: this.productPATH + 'Canon-RF-85mm-f1.2L.png',
            title: 'Canon RF 85mm f1.2L',
            totalEarned: 231,
            soldPieces: 32423,
        },
        {
            imageURL: this.productPATH + 'Canon-RF-85mm-f1.2L.png',
            title: 'Canon RF 85mm f1.2L',
            totalEarned: 231,
            soldPieces: 32423,
        },
    ];

    public cardDataSlide3  = [
        {
            imageURL: this.productPATH + 'DJI-Mavic-Air-2.png',
            title: 'DJI Mavic Air 2',
            totalEarned: 231,
            soldPieces: 32423,
        },
        {
            imageURL: this.productPATH + 'DJI-Mavic-Air-2.png',
            title: 'DJI Mavic Air 2',
            totalEarned: 231,
            soldPieces: 32423,
        },
        {
            imageURL: this.productPATH + 'DJI-Mavic-Air-2.png',
            title: 'DJI Mavic Air 2',
            totalEarned: 231,
            soldPieces: 32423,
        },
    ];

    public category = [
        {
            name: 'Monitors',
            products: this.cardDataSlide1
        },
        {
            name: 'Photography',
            products: this.cardDataSlide2
        },
        {
            name: 'Drones',
            products: this.cardDataSlide3
        }
    ];

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

  public orderStatus = [
    { Year: 'Sep 30', approved: 220, canceled: 60 },
    { Year: 'Oct 1', approved: 520, canceled: 80 },
    { Year: 'Oct 2', approved: 200, canceled: 30 },
    { Year: 'Oct 3', approved: 360, canceled: 100 },
    { Year: 'Oct 4', approved: 490, canceled: 85 }
  ];

}
