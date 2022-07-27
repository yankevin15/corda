class Link{
    constructor(bodyA,bodyB){

      //variavel que vai obter o indice do ultimo retangulo;
      var lastlink = bodyA.body.bodies.length-2;

     this.link = Constraint.create( {

          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},

          bodyB:bodyB,
          pointB:{x:0,y:0},

          length:-10,
          stiffness:0.01 //evita a vibração da restrição para que permaneça estável;

        });

        World.add(engine.world,this.link);
    } 

   /* dettach(){

      World.remove(engine.world,this.link);
     
    }*/
}