import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public ListaPublic:any
  public imgList:any
  constructor(private pub:PublicService, private router:ActivatedRoute,) {}

ngOnInit() {
  this.pub.getPublic().subscribe((resp) => {
   this.ListaPublic = resp
   console.log(this.ListaPublic)
  })
}
}
