

(function($){

  //sticky header -----------
  $(window).on('scroll', function() {
      var headerHeight = $('.header-sites').outerHeight(); // Get the dynamic height of .site-header
      if ($(window).scrollTop() >= headerHeight) {
          $('.header-sites').addClass('fixed-header');
      } else {
          $('.header-sites').removeClass('fixed-header');
      }
  });

  // back to top 
  var btn = $('.tap_to_top a');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  // menu -----------
 
  $(".trigger_mobile_menu").click(function () {
    $("body").toggleClass("menu_active");
});

$("body").on("click", function (event) {
    if ($(event.target).hasClass("menu_active")) {
        $("body").removeClass("menu_active");
    }
});


// contact-us
// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting
    validateForm();
  });

  function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.remove());

    // Name Validation
    if (name.value.trim() === "") {
      showError(name, "Full Name is required");
      isValid = false;
    } else {
      showSuccess(name);
    }

    // Email Validation
    if (email.value.trim() === "") {
      showError(email, "Email Address is required");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    } else {
      showSuccess(email);
    }

    // Phone Validation
    if (phone.value.trim() === "") {
      showError(phone, "Phone Number is required");
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone.value)) {
      showError(phone, "Please enter a valid 10-digit phone number");
      isValid = false;
    } else {
      showSuccess(phone);
    }

    // Subject Validation
    if (subject.value.trim() === "") {
      showError(subject, "Subject is required");
      isValid = false;
    } else {
      showSuccess(subject);
    }

    // Message Validation
    if (message.value.trim() === "") {
      showError(message, "Message is required");
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters");
      isValid = false;
    } else {
      showSuccess(message);
    }

    // If everything is valid
    if (isValid) {
      alert("✅ Message sent successfully!");
      form.reset();
      document.querySelectorAll(".form-control").forEach(input => {
        input.classList.remove("success");
      });
    }
  }

  // Show error message
  function showError(input, message) {
    input.classList.add("error");
    input.classList.remove("success");

    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  // Show success border
  function showSuccess(input) {
    input.classList.remove("error");
    input.classList.add("success");
  }

  // Email validation regex
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

/*----------------------------------------------
Skip to main content
--------------------------------------------- */
$(".skip-to-main-content-link").focus(function(){
  $(this).addClass('focused');
}); 

$(".skip-to-main-content-link").focusout(function(){
   $(this).removeClass('focused');
});
$(".skip-to-main-content-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#main").offset().top},
  'slow');
});

$('#wpadminbar .screen-reader-shortcut').attr('tabindex','-1');


    /*----------------------------------------------
  Accessibility Desktop Menu
  --------------------------------------------- */
  // Close all menus initially
$(".sub-menu").slideUp();
$(".nav_arrowdown").attr("aria-expanded", "false");
 
let touchHandled = false;
 
$(".nav_arrowdown").on("touchend", function () {
  touchHandled = true;
  handleMenuToggle($(this));
});
 
$(".nav_arrowdown").on("click", function () {
  if (touchHandled) {
    touchHandled = false;
    return;
  }
  handleMenuToggle($(this));
});
 
function handleMenuToggle($arrow) {
  const $submenu = $arrow.next(".sub-menu");
  const $parentLi = $arrow.closest("li");
  const isSubmenuVisible = $submenu.is(":visible");
 
  // Close only sibling submenus (same level)
  $parentLi.siblings().each(function () {
    $(this).find("> .sub-menu").slideUp().removeClass("active");
    $(this).find("> .nav_arrowdown").attr("aria-expanded", "false");
  });
 
  // Toggle current submenu
  if (!isSubmenuVisible) {
    $submenu.slideDown().addClass("active");
    $arrow.attr("aria-expanded", "true");
  } else {
    $submenu.slideUp().removeClass("active");
    $arrow.attr("aria-expanded", "false");
  }
}
  
/* ---------------------------------------------
Shrink Header
--------------------------------------------- */
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 20) {
      $(".header-sites").addClass("shrink");
  } else {
      $(".header-sites").removeClass("shrink");
  };
});

  $(".overly").click(function(){
    $("body").removeClass("menu_active");
  });


const text = "Html Developer";
const typingElem = document.querySelector(".typing");
let index = 0;

function typeText() {
  if(index < text.length){
    typingElem.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 240); // typing speed
  } else {
    // pause for 5 seconds at full text
    setTimeout(eraseText, 5000);
  }
}

function eraseText() {
  if(index > 0){
    typingElem.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(eraseText, 150); // erase speed
  } else {
    setTimeout(typeText, 700); // restart typing
  }
}

document.addEventListener("DOMContentLoaded", typeText);

  document.getElementById("my-skills-link").addEventListener("click", function() {
    document.getElementById("my-skills-section").scrollIntoView({
      behavior: "smooth"
    });
  });

    document.getElementById("about-link").addEventListener("click", function() {
    document.getElementById("about-me-link").scrollIntoView({
      behavior: "smooth"
    });
  });

    document.getElementById("projects-link").addEventListener("click", function() {
    document.getElementById("recent-projects-link").scrollIntoView({
      behavior: "smooth"
    });
  });
      document.getElementById("contact-link").addEventListener("click", function() {
    document.getElementById("contact-section").scrollIntoView({
      behavior: "smooth"
    });
  });

})(jQuery)




