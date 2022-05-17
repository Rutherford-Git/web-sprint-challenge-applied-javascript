const Header = (title, date, temp) => {
  const divline = document.createElement('div');
  const spanline = document.createElement('span');
  const h1line = document.createElement('h1');
  const spanline2 = document.createElement('span');

  divline.classList.add('header');
  spanline.classList.add('date');
  spanline.textContent = date;
  h1line.textContent = title;
  spanline2.classList.add('temp');
  spanline2.textContent = temp;

  divline.appendChild(spanline);
  divline.appendChild(h1line);
  divline.appendChild(spanline2);

 return divline;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
    const pick = document.querySelector(selector);
    pick.appendChild(Header('word', 1234, 98.6));
    return pick;
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
