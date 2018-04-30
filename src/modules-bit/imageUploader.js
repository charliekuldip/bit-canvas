import React from 'react';
let x = 0;

export default class ImageUploader extends React.Component {
    render() {
        x++;
        const { image_src, handleChange } = this.props;

        return <div className="container flex flex-column">
            <h1>{x}</h1>

            {image_src ? <img id="imageFileEl" src={image_src} alt="Pix Source" className="imageFileEl" /> :null }
            
            <input type="file" id="imageFile" key="imageFile" name='imageFile' onChange={handleChange} />

        </div>;
    }
}