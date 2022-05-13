const sendData = (body) => {
  const alertWrapper = document.querySelector('.alert');
  console.log(JSON.stringify(body));
  fetch(
    'https://echo.htmlacademy.ru/',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        alertWrapper.style.display = 'block';
        alertWrapper.style.display = 'block';
        setTimeout(() => {
          alertWrapper.style.display = 'none';
        }, 1000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export {sendData}
