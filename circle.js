class Circle {
    constructor(radius){
    this.radius=radius;    
    }
    
calcArea(){
    return 3.14 * (this.radius* this.radius)
}
    calcPerimeter(){
        return 2 * (3.14 * this.radius)
    }
    calcDiameter(){
        return 2 * ( this.radius)
    }
}
const circle=new Circle(40);
console.log(u circle.calcArea());
console.log(circle.calcPerimeter());
console.log(circle.calcDiameter());