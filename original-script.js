const yearSelect = document.getElementById("year");
const examTypeSelect = document.getElementById("examType");
const courseSelect = document.getElementById("course");
const numberInput = document.getElementById("number");
const generatePDFButton = document.getElementById("generatePDF");
const viewPDFLink = document.getElementById("viewPDF");
const downloadPDFLink = document.getElementById("downloadPDF");

examTypeSelect.addEventListener("change", updateCourseOptions);
generatePDFButton.addEventListener("click", generatePDF);

function updateCourseOptions() {
  courseSelect.innerHTML = "";
  const selectedExamType = examTypeSelect.value;
  let courseOptions = "";

  if (selectedExamType === "Vocational") {
    courseOptions = `
      <option selected="selected" value="Part-I">Part-I</option>
      <option value="Part-II">Part-II</option>
      <option value="Part-III">Part-III</option>
    `;
  } else if (selectedExamType === "General") {
    courseOptions = `
      <option selected="selected" value="BA-I">BA-I</option>
      <option value="BA-II">BA-II</option>
      <option value="BA-III">BA-III</option>
      <option value="BCOM-I">BCOM-I</option>
      <option value="BCOM-II">BCOM-II</option>
      <option value="BCOM-III">BCOM-III</option>
      <option value="BSC-I">BSC-I</option>
      <option value="BSC-II">BSC-II</option>
      <option value="BSC-III">BSC-III</option>
    `;
  } else if (selectedExamType === "Regular") {
    courseOptions = `
      <option selected="selected" value="B.A.Hons.(Part-I)">B.A.Hons.(Part-I)</option>
      <option value="B.A.Hons.(Part-II)">B.A.Hons.(Part-II)</option>
      <option value="B.A.Hons.(Part-III)">B.A.Hons.(Part-III)</option>
      <option value="B.Com(Part-I)">B.Com(Part-I)</option>
      <option value="B.Com(Part-II)">B.Com(Part-II)</option>
      <option value="B.Com(Part-III)">B.Com(Part-III)</option>
      <option value="B.Sc.Hons.(Part-I)">B.Sc.Hons.(Part-I)</option>
      <option value="B.Sc.Hons.(Part-II)">B.Sc.Hons.(Part-II)</option>
      <option value="B.Sc.Hons.(Part-III)">B.Sc.Hons.(Part-III)</option>
    `;
  }

  courseSelect.innerHTML = courseOptions;
}

function generatePDF() {
  const selectedYear = yearSelect.value;
  const selectedExamType = examTypeSelect.value;
  const selectedCourse = courseSelect.value;
  const enteredNumber = numberInput.value;
  const pdfURL = `https://lu.indiaexaminfo.co.in/PATLIPUTRA/${selectedYear}/${selectedExamType}/${selectedCourse}/${enteredNumber}.pdf`;

  viewPDFLink.href = pdfURL;
  downloadPDFLink.href = pdfURL;

  viewPDFLink.style.display = "inline";
  downloadPDFLink.style.display = "inline";
}
