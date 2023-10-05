import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output()serverCreated=new EventEmitter<{serverName:string, serverContent:string}>();
  @OUtput('bpCreated')blueprintcreatednew EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('#serverContentInput')serverContentInput:ElementRef

  constructor(){}


  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.natiiveElement.value})
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintcreated.emit({
      serverName:this.serverContentInput.natiiveElement.value,

    })
  }



}
