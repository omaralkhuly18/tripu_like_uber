// open and close mobile menu script start
// تعريف دالة فتح القائمة
function openNav() {
  document.getElementById("myNav").style.width = "80%";
  document.getElementById("myNav").style.left = "2  0%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.left = "0%";
}

// إضافة المستمع للحدث لزر الفتح
document.getElementById("openButton").addEventListener("click", openNav);

// إضافة المستمع للحدث لزر الإغلاق
document.getElementById("closeButton").addEventListener("click", closeNav);
// open and close mobile menu script end

// dropdown list header one script start
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
    const dropdowns = document.querySelectorAll(".dropdown-content.show");
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove('show');
    });
  }
}

// dropdown list header one script end

// dropdown list header tow script start
function productDropdown() {
  const dropMenu = document.getElementById("productDropdown");
  dropMenu.classList.toggle("whatch");
}

window.onclick = function (event) {
  if (!event.target.matches('.product') && !event.target.closest('.product')) {
    const dropMenus = document.querySelectorAll(".dropdown-product.whatch");
    dropMenus.forEach(function (dropMenu) {
      dropMenu.classList.remove('whatch');
    });
  }
}

// dropdown list header tow script end

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

document.getElementById("myButton").addEventListener("click", function (event) {
  event.preventDefault();
  validateStep(1);
});

function validateStep(step) {
  if (step === 1) {
    const location = document.getElementById('location').value;
    const destination = document.getElementById('destination').value;
    if (location && destination) {
      nextStep(1);
    } else {
      alert(' يرجى ملء جميع الحقول المطلوبة. ');
    }
  } else if (step === 2) {
    const number = document.getElementById('number').value;
    const tel = document.getElementById('tel').value;
    if (number && tel) {
      nextStep(2);
    } else {
      alert(' يرجى ملء جميع الحقول المطلوبة. ');
    }
  }
}

function nextStep(step) {
  document.getElementById('step' + step).style.display = 'none';
  document.getElementById('step' + (step + 1)).style.display = 'block';
  updateIconStatus(step + 1);
  if (step === 1 || step === 2) {
    // Display confirmation on step 3
    displayConfirmation();
    // Set the URL hash to navigate to step 2
  }
}

function prevStep(step) {
  document.getElementById('step' + step).style.display = 'none';
  document.getElementById('step' + (step - 1)).style.display = 'block';
  updateIconStatus(step - 1);
}

function displayConfirmation() {
  const location = document.getElementById('location').value;
  const destination = document.getElementById('destination').value;
  const number = document.getElementById('number').value;
  const tel = document.getElementById('tel').value;

  const confirmationDiv = document.getElementById('confirmation');
  confirmationDiv.innerHTML = `
    <p> الموقع : ${location}</p>
    <p> الوجهة : ${destination}</p>
    <p> السعر الذي إخترته الخاص بك  :$ ${number} </p>
    <p>  هاتفك للتواصل : ${tel}</p>
  `;
}

function updateIconStatus(currentStep) {
  // Remove the 'active' class from all icons
  for (let i = 1; i <= 3; i++) {
    document.getElementById('iconbox' + i).classList.remove('active');
  }

  // Add the 'active' class to the appropriate icon based on the current step
  document.getElementById('iconbox' + currentStep).classList.add('active');
}



function submitForm() {
  // Display the modal
  document.getElementById('myModal').style.display = 'block';
}

function resetForm() {
  // Logic to reset the form and return to Step 1
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('location').value = "";
  document.getElementById('destination').value = "";
  // Reset taskbar items to default state
  const taskbarItems = document.querySelectorAll('.taskbar-item');
  taskbarItems.forEach(item => {
    item.classList.remove('active');
  });

  // Set the first taskbar item as active
  const firstTaskbarItem = document.querySelector('.taskbar-item:first-child');
  firstTaskbarItem.classList.add('active');

  closeModal();
}


function printDetails() {
  // Implement the logic to print the details here
  // For demonstration, this will just print the entire window
  window.print();
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// فتح النافذة المودال
function openScheduleModal() {
  document.getElementById('scheduleModal').style.display = 'block';
}

// إغلاق النافذة المودال
function closeScheduleModal() {
  document.getElementById('scheduleModal').style.display = 'none';
}


// step of step script end tripU

// loading script start
document.addEventListener("DOMContentLoaded", function() {
  const loadWrapp = document.querySelector('.load-wrapp');

  // تشغيل الرسوم المتحركة
  function startAnimation() {
    loadWrapp.style.display = 'block';
    const lines = document.querySelectorAll('.load-3 .line');
    lines.forEach((line, index) => {
      line.style.animation = `loadingC 0.6s ${index * 0.1}s linear infinite`;
    });
  }

  // إيقاف الرسوم المتحركة
  function stopAnimation() {
    loadWrapp.style.display = 'none';
  }

  // استدعاء الوظائف
  startAnimation();

  // إيقاف الرسوم المتحركة بعد مرور 5 ثواني
  setTimeout(stopAnimation, 5000);
});
// loading script end
