class Circle{
    constructor(radius,color){
    this.radius =radius;
    this.color =color;
    }    
    getarea () {
            return Math.PI* Math.pow(this.radius,2);
    }
    getperimeter () {
        return 2 *Math.PI* this.radius;
        }
    };
var cir = new Circle(11);
console.log(cir.getarea());
console.log(cir.getperimeter());

class Circle {
    void (String){
       var c1 = new circle();
       c1.setRadious(3.2);
       c1.setColor("blue");
       var c2 = new Circle();
       c2.setRadious(3.2);
       c2.setColor("black");
       system.out.println("Area of c1:" + c1.getArea());
       system.out.println("Area of c2:" + c2.getArea());
       
       system.out.println("Perimeter of c1:" + c1.Perimeter());
       system.out.println("Perimeter of c2:" + c2.Perimeter());
       
       c1.setColor("red");
       system.out.println("c1 color:" + c1. getcolor());
       
       c1.setColor(1.0);
       system.out.println("Area of c1:" + c1. gearea());
       }
}



public class Circle{
    private double radius;
    private String color;
    
    public double getRadius(){
        return radius;
    }
    
    public void setRadius(double r){
        radius=r;
    }
    
    public String grtColor(){
        return color;
    }
    
    public void setcolor(String c ){
        color =c;
    }
    public double getArea(){
        return 1.0*radius*radius;
    }
    public double getPerimeter(){
        return 2*1.0*radius;
    }
}

