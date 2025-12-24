// dashboard-slider GSAP
const slides = document.querySelectorAll(".slide");
const bulletsContainer = document.querySelector(".slider-bullets");

let current = 0;

/* Create bullets dynamically */
slides.forEach((_, index) => {
  const bullet = document.createElement("span");
  bullet.addEventListener("click", () => {
    current = index;
    showSlide(current);
  });
  bulletsContainer.appendChild(bullet);
});

const bullets = bulletsContainer.querySelectorAll("span");

function updateBullets(index) {
  bullets.forEach((b) => b.classList.remove("active"));
  bullets[index].classList.add("active");
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  updateBullets(index);

  gsap.fromTo(slides[index], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
}

/* Init */
showSlide(current);

/* Auto play */
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 4000);

// dashboard-slider GSAP end

// preformance -chart
const ctx = document.getElementById("performanceChart").getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "rgba(147, 51, 205, 0.45)");
gradient.addColorStop(1, "rgba(147, 51, 205, 0)");

const performanceChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: [25, 40, 55, 50, 70, 65, 80, 100],
        fill: true,
        backgroundColor: gradient,
        borderColor: "#9333CD",
        tension: 0.45,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        afterBuildTicks: (scale) => {
          scale.ticks = [{ value: 0 }, { value: 25 }, { value: 50 }, { value: 80 }, { value: 100 }];
        },
        ticks: {
          callback: (val) => val + "%",
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

const chartDataSets = {
  3: {
    labels: ["Jun", "Jul", "Aug"],
    data: [60, 80, 100],
  },
  6: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    data: [40, 55, 50, 70, 80, 100],
  },
  8: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    data: [25, 40, 55, 50, 70, 65, 80, 100],
  },
};

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const period = item.dataset.period;
    const selected = chartDataSets[period];

    performanceChart.data.labels = selected.labels;
    performanceChart.data.datasets[0].data = selected.data;
    performanceChart.update();
  });
});


// animation cards
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card-box", {
  scrollTrigger: {
    trigger: ".performance-section",
    start: "top 80%",
    once: true, 
    invalidateOnRefresh: true,
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});
// animation charts
if (performanceChart && performanceChart.options) {
  performanceChart.options.animation = {
    duration: 1200,
    easing: "easeOutQuart",
  };

  performanceChart.update();
}


// preformance -chart end

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//

// نجيب كل عناصر nav-item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // نشيل active من كل العناصر
    navItems.forEach(i => i.classList.remove('active'));
    
    // نضيف active على العنصر اللي دوس عليه
    item.classList.add('active');
  });
});

// hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      hamburger.style.marginLeft = "65%";
      hamburger.style.marginTop = "15px";
    } else {
      hamburger.style.marginLeft = "0px"; 
      hamburger.style.marginTop = "0px"; 
    }
  });
});

