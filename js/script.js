function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  function calculateTrianglePerimeter(sideA, sideB, sideC) {
    return sideA + sideB + sideC;
  }
  
  function generateCalculationSteps(...values) {
    let steps = "";
    for (let i = 0; i < values.length - 1; i++) {
      steps += `${values[i]} + `;
    }
    steps = steps.slice(0, -3);
    steps += ` = ${values[values.length - 1]}`;
    return steps;
  }
  
  function displayCalculationResults(resultElementId, resultValue, stepsElementId, steps) {
    const resultElement = document.getElementById(resultElementId);
    resultElement.textContent = resultValue.toFixed(2);
  
    const stepsList = document.getElementById(stepsElementId);
    stepsList.innerHTML = steps;
  }
  
  const calculateAreaButton = document.getElementById('calculateArea');
  const calculatePerimeterButton = document.getElementById('calculatePerimeter');
  
  calculateAreaButton.addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(base) || isNaN(height)) {
      alert('Mohon masukkan angka untuk Panjang Alas dan Tinggi.');
      return;
    }
  
    const area = calculateTriangleArea(base, height);
    const areaSteps = generateCalculationSteps(base, height, 'Luas');
    
    displayCalculationResults('areaValue', area, 'areaSteps', areaSteps);
    displayCalculationResults('resultArea', area, 'areaSteps', areaSteps);
  });
  
  calculatePerimeterButton.addEventListener('click', function() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
  
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      alert('Mohon masukkan angka untuk Sisi A, Sisi B, dan Sisi C.');
      return;
    }
  
    const perimeter = calculateTrianglePerimeter(sideA, sideB, sideC);
    const perimeterSteps = generateCalculationSteps(sideA, sideB, sideC, 'Keliling');
    
    displayCalculationResults('perimeterValue', perimeter, 'perimeterSteps', perimeterSteps);
    displayCalculationResults('resultPerimeter', perimeter, 'perimeterSteps', perimeterSteps);
  });
  