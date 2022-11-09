const Header = (title, date, temp) => {
  const divLine = document.createElement('div');
  const spanLine = document.createElement('span');
  const h1Line = document.createElement('h1');
  const spanLine2 = document.createElement('span');

  divLine.classList.add('header');
  spanLine.classList.add('date');
  spanLine.textContent = date;
  h1Line.textContent = title;
  spanLine2.classList.add('temp');
  spanLine2.textContent = temp;

  divLine.appendChild(spanLine);
  divLine.appendChild(h1Line);
  divLine.appendChild(spanLine2);

 return divLine;
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
    const date = new Date().toJSON().slice(0,10).replace(/-/g,'/')
    pick.appendChild(Header('Rutherford\'s Blog', date, 98.6));
    return pick;
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
