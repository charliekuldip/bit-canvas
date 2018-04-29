import React from 'react';

export default class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image_loaded: null,
        };
    }

    imageUpload = (e) => {
        const file = e.target.files[0];
        // getBase64(file).then(base64 => {
        //     localStorage["fileBase64"] = base64;
        //     console.debug("file stored",base64);
        // });

        let reader = new FileReader();
        let imgUploadEl = document.getElementById('imageFileEl');

        reader.onload = (e)=> { 
            imgUploadEl.src = e.target.result;
            this.setState({image_loaded: 'loaded'});
        }

        reader.readAsDataURL(file);
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