function User(id,name,salary){
  this.id=id;
  this.name=name;
  this.salary=salary;
}
let u1=new User(100,"gamal",2000);
let u2=new User(10,"ahmed",2100);

console.log(u1.id);
console.log(u1.name);
console.log(u1.salary);

console.log(u2.id);
console.log(u2.name);
console.log(u2.salary);
