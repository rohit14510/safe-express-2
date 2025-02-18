$(document).ready(function () {

  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 2000,
    arrows:true,
  });

  $('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

});


     document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
               
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            
        });
        // -----------------modal
        document.addEventListener("DOMContentLoaded", function () {
          var myModal = new bootstrap.Modal(document.getElementById('offerModal'));
          myModal.show(); // पेज लोड होने के बाद पॉपअप दिखेगा
      });
      // ------track modal
      const complaintBtn = document.getElementById("complaintBtn");
const enquiryForm = document.getElementById("enquiryForm");

complaintBtn.addEventListener("click", () => {
  enquiryForm.style.display =
    enquiryForm.style.display === "block" ? "none" : "block";
});

// Close form when clicking outside
window.addEventListener("click", (event) => {
  if (event.target !== complaintBtn && !enquiryForm.contains(event.target)) {
    enquiryForm.style.display = "none";
  }
});

document.getElementById("track-btn").addEventListener("click", function() {
  let inputField = document.getElementById("mobile-input");
  let errorMsg = document.getElementById("error-msg");
  let callBtn = document.getElementById("call-btn");

  if (inputField.value.trim() === "") {
    alert("Fill the Field...");  // ऑर्डर ट्रैक करने का मैसेज
  } else {
     
      errorMsg.style.display = "block";  // Server error दिखाओ
      callBtn.style.display = "block";   // Call बटन दिखाओ
    
  }
});

// जब यूजर इनपुट टाइप करे तो एरर हटा दो
document.getElementById("mobile-input").addEventListener("input", function() {
  document.getElementById("error-msg").style.display = "none";
  document.getElementById("call-btn").style.display = "none";
});

//88888888
document.getElementById("track-btn-track").addEventListener("click", function() {
  let inputField = document.getElementById("mobile-input-track");
  let errorMsg = document.getElementById("error-msg-track");
  let callBtn = document.getElementById("call-btn-track");

  if (inputField.value.trim() === "") {
    alert("Fill the Field...");  // ऑर्डर ट्रैक करने का मैसेज
  } else {
    errorMsg.style.display = "block";  // Server error दिखाओ
    callBtn.style.display = "block";   // Call बटन दिखाओ
  }
});

// जब यूजर इनपुट टाइप करे तो एरर हटा दो
document.getElementById("mobile-input-track").addEventListener("input", function() {
  document.getElementById("error-msg-track").style.display = "none";
  document.getElementById("call-btn-track").style.display = "none";
});
