import { Component } from '@angular/core';
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
	constructor (public modalCtrl:ModalController)
	{}
		openModal(characterNum)
		{
			let modal = this.modalCtrl.create(ModalsContentPage, characterNum);
			modal.present();
		}
}

@Component({
	templateUrl:'build/pages/home/view.html'
})
export class ModalsContentPage {
	character;
	constructor(
		public params: NavParams,
		public viewCtrl: ViewController
	)
	{
		var characters = [
			{ 
				name:'leche verde',
				quote: 'Esta es una leche con muchas proteinas',
				image: 'img/1.jpg',
				item:[
					{title:'Tamaño',note:'1 Litro'},
					{title:'Sección',note:'Lacteos'},
					{title:'Marca',note:'Gloria'}	
				]
			}
		];
		this.character = characters[this.params.get('charNum')];
	}
	dismiss()
	{
		this.viewCtrl.dismiss();
	}

}