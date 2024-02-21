//Triangles

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3]

    if (!(this.validateSides())) {
      throw new Error;
    } 
  }

  isItEquilateral() {
    return (this.sides.every(side => side === this.sides[0]));
  
  }

  //all sides of different length 
  isItScalene() {
    let [side1, side2, side3] = this.sides;
    if ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) return true;
  }
  
  validateSides() {
    //all sides must be > 0 
    let [side1, side2, side3] = this.sides;
    if (this.sides.some(side => side <= 0)) return false;
    //sum of lengths of any two sides must be greater than length of the third side 
    if (side1 >= side2 + side3 || 
          side2 >= side1 + side3 ||
            side3 >= side1 + side2) {
              return false;
            }
    return true;
  }

  kind() {
    if (this.isItEquilateral()) {
      return 'equilateral';
    } else if (this.isItScalene()) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }
}

module.exports = Triangle;

