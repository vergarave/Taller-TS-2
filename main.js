import { series } from "./data.js";
const tableBody = document.getElementById("series-body");
const detailContainer = document.getElementById("serie-detail");
let totalSeasons = 0;
series.forEach((serie) => {
    var _a;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${serie.id}</td>
    <td><a href="#" class="serie-link">${serie.name}</a></td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
    (_a = row.querySelector(".serie-link")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
        e.preventDefault();
        showSerieDetail(serie);
    });
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
});
const average = totalSeasons / series.length;
const avgRow = document.createElement("tr");
avgRow.innerHTML = `<td colspan="4"><strong>Seasons average: ${average.toFixed(2)}</strong></td>`;
tableBody.appendChild(avgRow);
function showSerieDetail(serie) {
    detailContainer.innerHTML = `
    <div class="card">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="btn btn-primary">More info</a>
      </div>
    </div>
  `;
}
