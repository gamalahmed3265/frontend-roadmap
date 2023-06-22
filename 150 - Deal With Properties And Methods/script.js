class User{
constructor (id,name,salary){
  this.id=id;
  this.name=name || "Unknown";
  this.salary=salary <6000 ? salary+500: salary;
  this.msg=function(){
    return `hello ${this.name} your salary: ${this.salary}`;
  }
}
  writeMsg(){
    return `hello ${this.name} your salary: ${this.salary}`;
  }
}
let u1=new User(100,"gamal",2000);

console.log(u1.id);
console.log(u1.name);
console.log(u1.salary);
console.log(u1.msg());
console.log(u1.msg);

console.log(u1.writeMsg());
console.log(u1.writeMsg);
