import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PublicService {
public resp:any
  constructor(private http:HttpClient ) { }


 public getPublic(){
    return this.http.get('https://www.hostcatedral.com/api/appNoti/public/buscar/')
  }
  public getOne(id:any){
   this.http.get(`https://www.hostcatedral.com/api/appNoti/public/buscar/`).subscribe((res:any) =>{
      this.resp = res[id]
    })
    return this.resp
  }
}
