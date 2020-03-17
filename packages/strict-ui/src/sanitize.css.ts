import { injectGlobal } from 'emotion'

/*!
 * Sanitize 2.0.0 (http://git.io/sanitize)
 * Licensed under the MIT License.
 */
// Copied from https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css
injectGlobal`
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  legend,
  nav,
  section {
    display: block;
  }
  audio,
  canvas,
  label,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background: 0 0;
  }
  hr {
    height: 0;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  h1 {
    font-size: 2em;
  }
  b,
  strong {
    font-weight: 700;
  }
  small {
    font-size: 85%;
  }
  sub,
  sup {
    position: relative;
    font-size: 80%;
    line-height: 0;
    vertical-align: baseline;
  }
  sup {
    top: -0.25em;
  }
  sub {
    bottom: -0.25em;
  }
  dfn {
    font-style: italic;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  mark {
    color: #000;
    background: #ff0;
  }
  blockquote:before,
  blockquote:after {
    content: '';
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }
  pre {
    overflow: auto;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  audio,
  canvas,
  embed,
  iframe,
  img,
  object,
  svg,
  video {
    vertical-align: middle;
  }
  img {
    height: auto;
    max-width: 100%;
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  progress {
    vertical-align: baseline;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }
  button,
  select {
    text-transform: none;
  }
  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    padding: 0;
    border: 0;
  }
  input {
    line-height: normal;
  }
  input[type='search'] {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    -webkit-appearance: button;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  input::-moz-placeholder {
    opacity: 1;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  input[type='checkbox'],
  input[type='radio'] {
    padding: 0;
    margin: 4px 0 0;
    line-height: normal;
    box-sizing: border-box;
  }
  textarea {
    padding: 0;
    vertical-align: top;
  }
  button {
    overflow: visible;
  }
  table {
    max-width: 100%;
    border-collapse: collapse;
  }
  th {
    text-align: left;
  }

  /*
  * Custom stuff
  */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  img {
    display: inline-block;
  }
`
