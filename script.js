document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  // CSV 파일 경로
  const csvFilePath = "./customers.csv";  

  fetch(csvFilePath)
      .then((response) => response.text())
      .then((data) => {
          const rows = data.split("\n");
          const headers = rows[0].split(","); 

          // 데이터 추가
          rows.slice(1).forEach((row) => {
              const columns = row.split(",");
              const slide = document.createElement("div");
              slide.classList.add("swiper-slide");

              slide.innerHTML = `
                  <div class="card">
                      <h3>${columns[0]}</h3> <!-- 첫 번째 열: 고객 이름 -->
                      <p>name: ${columns[1]}</p> <!-- 두 번째 열: 이메일 -->
                      <p>email: ${columns[2]}</p> <!-- 세 번째 열: 전화번호 -->
                      <p>phone: ${columns[3]}</p> <!-- 세 번째 열: 전화번호 -->
                      <p>adress: ${columns[4]}</p> <!-- 세 번째 열: 전화번호 -->
                  </div>
              `;
              
              swiperWrapper.appendChild(slide);
          });

          // Swiper 초기화
          const swiper = new Swiper(".mySwiper", {
              slidesPerView: 1, // 한 번에 보이는 카드 개수
              spaceBetween: 10, // 카드 간의 간격
              navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
              },
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
              },
              loop: true, // 무한 루프
          });
      })
      .catch((error) => console.error("Error loading CSV file:", error));
});