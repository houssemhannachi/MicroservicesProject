import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Publication} from "../../_entities/Publication";
import {PublicationService} from "../../_services/publication.service";
import {HttpClient} from "@angular/common/http";
import {FileUploadService} from "../../_services/file-upload.service";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  dataSource!: MatTableDataSource<Publication>;
  publications: Publication[] | undefined;

  displayedColumns: string[] = ['id', 'titre', 'dateApparition', 'lien', 'sourcePdf'];
  constructor(private uploadService:FileUploadService,private publicationService : PublicationService, private httpClient : HttpClient) {
    this.publicationService.getAllMembers().then((res)=>{
      res.forEach(element=>{this.uploadService.getFile(element.fileDB).subscribe((file)=>{
        element.fileDB=file;
      });
      console.log(element)});
      this.dataSource = new MatTableDataSource(res);
      console.log(res);
    })
  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
