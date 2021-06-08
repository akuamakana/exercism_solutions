//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.matrixArray = matrix.split('\n').map((row) => row.split(' ').map((entry) => +entry));
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    const columnArray = this.matrixArray[0].map((entry, i) => this.matrixArray.map((row) => row[i]));
    return columnArray;
  }
}
