import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';

import { ActivatedRoute} from "@angular/router";


import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
public resp:any
public product:any
public id:any

  constructor(private pub:PublicService, private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {

 this.route.paramMap.subscribe(async (param:any) =>{
  const {params} = param
  
  console.log(params.id)
  const id = Number(params.id) + 1
  this.id =`https://www.hostcatedral.com/api/publicacion/pub_0${id}.jpg`
  await this.cargarData(id)
  })}

  cargarData = async (id:any)=> {
    try {
      this.resp = this.pub.getOne(id)
   }
  catch(err) {
      console.log(err);
 }
}
    
  }

