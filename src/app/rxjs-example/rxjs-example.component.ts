import { Component, OnInit } from '@angular/core';
import { of, from, interval } from 'rxjs';
import {map, tap, take} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.css']
})
export class RxjsExampleComponent implements OnInit {
  numbers=[1,2,3,4,5];
  constructor() { }

  ngOnInit() {
    const books=of('first','second','third','fourth');
    books.subscribe(x=>console.log(x),err=>console.log(err),()=>console.log("observable complete"));

    const observer= of(...this.numbers);
    observer.subscribe(console.log);

    //from observable example
    const observer1=from(this.numbers);
    observer1.subscribe(x=>console.log(x),err=>console.log(err),()=>console.log("steram complete"));

    //interval observable example
    //const intervalNum=interval(1000).subscribe(console.log);

    //map operator example
    const numbers=of(1,2,3,4,5,6,7).pipe(
                                    map(x=>x*20),
                                    tap(x=>console.log("tap for debugging purpose ",x)),
                                    map(x=>x-5),
                                    tap(x=>console.log("tap for debugging purpose ",x)),
                                    map(x=>x*2),
                                    tap(x=>console.log("tap for debugging purpose ",x)),take(2))
                                  .subscribe(console.log);
    const number=of(1,2,3,4,5,6).pipe(                               
                                take(3)
    ).subscribe(console.log);
    
  }

}
