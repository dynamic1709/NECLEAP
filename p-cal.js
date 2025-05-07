// Validate credit input (must be between 0.5 and 3)
function validateCredit(input) {
  const value = parseFloat(input.value);
  if (!isNaN(value)) {
    if (value > 3) {
      alert('Credit cannot be more than 3.');
      input.value = '';
    } else if (value < 0.5) {
      alert('Credit must be at least 0.5.');
      input.value = '';
    }
  }
}

// Validate grade input (must be between 6 and 10)
function validateGrade(input) {
  const value = parseFloat(input.value);
  if (!isNaN(value)) {
    if (value < 6) {
      alert('Grade below 6 is considered a FAIL. Please enter 6 to 10.');
      input.value = '';
    } else if (value > 10) {
      alert('Grade cannot be more than 10.');
      input.value = '';
    }
  }
}

// Attach validation when the input loses focus (on blur)
document.addEventListener('DOMContentLoaded', () => {
  const creditInputs = document.querySelectorAll('.credit');
  const gradeInputs = document.querySelectorAll('.grade');

  creditInputs.forEach(input => {
    input.addEventListener('blur', () => validateCredit(input));
  });

  gradeInputs.forEach(input => {
    input.addEventListener('blur', () => validateGrade(input));
  });
});

// Calculate SGPA based on valid inputs
function calculateSGPA() {
  const credits = document.querySelectorAll('.credit');
  const grades = document.querySelectorAll('.grade');

  let totalCredits = 0;
  let totalPoints = 0;
  let hasFail = false;

  for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const grade = parseFloat(grades[i].value);

    if (isNaN(credit) || isNaN(grade)) {
      continue;
    }

    if (grade < 6) {
      hasFail = true;
      continue;
    }

    totalCredits += credit;
    totalPoints += credit * grade;
  }

  const resultEl = document.getElementById('result');

  if (totalCredits === 0) {
    resultEl.innerText = 'All subjects failed or no valid inputs.';
  } else {
    const sgpa = totalPoints / totalCredits;
    resultEl.innerText = `Your SGPA is: ${sgpa.toFixed(2)}${hasFail ? ' (Some subjects were failed)' : ''}`;
  }
}
