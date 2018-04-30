import React from 'react';
import ImageUploader from './imageUploader';
import {createImage} from './canvas';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image_loaded: null,
            image_src: null,
            bit: null,
            palatte:null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e)=> { 
            this.setState({
                image_loaded: 'loaded',
                image_src: e.target.result
            });
        }
        reader.readAsDataURL(file);
    }

    handleSelectChange(e) {
        let id = e.target.id;
        console.log('id: ', id);
        if(id==='bit') {
            this.setState({
                bit: e.target.value
            });
        }
        if(id==='palatte') {
            this.setState({
                palatte: e.target.value
            });
        }
        
    }
    
    componentDidMount() {
        this.canvas = document.getElementById('canvas');
    }
    
    componentDidUpdate() {
        
        if(this.state.image_loaded !== null) {
            console.log('This.canvas: ', this.canvas);
            console.log('this.state.image_src: ', this.state.image_src);
            createImage(this.canvas, this.state.image_src)
        }
    }
    

    render() {
        return (
            <div className="app">
                <ImageUploader image_src={this.state.image_src} handleChange={this.handleChange} />

                <select id="bit" className="bit-select" 
                onChange={(e) => this.handleSelectChange(e)}>
                    <option defaultValue>None</option>
                    <option>8</option>
                    <option>16</option>
                    <option>32</option>
                </select>
                
                <select id="palatte" className="palatte-select" 
                onChange={(e) => this.handleSelectChange(e)}>
                    <option defaultValue>None</option>
                    <option>NES</option>
                    <option>GENESIS</option>
                    <option>TURBO GRAFIX 16</option>
                    <option>SEGA CD</option>
                </select>
                
                <div id="canvas-container" className="canvas-container flex flex-row">
                    <canvas id="canvas"></canvas>
                    <div id="color"></div>
                </div>

            </div>
        )
    }
}