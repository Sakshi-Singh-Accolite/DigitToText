import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitToText'
})
export class DigitToTextPipe implements PipeTransform {

  transform(value: number): string {

    const singleDigits=['','one','two','three','four','five','six','seven','eight','nine'];
    const twoDigits=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(value===0){
      return 'Zero';
    }
    let result='';

    if(value>100000){
      result+=this.transform(Math.floor(value/100000))+ ' lakh ';
      value%=100000;
    }

    if(value>=1000){
      result +=this.transform(Math.floor(value/1000))+ ' thousand ';
      value%=1000;
    }
    if(value>=100){
      result+=singleDigits[Math.floor(value/100)]+' hundred ';
      value%=100;
    }
    if(value>=10 && value<=19){
      result +=twoDigits[value-10];
    }else{
      if(value>=20){
        result+=tens[Math.floor(value/10)];
        value%=10;
      }
      if(value>0){
        result+=singleDigits[value];
      }
    }
    return result.trim();
  }

}
