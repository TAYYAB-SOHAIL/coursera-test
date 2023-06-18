

function student (first,last,age){
 this.firstname=first;
 this.lastname=last;
 this.myage=age;
}
var student1= new student("Tayyab", "Sohail","22");
console.log(student1);
var student2= new student("Ali", "Sohail","24");

student2.salary="9k";
console.log(student2);
student2.reg=function(){
  return this.firstname + " " + this.myage;
}
student.prototype.fathername="Jam Abdullah";
console.log(student1);
student.prototype.mymethod=function(){
  return this.firstname + " " + this.lastname;
}
var literal={
  radius:10,
  getArea:function(){
    var self=this;
    console.log(this);
    var myfucntion=function(){
      self.radius=20;
    };
    myfucntion();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2);
  }
}
console.log(literal.getArea());
var myArray=new Array();
myArray[0]=" Tayyab";
myArray[1]=3;
myArray[2]=function(name){
  // console.log("Hello" + name);
}
myArray[3]={course:"HTML, CSS and JS"};
console.log(myArray);
myArray[2](myArray[0]);
// Other method for writing array

 var array=["Tayyab", "Hassan", "Waseem","Ahmad"];
for(i=0; i<array.length; i++){
  console.log("Hello " +array[i]);
}
array[50]="Manan";
for(i=0; i<array.length; i++){
  console.log("Hello " +array[i]);
}
var obj={
  Fname:"Tayyab",
  Lname:"Sohail",
  Address:"Allah Abad"
};
array.fifth="Dilshad";
for(var prop in array){
console.log(prop + ": " +array[prop]);
}

(function(){
  console.log("Hello");
})();

