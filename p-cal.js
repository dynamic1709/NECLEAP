function calculateSGPA() {
    const credits = document.querySelectorAll('.credit');
    const grades = document.querySelectorAll('.grade');
  
    let totalCredits = 0;
    let totalPoints = 0;
  
    for (let i = 0; i < credits.length; i++) {
      let credit = parseFloat(credits[i].value);
      let grade = parseFloat(grades[i].value);
      totalCredits += credit;
      totalPoints += credit * grade;
    }
  
    let sgpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
  }
  