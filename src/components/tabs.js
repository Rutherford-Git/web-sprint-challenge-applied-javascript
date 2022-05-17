const Tabs = (topics) => {
    const divline1 = document.createElement('div');
  
    topics.forEach(element => {
      const divline21 = document.createElement('div');
      divline21.classList.add('tab');
      divline21.textContent =element;
      divline1.appendChild(divline21);
    });
    console.log('blue');
  return divline1;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  let URL = `http://localhost:5001/api/topics`
  const pick = document.querySelector(selector);
  const topics = () => { 
    axios.get(URL)
   .then (res => {
     console.log(res)
   })
   .catch (err => {
     console.log(err);
   })
  }
   return pick.appendChild(Tabs(topics));
   
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
