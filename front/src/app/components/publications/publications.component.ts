import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Publication} from "../../_entities/Publication";
import {PublicationService} from "../../_services/publication.service";
import {HttpClient} from "@angular/common/http";
import {FileUploadService} from "../../_services/file-upload.service";
import {StorageService} from "../../_services/storage.service";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  dataSource!: MatTableDataSource<Publication>;
  publications: Publication[] | undefined;
  user?:any;
  displayedColumns: string[] = ['id', 'titre', 'dateApparition', 'lien', 'sourcePdf'];
  constructor(private storageService:StorageService,private uploadService:FileUploadService,private publicationService : PublicationService, private httpClient : HttpClient) {
    this.publicationService.getAllPublications().then((res)=>{
      res.forEach(element=>{this.uploadService.getFile(element.fileDB).subscribe((file)=>{
        element.fileDB=file;
      });
      console.log(element)});
      this.dataSource = new MatTableDataSource(res);
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.user = this.storageService.getUser();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
