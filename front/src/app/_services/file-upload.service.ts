import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  constructor(private http: HttpClient) {
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `/server/PUBLICATION-SERVICE/api/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFile(id: number): Observable<any> {
    return this.http.get(`/server/PUBLICATION-SERVICE/api/files/${id}`);
  }
  uploadImage(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `/server/PUBLICATION-SERVICE/api/uploadPhoto`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }


}
