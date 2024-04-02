// open and close mobile menu script start
// تعريف دالة فتح القائمة
function openNav() {
  document.getElementById("myNav").style.width = "60%";
  document.getElementById("myNav").style.left = "40%";
}

// تعريف دالة إغلاق القائمة
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.left = "0%";
}

// تحديد الزر الذي يفتح القائمة
const openButton = document.getElementById("openButton");
if (openButton !== null) {
  openButton.addEventListener("click", openNav);
}

// تحديد الزر الذي يغلق القائمة
const closeButton = document.getElementById("closeButton");
if (closeButton !== null) {
  closeButton.addEventListener("click", closeNav);
}

// تعريف وسيط الإعلام الذي يستخدم لتعديل حجم القائمة
const mediaQuery = window.matchMedia("(max-width: 660px) and (min-width: 230px)");

// تعريف دالة تغيير حجم القائمة بناءً على وسيط الإعلام
function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.left = "0%";
  } else {
    document.getElementById("myNav").style.width = "60%";
    document.getElementById("myNav").style.left = "40%";
  }
}

// تشغيل دالة تغيير حجم القائمة عند تحميل الصفحة
handleMediaChange(mediaQuery);

// تفعيل دالة تغيير حجم القائمة عند تغيير وسيط الإعلام
mediaQuery.addEventListener("change", handleMediaChange);

// دالة تسترجع "resize" لاستخدامها لاحقًا إذا اقتضت الضرورة
function newFunction() {
  return "resize";
}

// open and close mobile menu script end

// dropdown list one script start
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
    const dropdowns = document.querySelectorAll(".dropdown-content.show");
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('show');
    });
  }
}

// dropdown list one script end

// dropdown list tow script start
function productDropdown() {
  const dropMenu = document.getElementById("productDropdown");
  dropMenu.classList.toggle("whatch");
}

window.onclick = function(event) {
  if (!event.target.matches('.product') && !event.target.closest('.product')) {
    const dropMenus = document.querySelectorAll(".dropdown-product.whatch");
    dropMenus.forEach(function(dropMenu) {
      dropMenu.classList.remove('whatch');
    });
  }
}

// dropdown list tow script end

// dropdown list mobile one script start
function menuMobileNav() {
  var menu = document.getElementById("dropdownMobile");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
// drobdown list mobile one script end

// dropdown list mobile tow script start
function listMobileNav() {
  var menu = document.getElementById("dropdownMobileList");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
// drobdown list mobile tow script end

// step of step script start tripU

function validateStep(step) {
  if (step === 1) {
    const location = document.getElementById('location').value;
    const destination = document.getElementById('destination').value;
    if (location && destination) {
      nextStep(1);
    } else {
      alert('Please fill in all required fields.');
    }
  } else if (step === 2) {
    const number = document.getElementById('number').value;
    const tel = document.getElementById('tel').value;
    if (number && tel) {
      nextStep(2);
    } else {
      alert('Please fill in all required fields.');
    }
  }
}

function nextStep(step) {
  document.getElementById('step' + step).style.display = 'none';
  document.getElementById('step' + (step + 1)).style.display = 'block';
  if (step === 1 ) {
    // Display confirmation on step 3
    window.location.href = 'index.html'
    displayConfirmation();
  } else {
  document.getElementById('step' + (step + 1)).style.display = 'block';
}
}


function prevStep(step) {
  document.getElementById('step' + step).style.display = 'none';
  document.getElementById('step' + (step - 1)).style.display = 'block';
}

function displayConfirmation() {
  const location = document.getElementById('location').value;
  const destination = document.getElementById('destination').value;
  const number = document.getElementById('number').value;
  const tel = document.getElementById('tel').value;

  const confirmationDiv = document.getElementById('confirmation');
  confirmationDiv.innerHTML = `
    <p>Location: ${location}</p>
    <p>Destination: ${destination}</p>
    <p>Your Price Choose: ${number}</p>
    <p> Your Phone : ${tel}</p>
  `;
}

function submitForm() {
  // Here you can submit the form data
  alert('Form submitted successfully!');
}

// step of step script end tripU
