import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);
    return 
    //return this.http.post('/api/v1/image-upload', formData) ;
  }
}
