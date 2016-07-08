import {Page} from 'ionic-angular';

import { Photo } from '../photo';

import { Camera } from 'ionic-native';

@Page({
  templateUrl: "build/pages/home/home.html"
})
export class HomePage {
  constructor() {}

  photos: Photo[] = [new Photo("http://placehold.it/350x150", 5),new Photo("http://placehold.it/350x151", 6)];

  takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth: 500
    }).then((imageData) => {
      this.photos.push(new Photo("data:image/jpeg;base64," + imageData,0));
    }, (err) => {
      console.log(err);
    });
  }

  deletePhoto(photo){
    this.photos.splice(this.photos.indexOf(photo), 1);
  }

  likePhoto(photo){
    photo.likes++;
  }
  
}