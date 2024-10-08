// localStorage
export function getSavedNews() {
  return JSON.parse(localStorage.getItem("savedNews"));
}

export function setSavedNews(savedNews) {
  localStorage.setItem("savedNews", JSON.stringify(savedNews));
}

export function addSaved(
  event,
  _id,
  source,
  byline,
  web_url,
  headline,
  abstract
) {
  let savedNews = getSavedNews();
  const btnLabel = event.target.innerText;

  if (btnLabel === "Save") {
    const id = savedNews ? savedNews[savedNews.length - 1].id + 1 : 1;
    const payload = {
      id,
      _id,
      source,
      byline,
      web_url,
      headline,
      abstract,
    };
    if (savedNews) {
      savedNews.push(payload);
    } else {
      savedNews = [payload];
    }

    setSavedNews(savedNews);
    alert(`Article Saved`);
  } else if (btnLabel === "Unsave") {
    const upadatedSavedNews = savedNews.filter((e) => e._id !== _id);
    setSavedNews(upadatedSavedNews);
    if (savedNews.length === 1) {
      localStorage.removeItem("savedNews");
    }
    alert("Article Unsaved");
  }
}

export function isAlreadySaved(_id) {
  let savedNews = getSavedNews();
  if (savedNews) {
    const article = savedNews.find((article) => article._id === _id);
    if (article) {
      return true;
    }
  }

  return false;
}
