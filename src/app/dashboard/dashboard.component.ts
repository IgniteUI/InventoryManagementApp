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

    public tvData = [
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 231,
            soldPieces: 32423
        },
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 331,
            soldPieces: 32423
        },
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 421,
            soldPieces: 32423
        }
    ];

    public photoData = [
        {
            imageURL: this.productPATH + 'Canon-EOS-R5.jpg',
            title: 'Canon EOS R5',
            totalEarned: 251,
            soldPieces: 33423
        },
        {
            imageURL: this.productPATH + 'Broncolor-Siros-400L.png',
            title: 'Broncolor Siros 400L',
            totalEarned: 221,
            soldPieces: 31423
        },
        {
            imageURL: this.productPATH + 'Canon-RF-85mm-f1.2L.png',
            title: 'Canon RF 85mm f1.2L',
            totalEarned: 201,
            soldPieces: 31423
        }
    ];

    public accessoriesData = [
        {
            imageURL: this.productPATH + 'Rode-Wireless-GO-Black.png',
            title: 'Rode Wireless GO Black',
            totalEarned: 231,
            soldPieces: 32423
        },
        {
            imageURL: this.productPATH + 'BenQ-TK850.png',
            title: 'BenQ TK850',
            totalEarned: 231,
            soldPieces: 32423
        },
        {
            imageURL: this.productPATH + 'GoPro-HERO8-Black.png',
            title: 'GoPro-HERO8-Black',
            totalEarned: 231,
            soldPieces: 32423
        }
    ];

    public categories = [
        {
            name: 'Monitors',
            products: this.tvData
        },
        {
            name: 'Photography',
            products: this.photoData
        },
        {
            name: 'Accessories',
            products: this.accessoriesData
        }
    ];

    public pieChartData = [
        {Sale: 33, City: 'New York'},
        {Sale: 29, City: 'San Francisco'},
        {Sale: 20, City: 'New Jersey'},
        {Sale: 18, City: 'London'}
    ];

    public channelData = [
        {Channel: 'Amazon', Orders: 37, color: '#9BE96B'},
        {Channel: 'Ebay', Orders: 13, color: '#8A5FAB'},
        {Channel: 'Website', Orders: 25, color: '#6AAFFF'},
        {Channel: 'Facebook', Orders: 25, color: '#97F3E4'}
    ];

    public orderStatus = [
        {Year: 'Sep 30', approved: 220, canceled: 60},
        {Year: 'Oct 1', approved: 520, canceled: 80},
        {Year: 'Oct 2', approved: 200, canceled: 30},
        {Year: 'Oct 3', approved: 360, canceled: 100},
        {Year: 'Oct 4', approved: 490, canceled: 85}
    ];

}
