import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  logo: string = environment.logo

  formPlayers!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm()
    this.addPlayer()
  }

  ngOnInit() {
  }
  buildForm(){
    this.formPlayers = this.formBuilder.group({
      players: this.formBuilder.array([])
    });
  }
  get players(): FormArray{
    return this.formPlayers.get('players') as FormArray
  }
  addPlayer(){
    const playersGroup = this.formBuilder.group({
      player: ['', Validators.required]
    })
    this.players.push(playersGroup)
  }
  removePlayer(i: number){
    this.players.removeAt(i)
  }


  save(){
    console.log(this.formPlayers);
    if(this.formPlayers.valid){
      console.log("VALIDO MMV");
    } else{
      console.log("NO ES VALIDO MMV");
    }
  }

}
