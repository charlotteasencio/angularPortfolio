import { Component, OnInit, NgModule, ViewChild, ElementRef, Input} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: []
})

export class HomeComponent implements OnInit {
  
  scrollToAbout(className: string):void {
    const elementList = document.querySelectorAll('.'  + className);
    const element = elementList[0] 
    element.scrollIntoView({ behavior: 'smooth' })
  }

//   createMountainRange(mountainAmount, height, color) {
//     for (let i = 0; i < mountainAmount; i++) {
//         const mountainWidth = canvas.width / mountainAmount
//         c.beginPath()
//         c.moveTo(i * mountainWidth, canvas.height)
//         c.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height)
//         c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height)
//         c.lineTo(i * mountainWidth - 325, canvas.height)
//         c.fillStyle = color
//         c.fill()
//         c.closePath()
//     }
// }

// setting a width and height for the canvas
//@Input() public width = innerWidth;
//@Input() public height = innerHeight - 80;
  
//private cx: CanvasRenderingContext2D;  
//@ViewChild('myCanvas') public canvas: ElementRef;

  constructor() { }

  ngOnInit() {
 
    //const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    //this.cx = canvasEl.getContext('2d');

    // set the width and height
    //canvasEl.width = this.width;
    //canvasEl.height = this.height;
    
    // this.cx.beginPath();
    // this.cx.moveTo(0, 0);
    // this.cx.lineTo(300, 150);
    // this.cx.strokeStyle = "white"
    // this.cx.stroke();
  }
}
