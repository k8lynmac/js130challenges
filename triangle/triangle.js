//Triangles

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (!this.validateSides()) {
      throw new Error('Invalid triangle lengths');
    }
  }

  //returns strings equilateral, isosceles, scalene or throws error
  kind() {

    if (this.isItEquilateral()) return 'equilateral';

    if (this.isItScalene()) return 'scalene';

    return 'isosceles';
  }

  //all 3 sides are same length
  isItEquilateral() {
    return (this.side1 === this.side2 && this.side1 === this.side3);
  }

  //all sides of different lengths
  isItScalene() {
    return (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3);
  }

  
  validateSides() {
    //all sides must be of length > 0
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) return false;

    //sum of the lengths of any two sides must be greater than the length of the third side.
    if (this.side1 >= (this.side2 + this.side3) || this.side2 >= (this.side1 + this.side3) || this.side3 >= (this.side1 + this.side2)) return false;
    
    return true;
  }
}

module.exports = Triangle;

