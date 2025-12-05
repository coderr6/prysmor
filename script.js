// ====================================
// THEME TOGGLE
// ====================================
const themeBtn = document.getElementById("themeBtn")
const themeIcon = themeBtn.querySelector("i")
const html = document.documentElement

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
  html.setAttribute("data-theme", "light")
  themeIcon.classList.replace("ph-moon", "ph-sun")
}

// Toggle theme on button click
themeBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme")

  if (currentTheme === "light") {
    html.removeAttribute("data-theme")
    localStorage.setItem("theme", "dark")
    themeIcon.classList.replace("ph-sun", "ph-moon")
  } else {
    html.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
    themeIcon.classList.replace("ph-moon", "ph-sun")
  }
})

// ====================================
// MOBILE MENU
// ====================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  mobileNav.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll(".nav-link")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    mobileNav.classList.remove("active")
  })
})

// ====================================
// ACTIVE NAVIGATION LINKS
// ====================================
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section[id]")

function activateNavOnScroll() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", activateNavOnScroll)

// ====================================
// SCROLL ANIMATIONS
// ====================================
const animateElements = document.querySelectorAll(".animate-on-scroll")

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

animateElements.forEach((el) => observer.observe(el))

// ====================================
// BACK TO TOP BUTTON
// ====================================
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// ====================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ====================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ====================================
// FORM VALIDATION & SUBMISSION
// ====================================
const contactForm = document.getElementById("contactForm")
const formSuccess = document.getElementById("formSuccess")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Clear previous errors
  const errorSpans = contactForm.querySelectorAll(".form-error")
  errorSpans.forEach((span) => (span.textContent = ""))

  // Get form values
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const phone = document.getElementById("phone").value.trim()
  const service = document.getElementById("service").value
  const message = document.getElementById("message").value.trim()

  let isValid = true

  // Name validation
  if (name.length < 2) {
    showError("name", "Please enter a valid name")
    isValid = false
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showError("email", "Please enter a valid email address")
    isValid = false
  }

  // Phone validation (optional but if provided, should be valid)
  if (phone && phone.length < 10) {
    showError("phone", "Please enter a valid phone number")
    isValid = false
  }

  // Service validation
  if (!service) {
    showError("service", "Please select a service")
    isValid = false
  }

  // Message validation
  if (message.length < 10) {
    showError("message", "Please provide more details (min 10 characters)")
    isValid = false
  }

  // If valid, show success message
  if (isValid) {
    formSuccess.classList.add("active")
    contactForm.reset()

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.classList.remove("active")
    }, 5000)
  }
})

function showError(fieldId, message) {
  const field = document.getElementById(fieldId)
  const errorSpan = field.parentElement.querySelector(".form-error")
  errorSpan.textContent = message
  field.style.borderColor = "#ef4444"

  // Remove error styling on input
  field.addEventListener(
    "input",
    () => {
      errorSpan.textContent = ""
      field.style.borderColor = ""
    },
    { once: true },
  )
}

// ====================================
// HEADER SCROLL EFFECT
// ====================================
const header = document.getElementById("site-header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// ====================================
// PERFORMANCE: LAZY LOADING IMAGES
// ====================================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.add("loaded")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img)
  })
}
