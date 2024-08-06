import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  templateUrl: './decimal-pipe.component.html',
  styleUrl: './decimal-pipe.component.scss'
})
export class DecimalPipeComponent implements OnInit{
ngOnInit() {
  const numero = 1200.99;
  console.log(numero);
}
}
