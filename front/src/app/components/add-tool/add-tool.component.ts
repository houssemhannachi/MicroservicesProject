import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToolsService} from "../../_services/tools.service";

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {
  selected?: Date | null;
  form: any;
  itemGlobal?: any;

  constructor(private toolsService: ToolsService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = new FormGroup({
      dateOutil: new FormControl(null, [Validators.required]),
      sourceOutil: new FormControl(null, [Validators.required]),
    })

  }

  addOutil() {
    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    objectToSubmit.dateOutil = this.selected;
    this.toolsService.saveTools(objectToSubmit).then((res) => {
      this.router.navigate(['./tools'])
    })

  }

}
