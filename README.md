Objective
===
Build webpack from scratch, check that each piece works as it is built. Create a meme editor that:
  - text is editable on top and bottom
  - image can be added via file or upload
  - font size / color / family changeable
  - exportable

Steps Taken
===

Build webpack from scratch, add each package bit by bit and check that it works. Create an App.js with a constructor that will store the state. Add things to the state such as font, size, background, header, footer, color. Create an array for font-families and sizes. Access values within the render method. Create JSX elements and add onChange events that call handlers to change the state. Bind handlers to ``this`` in the class constructor. Add dom-to-image and file-saver to allow preview and export of meme. Use styling to make it appealing.

Reflection / Changes
===

This was a nice introduction to react. Figuring out how JSX works with react and event changes was enjoyable! I can see how components can easily get unwieldy and then need to be broken down into smaller components.  

I enjoyed having a better grasp on what webpack does and what each piece contributes as loaders and plugins. 

In the future it will be nice to have a better feel for when components should be broken into further pieces.