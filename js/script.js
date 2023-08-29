const cardContainer = document.getElementById('card-container');
const seeMore = document.getElementById('see-more');

const cardFetch = async (isAll) => {
  cardContainer.innerHTML = '';
  let res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  let data = await res.json();
  data = data.data.tools;
  console.log(data[0]);

  if (!isAll && data.length > 6) {
    data = data.slice(0, 6);
    seeMore.style.display = 'block';
  } else {
    seeMore.style.display = 'none';
  }
  
  data.forEach((item) => {
    const cardElement = document.createElement('div');
    cardElement.classList = 'border border-gray-300 p-8 rounded-lg';
    cardElement.innerHTML = `
      <img class="w-full max-w-[450px] block mx-auto mb-6 rounded-lg"
      src="${item.image}" alt="Card Image">
      <h2 class="text-2xl font-bold text-black mb-2">Features</h2>
      <ol class="text-gray-500 space-y-1 list-[number] list-inside">
        <li>${item.features[0]}</li>
        <li>${item.features[1]}</li>
        <li>${item.features[2]}</li>
      </ol>
      <hr class="my-6">
      <div class="flex justify-between items-center gap-8">
        <div>
          <h2 class="text-2xl font-bold text-black mb-2">${item.name}</h2>
          <span class="text-gray-500"><i class="fa-solid fa-calendar-days"></i> ${item.published_in}</span>
        </div>
        <i
          class="fa-solid fa-arrow-right w-10 h-10 rounded-full bg-red-50 text-red-500 flex justify-center items-center text-xl"></i>
      </div>
    `;
    cardContainer.appendChild(cardElement);
  })

}
cardFetch();