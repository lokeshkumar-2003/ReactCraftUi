<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autocraft Documentation</title>
</head>
<body>

<h1>Autocraft Documentation</h1>

<h2>Introduction</h2>
<p>
  The <strong>Autocraft</strong> library provides reusable components for React and Vite projects to display an animated counter that increments to a specified value. It is easy to use, customizable, and optimized for performance.
</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#available-components">Available Components</a></li>
  <li><a href="#usage">Usage</a>
    <ul>
      <li><a href="#react-project-example">React Project Example</a></li>
      <li><a href="#vite-project-example">Vite Project Example</a></li>
    </ul>
  </li>
  <li><a href="#component-props">Component Props</a></li>
  <li><a href="#error-handling">Error Handling</a></li>
  <li><a href="#styling">Styling</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#how-to-contribute">How to Contribute</a></li>
  <li><a href="#authors">Authors</a></li>
</ul>

<h2 id="installation">Installation</h2>
<p>Install the library using NPM or Yarn:</p>
<pre><code>npm install autocraft-ui
</code></pre>
<p>or</p>
<pre><code>yarn add autocraft-ui
</code></pre>

<h2 id="available-components">Available Components</h2>
<p>The library provides the following components:</p>
<ul>
  <li><code>AutoCounterReact</code>: Designed for React projects.</li>
  <li><code>AutoCounterVite</code>: Optimized for Vite projects.</li>
</ul>

<h2 id="usage">Usage</h2>

<h3 id="react-project-example">React Project Example</h3>
<pre><code>
import React from "react";
import { AutoCounterReact } from "autocraft-ui";

function App() {
return (
&lt;div&gt;
&lt;h1&gt;React AutoCounter Example&lt;/h1&gt;
&lt;AutoCounterReact quantity={1000} delay={20} size="24" color="blue" /&gt;
&lt;/div&gt;
);
}

export default App;
</code></pre>

<h3 id="vite-project-example">Vite Project Example</h3>
<pre><code>
import React from "react";
import { AutoCounterVite } from "autocraft-ui";

function App() {
return (
&lt;div&gt;
&lt;h1&gt;Vite AutoCounter Example&lt;/h1&gt;
&lt;AutoCounterVite quantity={500} delay={15} size="20" color="green" /&gt;
&lt;/div&gt;
);
}

export default App;
</code></pre>

<h2 id="component-props">Component Props</h2>
<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>quantity</code></td>
      <td>Number</td>
      <td>Required</td>
      <td>The final value the counter animates to.</td>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>Number</td>
      <td>10</td>
      <td>The delay in milliseconds between each increment.</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>String/Number</td>
      <td>"18"</td>
      <td>The font size of the counter.</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>String</td>
      <td>"black"</td>
      <td>The color of the counter text.</td>
    </tr>
  </tbody>
</table>

<h2 id="error-handling">Error Handling</h2>
<p>
  The component validates its inputs and throws errors for invalid values:
</p>
<ul>
  <li>If <code>quantity</code> is less than or equal to 0, an error is thrown: <code>Invalid `quantity` value.</code></li>
  <li>If <code>delay</code> is less than or equal to 0, an error is thrown: <code>Invalid `delay` value.</code></li>
</ul>

<h2 id="styling">Styling</h2>
<p>The counter is styled using inline styles. You can customize the <code>size</code> and <code>color</code> props to adjust its appearance.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

<h2 id="how-to-contribute">How to Contribute</h2>
<p>We welcome contributions! If you'd like to contribute, please follow these steps:</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature or bugfix.</li>
  <li>Make your changes and commit them.</li>
  <li>Push to your fork and open a pull request.</li>
</ol>

<h2 id="authors">Authors</h2>
<p>Created and maintained by <strong>Lokesh Kumar</strong> and <strong>Balaji</strong>.</p>

</body>
</html>
