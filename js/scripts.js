var getTriangleArea = function(a, h) {
    if ( a <= 0 || h <=0 ) {
      alert("Nieprawidłowe dane");
    } else {
      return a * h / 2;
    }
};
console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(-45, 4544);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(1434, 1);
console.log(triangle3Area);