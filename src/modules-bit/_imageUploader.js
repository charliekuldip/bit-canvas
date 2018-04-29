import React from 'react';

function triggerClick(e) {
    console.log('e: ', e);
}

function readURL(input) {
    console.log('This is input: ', input);
    console.log('THis is this', this);

    console.log('ONE input.files[0]: ', input.files[0]);
    
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
      console.log('reader: ', reader);
  
    //   reader.onload = function(e) {
    reader.addEventListener('onload', function(e) {
        console.log('e from onload!: ', e);
        console.log('input: ', input);
        console.log('input.files[0]', input.files[0]);

        let img = document.getElementById('img-uploader__img');
        let title = document.getElementById('img-uploader__title');
        
        img.src = e.target.result;
        // $('.file-upload-image').attr('src', e.target.result);

        title.innerHtml(input.files[0].name);
      });
  
      reader.readAsDataURL(input.files[0]);
  
    } 
    // else { removeUpload(); }
  }

export default function ImageUploader(props) {
    return (
        <div className="img-uploader">
            <img src="" id="img-uploader__img" className="img-uploader__img" alt="bit src" />
            <input type="file" id="img-uploader__input" className="img-uploader__input" onChange={readURL.bind(this)} />
            <div id="img-uploader__title" className="img-uploader__title"></div>
            <button className="img-uploader__btn" type="button" onClick={triggerClick}>Add Image</button>
        </div>
    );
}
