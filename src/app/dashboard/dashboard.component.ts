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
        { Sale: 33, City: 'New York' },
        { Sale: 29, City: 'San Francisco' },
        { Sale: 20, City: 'New Jersey' },
        { Sale: 18, City: 'London' }
    ];

    public channelData = [
        { Channel: 'Amazon', Orders: 83, class: 'amazon' },
        { Channel: 'Ebay', Orders: 22, class: 'ebay' },
        { Channel: 'Website', Orders: 45, class: 'website' },
        { Channel: 'Facebook', Orders: 65, class: 'facebook' }
    ];

    public orderStatus = [
        { Year: 'Sep 30', approved: 220, canceled: 60 },
        { Year: 'Oct 1', approved: 520, canceled: 80 },
        { Year: 'Oct 2', approved: 200, canceled: 30 },
        { Year: 'Oct 3', approved: 360, canceled: 100 },
        { Year: 'Oct 4', approved: 490, canceled: 85 }
    ];

    public selectOrdersByChannel(event) {
        switch (event.index) {
            case 0:
                // 1D
                this.channelData[0].Orders = 83;
                this.channelData[1].Orders = 22;
                this.channelData[2].Orders = 45;
                this.channelData[3].Orders = 65;
                break;
            case 1:
                // 1W
                this.channelData[0].Orders = 64;
                this.channelData[1].Orders = 39;
                this.channelData[2].Orders = 12;
                this.channelData[3].Orders = 59;
                break;
            case 2:
                // 1M
                this.channelData[0].Orders = 82;
                this.channelData[1].Orders = 25;
                this.channelData[2].Orders = 29;
                this.channelData[3].Orders = 44;
                break;
            case 3:
                // 1Y
                this.channelData[0].Orders = 45;
                this.channelData[1].Orders = 38;
                this.channelData[2].Orders = 29;
                this.channelData[3].Orders = 52;
                break;
        }
    }

    public selectOrderStatus(event) {
        switch (event.index) {
            case 0:
                // 1D
                this.orderStatus[0].approved = 220;
                this.orderStatus[0].canceled = 60;
                this.orderStatus[1].approved = 520;
                this.orderStatus[1].canceled = 80;
                this.orderStatus[2].approved = 200;
                this.orderStatus[2].canceled = 30;
                this.orderStatus[3].approved = 360;
                this.orderStatus[3].canceled = 100;
                this.orderStatus[4].approved = 490;
                this.orderStatus[4].canceled = 85;
                break;
            case 1:
                // 1W
                this.orderStatus[0].approved = 1120;
                this.orderStatus[0].canceled = 240;
                this.orderStatus[0].Year = 'Sep 6 - Sep 12';
                this.orderStatus[1].approved = 1248;
                this.orderStatus[1].canceled = 311;
                this.orderStatus[1].Year = 'Sep 13 - Sep 19';
                this.orderStatus[2].approved = 1144;
                this.orderStatus[2].canceled = 198;
                this.orderStatus[2].Year = 'Sep 20 - Sep 26';
                this.orderStatus[3].approved = 1315;
                this.orderStatus[3].canceled = 180;
                this.orderStatus[3].Year = 'Sep 27 - Oct 3';
                this.orderStatus[4].approved = 1048;
                this.orderStatus[4].canceled = 254;
                this.orderStatus[4].Year = 'Oct 4 - Oct 10';
                break;
            case 2:
                // 1M
                this.orderStatus[0].approved = 1120;
                this.orderStatus[0].canceled = 240;
                this.orderStatus[0].Year = 'June';
                this.orderStatus[1].approved = 1248;
                this.orderStatus[1].canceled = 311;
                this.orderStatus[1].Year = 'July';
                this.orderStatus[2].approved = 1144;
                this.orderStatus[2].canceled = 198;
                this.orderStatus[2].Year = 'August';
                this.orderStatus[3].approved = 1315;
                this.orderStatus[3].canceled = 180;
                this.orderStatus[3].Year = 'September';
                this.orderStatus[4].approved = 1048;
                this.orderStatus[4].canceled = 254;
                this.orderStatus[4].Year = 'October';
                break;
        }
    }

}
