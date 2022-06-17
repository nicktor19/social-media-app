import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ImageInfo {
  title: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  uploadData = new FormData();

  constructor(private http: HttpClient) { }

  uploadFile(formData: any): Observable<any>{
    return this.http.post('http://localhost:8080/api/Image', formData)
  }

}