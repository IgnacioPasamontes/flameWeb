import { Component, ComponentRef} from '@angular/core';
import { Model } from '../Model';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent {

  constructor(public model: Model) {}
}
