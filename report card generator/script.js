const form = document.querySelector('#student-form');
const reportCard = document.querySelector('#report-card');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = form.elements['name'].value;
  const mathGrade = form.elements['math-grade'].value;
  const englishGrade = form.elements['english-grade'].value;
  const scienceGrade = form.elements['science-grade'].value;

  // Calculate grade average
  const gradeAverage = (parseInt(mathGrade) + parseInt(englishGrade) + parseInt(scienceGrade)) / 3;

  // Create report card
  const reportCardHTML = `
    <div class="report-card">
      <h1>Report Card</h1>
      <div class="student-info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Math Grade:</strong> ${mathGrade}</p>
        <p><strong>English Grade:</strong> ${englishGrade}</p>
        <p><strong>Science Grade:</strong> ${scienceGrade}</p>
      </div>
      <div class="grade-summary">
        <p><strong>Grade Average:</strong> ${gradeAverage.toFixed(2)}</p>
      </div>
    </div>
  `;

  // Render report card
  reportCard.innerHTML = reportCardHTML;

  // Clear form
  form.reset();
});
