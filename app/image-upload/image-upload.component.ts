import { Component, OnInit } from '@angular/core';
import{ImageServiceService} from '../image-service.service';



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  selectedFile: ImageSnippet;
  constructor(private imageService: ImageServiceService){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        console.log("es"+res);
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }


  ngOnInit() {
  }

}
