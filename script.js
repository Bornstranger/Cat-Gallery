const gallery = document.querySelector(".cat-gallery");
const loadBtn = document.querySelector(".load-more");

const API_KEY = "live_qZ2ZAGspga3zDolSZUlJ5JVySNcqXwVsILYraQidnmz70geRjd2VZ4x7uEmU4KF1";


async function fetchCats() {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng",
      {
        headers: {
          "x-api-key": API_KEY
        }
      }
    );

    const cats = await response.json();

    cats.forEach(cat => {
      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = "Bengal Cat";
      img.classList.add("cat-image");
      gallery.appendChild(img);
    });
  } catch (err) {
    console.error("Failed to load cats:", err);
    gallery.innerHTML = `<p>Could not load cat images. Try again later.</p>`;
  }
}

loadBtn.addEventListener("click", fetchCats);
fetchCats();
