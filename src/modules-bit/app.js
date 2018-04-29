import React from 'react';
import ImageUploader from './imageUploader';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: 0
        };
    }
      
    handleClick(e) {
        console.log('This is e', e);
        this.setState({
            stepNumber: 0,
        });
    }

    readURL(input) {
        console.log('This is input: ', input);
        if (input.files && input.files[0]) {
      
          var reader = new FileReader();
      
        //   reader.onload = function(e) {
        reader.addEventListener('onload', function(e) {
            let img = document.getElementById('img-uploader__img');
            let title = document.getElementById('img-uploader__title');
            
            img.src = e.target.result;
            // $('.file-upload-image').attr('src', e.target.result);

            // title.html(input.files[0].name);
          });
      
          reader.readAsDataURL(input.files[0]);
      
        } 
        // else { removeUpload(); }
      }
    
    render() {
        return (
            <div className="app">
                <ImageUploader onClick={() => this.handleClick()} onChange={()=> this.readURL() } />
            </div>
        )
    }
}