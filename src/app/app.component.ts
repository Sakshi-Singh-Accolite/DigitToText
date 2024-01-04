import { Component } from '@angular/core';
import { DigitToTextPipe } from './digit-to-text.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[DigitToTextPipe]
})
export class AppComponent {
  title = 'DigitToText';
  inputNumber:any;
 
  // id!:number;
  convertedText: any;
  convert(): void{

     if(!isNaN(this.inputNumber)){
      this.convertedText=this.digitToText.transform(this.inputNumber);
    }else{
      this.convertedText="Invalid Input";
    }
    // console.log(this.convertedText)
    
  }

  constructor(private digitToText:DigitToTextPipe){
  }
}
