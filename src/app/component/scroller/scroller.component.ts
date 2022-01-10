import { ViewportScroller } from "@angular/common";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {
  name = "Angular " + VERSION.major;

  constructor(private scroller: ViewportScroller, private router: Router) { }
  ngOnInit() {
   // this.router.navigate(["/"]);
  }

  goDown1() {
    this.scroller.scrollToAnchor("targetRed");
  }

  goDown2() {
    this.scroller.scrollToAnchor("targetGreen");
    // document.getElementById("targetGreen").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest"
    // });
  }

  goDown3() {
    this.scroller.scrollToAnchor("targetBlue");
    //this.router.navigate([], { fragment: "targetBlue" });
  }
}
