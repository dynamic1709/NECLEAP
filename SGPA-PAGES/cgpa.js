let semesterCount = 1;

function addSemester() {
  semesterCount++;
  const semesterInputs = document.getElementById('semesterInputs');

  const subjectDiv = document.createElement('div');
  subjectDiv.className = 'subject';

  subjectDiv.innerHTML = `
    <label>Semester ${semesterCount} SGPA:</label>
    <input type="number" class="sgpa" placeholder="SGPA" step="0.01" required>
  `;

  semesterInputs.appendChild(subjectDiv);
}

function calculateCGPA() {
  const sgpas = document.querySelectorAll('.sgpa');

  let totalSGPA = 0;
  let count = 0;

  sgpas.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      totalSGPA += value;
      count++;
    }
  });

  const resultElement = document.getElementById('cgpaResult');

  if (count === 0) {
    resultElement.innerText = 'Please enter at least one SGPA.';
    return;
  }

  const cgpa = totalSGPA / count;
  resultElement.innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}