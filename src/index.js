import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Game from './modules/game.js';
// import App from './modules-bit/app.js';

const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
}

class ImageUploader extends React.Component {

    imageUpload = (e) => {
        const file = e.target.files[0];
        console.log("file: ", file);
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored",base64);
        });

        var reader = new FileReader();
        let imgUploadEl = document.getElementById('imageFileEl');

        console.log('reader: ', reader);
        console.log('imgUploadEl: ', imgUploadEl);

        reader.onload = (e)=> { 
            console.log('RThis is e from reader.onload: ', e);
            imgUploadEl.src = e.target.result;
        }

        reader.readAsDataURL(file);
        // let img = new Image();
        // img.onload = function() {
        //     img.src = file;
        // }
        // img.src = file;
    };  
  
    render() {
        return <div className="container">
            <input 
            type="file" 
            id="imageFile" 
            name='imageFile' 
            onChange={this.imageUpload} />
            <img id="imageFileEl" src="" alt="Pix Source" className="imageFileEl" />
        </div>;
    }
}

ReactDOM.render(
    <ImageUploader />,
    document.getElementById('root')
)
