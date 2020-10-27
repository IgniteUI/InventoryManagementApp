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
            totalEarned: 732.321,
            soldPieces: 821
        },
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 423.231,
            soldPieces: 161
        },
        {
            imageURL: this.productPATH + 'Sony-A8H-55-4K-OLED.png',
            title: 'Sony A8H 55 4K OLED',
            totalEarned: 873.143,
            soldPieces: 87
        }
    ];

    public photoData = [
        {
            imageURL: this.productPATH + 'Canon-EOS-R5.jpg',
            title: 'Canon EOS R5',
            totalEarned: 24.231,
            soldPieces: 401
        },
        {
            imageURL: this.productPATH + 'Broncolor-Siros-400L.png',
            title: 'Broncolor Siros 400L',
            totalEarned: 29.231,
            soldPieces: 231
        },
        {
            imageURL: this.productPATH + 'Canon-RF-85mm-f1.2L.png',
            title: 'Canon RF 85mm f1.2L',
            totalEarned: 83.231,
            soldPieces: 131
        }
    ];

    public accessoriesData = [
        {
            imageURL: this.productPATH + 'Rode-Wireless-GO-Black.png',
            title: 'Rode Wireless GO Black',
            totalEarned: 323.231,
            soldPieces: 231
        },
        {
            imageURL: this.productPATH + 'BenQ-TK850.png',
            title: 'BenQ TK850',
            totalEarned: 223.231,
            soldPieces: 101
        },
        {
            imageURL: this.productPATH + 'GoPro-HERO8-Black.png',
            title: 'GoPro-HERO8-Black',
            totalEarned: 123.231,
            soldPieces: 31
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
        {Channel: 'Amazon', Orders: 83, class: 'amazon'},
        {Channel: 'Ebay', Orders: 22, class: 'ebay'},
        {Channel: 'Website', Orders: 45, class: 'website'},
        {Channel: 'Facebook', Orders: 65, class: 'facebook'}
    ];

    public orderStatus = [
        {Year: 'Sep 30', approved: 220, canceled: 60},
        {Year: 'Oct 1', approved: 520, canceled: 80},
        {Year: 'Oct 2', approved: 200, canceled: 30},
        {Year: 'Oct 3', approved: 360, canceled: 100},
        {Year: 'Oct 4', approved: 490, canceled: 85}
    ];

}
