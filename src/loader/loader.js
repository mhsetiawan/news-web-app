const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
export async function indexLoader({ request }) {
  const url = new URL(request.url);
  const currentPage = Number(url.searchParams.get("page")) || 0;
  console.log(currentPage, "<---searchparam currentPage");

  try {
    const response = await fetch(
      `${baseUrl}?q=indonesia&fq=glocations:(%22indonesia%22)&sort=newest&page=${currentPage}&api-key=6Ojl6GXeXAW1mZ4PxniobvjtUrh2QWCN`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const articles = json.response.docs;
    const totalData = json.response.meta.hits;
    return { articles, currentPage, totalData };
  } catch (error) {
    console.log(error.message);
  }
}

function getDate(date) {
  const twoDigitDate =
    date.getDate().toString().length == 1
      ? "0" + date.getDate()
      : date.getDate();
  const twoDigitMonth =
    (date.getMonth() + 1).toString().length == 1
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const dateYear = date.getFullYear().toString();
  const returnDate = dateYear + twoDigitMonth + twoDigitDate;

  return returnDate;
}

export async function programmingLoader({ request }) {
  const url = new URL(request.url);
  const currentPage = Number(url.searchParams.get("page")) || 0;
  //get date for end_date query parameter
  const date = new Date();
  const endDate = getDate(date);
  //get prior date 1 month before for start_date query parameter
  const priorDate = new Date(new Date().setDate(date.getDate() - 30));
  const startDate = getDate(priorDate);

  // begin_date=20240101&end_date=20240802

  console.log(currentPage, "<----page");
  console.log(startDate, "<===start date");
  console.log(endDate, "enddate");
  try {
    const response = await fetch(
      `${baseUrl}?q=programming&fq=news_desk:(%22Technology%22)&sort=newest&page=${currentPage}&api-key=6Ojl6GXeXAW1mZ4PxniobvjtUrh2QWCN`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const articles = json.response.docs;
    const totalData = json.response.meta.hits;
    return { articles, currentPage, totalData };
  } catch (error) {
    console.log(error.message);
  }
}

export async function searchLoader({ request, params }) {
  const url = new URL(request.url);
  const currentPage = Number(url.searchParams.get("page")) || 0;
  const query = params.searchQuery;
  console.log(currentPage, "<----query page");
  console.log(query, "<----parameter :searchQuery");

  try {
    const response = await fetch(
      `${baseUrl}?q=${query}&sort=newest&page=${currentPage}&api-key=6Ojl6GXeXAW1mZ4PxniobvjtUrh2QWCN`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const articles = json.response.docs;
    const totalData = json.response.meta.hits;
    return { articles, currentPage, totalData, query };
  } catch (error) {
    console.log(error.message);
  }
}

// export async function actionRoot({ request }) {
//   const formData = await request.formData();
//   console.log(formData.get("q"));
// }

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
  console.log(event.target.innerText);
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
