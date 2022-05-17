import axios from "axios";

const Card = (article) => {
  const divline = document.createElement('div');
  const divline21 = document.createElement('div');
  const divline22 = document.createElement('div');
  const divline23 = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  divline.classList.add('card');
  divline21.classList.add('headline');
  divline21.textContent = article.headline;
  divline22.classList.add('author');
  divline23.classList.add('img-container');
  img.src = article.authorPhoto;
  span.textContent = `By ${article.authorName}`;

  divline.appendChild(divline21);
  divline.appendChild(divline22);
  divline22.appendChild(divline23);
  divline23.appendChild(img);
  divline22.appendChild(span);

  return divline;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  let URL = `http://localhost:5001/api/articles`
  const pick = document.querySelector(selector);

   axios.get(URL)
   .then (res => {
     const articles = res.data.articles;
     console.log(articles)
     console.log(articles.bootstrap)

     articles.bootstrap.forEach(ind => {
      pick.appendChild(Card(ind))
      })

      articles.javascript.forEach(ind => {
        pick.appendChild(Card(ind))
        })
    
        articles.jquery.forEach(ind => {
          pick.appendChild(Card(ind))
          })

          articles.node.forEach(ind => {
            pick.appendChild(Card(ind))
            })

            articles.technology.forEach(ind => {
              pick.appendChild(Card(ind))
              })
      })
   .catch (err => {
     console.log(err);
   })
  
  
   

   return pick;
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
