// script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("data.xml")
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("item");
        items.forEach(item => {
          const title = item.querySelector("title").textContent;
          const desc = item.querySelector("description").textContent;
          const newsBlock = document.createElement("div");
          newsBlock.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
          document.body.appendChild(newsBlock);
        });
      });
  });
  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const hours = document.getElementById("hours").value;
  
    const xmlData = `
  <booking>
    <name>${name}</name>
    <date>${date}</date>
    <time>${time}</time>
    <hours>${hours}</hours>
  </booking>
    `.trim();
  
    const blob = new Blob([xmlData], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `booking_${date}_${time.replace(":", "-")}.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    document.getElementById("confirmation").innerHTML = `
      <p style="color: #00ffc3;">Бронирование сохранено в XML-файл! Спасибо, ${name}.</p>
    `;
  });