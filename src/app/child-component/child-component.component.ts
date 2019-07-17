import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent implements OnInit {
  @Input() name:string;

  constructor(private parent:AppComponent) { }

  ngOnInit() {
    console.log("ng on inti method",this.parent);
    setTimeout(()=>{
      this.parent.name="this is chidl component changes";
    });
    
  }

  ngAfterViewInit(){
    console.log("ng after view init",this.parent);
    setTimeout(()=>{
      this.parent.name="ng after view init";
    });
  }

  ngAfterContentInit(){
    console.log("ng after content init method",this.parent);
    //this.parent.name="this is chidl component changes";
    // setTimeout(()=>{
    //   this.parent.name="ng after content init";
    // });
  }

}
