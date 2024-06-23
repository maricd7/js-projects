console.log("script connected");
const transponeBtn = document.getElementById("transpone-button");
const matrixInput = document.getElementById("matrix-input");

function transpose(matrix) {
  const newMatrix = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );
  return newMatrix;
}

transponeBtn.addEventListener("click", () => {
  const matrix = JSON.parse(matrixInput.value);
  const transposedMatrix = transpose(matrix);
  console.log("Original Matrix:", matrix);
  console.log("Transposed Matrix:", transposedMatrix);
  alert("Transposed Matrix: " + JSON.stringify(transposedMatrix));
});
