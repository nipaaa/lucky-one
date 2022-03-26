import React from 'react';

const QusAns = () => {
    return (
        <div className='mx-4 py-5'>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">How does react work?</h5>
        <p class="card-text">In React, whenever a components' state changes, the changes are reflected in Virtual DOM.Virtual DOM has the updated state of the component.Whenever a component's state changes, code is re rendered by DOM, and browser has to repaint each and every element on the screen. This involves a lot of mathematical and other calculations. In fancy words, React does batch updates.React Scenes is a simple way to create/test your react components inside your app.React works in declarative code. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">How does useState work in react?</h5>
        <p class="card-text">useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component.The React useState Hook allows us to track state in a function component. State generally refers to data that need to be tracking in an application. </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default QusAns;