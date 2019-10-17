// import { THREE } from '../three';
import Sphere from './sphere';
import AudioSynth from './audio';
import Panel from './panel';
import KeyOne from './key1';

class Visualizer {
  constructor(canvas){
    this.canvas = canvas;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      90,
      (window.innerWidth/2) / (window.innerHeight/2),
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.line = new Panel();
    this.scene.add(this.line.line);
    
    

    
    this.init();
    this.animate = this.animate.bind(this);


  }

  animate(){

      this.music.fetchNewFrequencies();
      // console.log()
      // console.log(this.music.analyser.data);
      let set1 = this.music.analyser.data.slice(0,16)
      // console.log(set1);
      let maxFreq = set1[2];
      this.sphere.colorSwitch(maxFreq) 

      for(let i = 1; i < 5; i++){
        this.scene.children.some((child) => {
          if(child.name === i.toString()){
            //either move or delete
            if(child.position.z >= 8){
              child.position.z = 4;
              this.scene.remove(child)
            }else{
              // console.log(child)
              if(i === 1) this.key1.moveForward();
              if (i === 2) this.key2.moveForward();
              if (i === 3) this.key3.moveForward();
              if (i === 4) this.key4.moveForward();
              // debugger
            }
          }else{
            if(maxFreq === 255){
              this.scene.add(this.key1.sphereShape);
              this.scene.add(this.key2.sphereShape);
              this.scene.add(this.key3.sphereShape);
              this.scene.add(this.key4.sphereShape);
            }
          }
        })

        }


    this.renderer.render(this.scene, this.camera);
        this.sphere.sphereShape.rotation.x += 0.01;
        this.sphere.sphereShape.rotation.y += 0.01;
    window.requestAnimationFrame( this.animate );
  }


  init(){
    const degree = Math.PI/180;

    this.music = new AudioSynth();
   

    this.sphere = new Sphere();
    this.scene.add(this.sphere.sphereShape);

    this.key1 = new KeyOne(this.scene,-1.5,"red",'1');
    this.key2 = new KeyOne(this.scene, -0.5,"green",'2');
    this.key3 = new KeyOne(this.scene, 0.5,"blue",'3');
    this.key4 = new KeyOne(this.scene, 1.5,"yellow",'4');

    this.keys = [this.key1, this.key2, this.key3, this.key4]
    this.moveset = [
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 0]
    ];
    window.moveset = this.moveset;
    // setInterval(()=>{

      // this.key.moveForward();
      // this.scene.remove(this.key.sphereShape);
    // }, 1000)
    

    this.camera.position.z = 10;

    this.camera.position.y = 2;
    
    
  }


  renderFrame(){
    window.geo = this.geometry;
    // this.music.fetchNewFrequencies();

    // this.sphere.colorSwitch();
    // let idx = 0;
    // setInterval(() => {
    //   if(this.moveset[idx][0] === 1){ 
    //     this.scene.add(this.key1.sphereShape)
    //   }else{this.scene.remove(this.key1.sphereShape)}
    //   if (this.moveset[idx][1] === 1){
    //     this.scene.add(this.key2.sphereShape)
    //   }else{this.scene.remove(this.key2.sphereShape)}
    //   if (this.moveset[idx][2] === 1) {
    //     this.scene.add(this.key3.sphereShape);
    //   } else {
    //     this.scene.remove(this.key3.sphereShape);
    //   }
    //   if (this.moveset[idx][3] === 1) {
    //     this.scene.add(this.key4.sphereShape);
    //   } else {
    //     this.scene.remove(this.key4.sphereShape);
    //   }

    //   idx === this.moveset.length ? idx = 0 : idx++;
    // }, 2500)
       
        
  this.animate();

  }
}

export default Visualizer;