import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  minhaData: string = '2024-08-04T13:14:00.000';
  minhaDataObj: Date = new Date('2024-08-03T22:22:00.000Z');

  ngOnInit() {
    console.log('Data Convertida para Região: ', new Date(this.minhaData))
    console.log('Data UTC-0:', new Date(this.minhaData).toUTCString())

    console.log('Timestamp', new Date(this.minhaData).getTime() )

    console.log(this.minhaDataObj)
    console.log(this.minhaDataObj)
  }
}
