import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Event} from "../../_entities/Event";
import {EventService} from "../../_services/event.service";
import {StorageService} from "../../_services/storage.service";
import {Outil} from "../../_entities/Outil";
import {ToolsService} from "../../_services/tools.service";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  dataSource!: MatTableDataSource<Outil>;
  outils: Outil[] | undefined;
  displayedColumns: string[] = ['source', 'date', 'cc'];
  user: any;

  constructor(private toolService: ToolsService, private storageService: StorageService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe((tableau) => {
      this.dataSource.data=tableau;
      console.log(tableau)
    });
    this.user = this.storageService.getUser();
  }

}
