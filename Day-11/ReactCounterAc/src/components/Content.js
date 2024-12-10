import React from 'react'

function Content(props) {
  return (
    <>
    <p>
    Flexbox Layout:

navbar uses display: flex to arrange the logo and menu items.
CSS-in-JS:

Inline styles for simplicity. You can replace this with CSS or styled-components as needed.
Responsive Design:

For responsiveness, you can use media queries in an external stylesheet or apply a library like Bootstrap.
Customizable Links:
    </p>
    <h1>{props.car}</h1>
    </>
  )
}

export default Content