"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function(){
if (!this.left && !this.right) return 1;
if (!this.left && this.right) return 1 + this.right.size();
if (this.left && !this.right) return 1 + this.left.size();
if (this.left && this.right) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(value){
if (value < this.value){
  if (this.left !== null) return this.left.insert(value)
  else this.left = new BinarySearchTree(value);
}

if (value > this.value){ 
  if (this.right !== null) return this.right.insert(value);
  else this.right = new BinarySearchTree(value);
}
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true;
  if (value < this.value){
    if(this.left === null) return false;
    else return this.left.contains(value);
  }

  if (value > this.value){
    if(this.right === null) return false;
    else return this.right.contains(value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  if (this.left !== null){
    array.push(this.left)};

  if (this.right !== null){
    array.push(this.right)};

  cb(this.value);

  if (array.length > 0){ 
   array.shift().breadthFirstForEach(cb, array)};
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
  // "pre-orden = rood - left - right"
  if (orden === "pre-orden"){
    cb(this.value)
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
  }

  // post-orden = left - right - rood

  else if(orden === "post-orden"){
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    cb(this.value);
  }

  // in-orden = left - rood - right
else {
 if(this.left !== null) this.left.depthFirstForEach(cb, orden);
 cb(this.value);
 if (this.right !== null) this.right.depthFirstForEach(cb, orden);
}



}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
