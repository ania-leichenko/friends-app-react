fetch("https://instagram.com", {
  body: "Норм сайт",
})
  .then((result) => {
    console.log(result);
    alert("Коммент отправлен");
  })
  .then(() => {
    document.querySelector("input").value = "";
  })
  .catch((err) => {
    console.log(err);
    alert("Произошла ошибка");
  });
