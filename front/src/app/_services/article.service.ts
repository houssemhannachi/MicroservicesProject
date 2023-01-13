import { HttpClient } from '@angular/common/http';
import { Article } from '../_entities/Article';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient : HttpClient) { }



}
