const fs = require("fs").promises;

async function makeRatingFile(path, array) {
  try {
    const ratingFile = await fs.readFile(path, "utf8");

    let ratingArray = [];
    if (ratingFile) {
      ratingArray = JSON.parse(ratingFile);
    }

    array.forEach((item) => {
      if (!ratingArray.find((el) => el.id === item.id)) {
        let obj = {
          id: item.id,
          title: item.title,
          image: item.image,
          link: item.link,
          description: item.description,
          rating: 0,
        };
        ratingArray.push(obj);
      }
    });

    await fs.writeFile(path, JSON.stringify(ratingArray));
    console.log("Файл записан!");
  } catch (error) {
    console.error("Произошла ошибка при чтении/записи файла:", error);
  }
}

module.exports = makeRatingFile;


/** 
async function makeRatingFile(path, array) {
  const ratingFile = await fs.readFile(path, "utf8");
  
  const ratingArray = JSON.parse(ratingFile);

  array.forEach((item) => {
    if (!ratingArray.find((el) => el.id === item.id)) {
      let obj = {
        id: item.id,
        title: item.title,
        image: item.image,
        link: item.link,
        description: item.description,
        rating: 0,
      };
      ratingArray.push(obj);
    }
  });
  fs.writeFile(path, JSON.stringify(ratingArray), () => {
    console.log("Файл записан!");
})
}

module.exports = makeRatingFile;
**/