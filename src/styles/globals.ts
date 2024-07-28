import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  overflow-x: hidden;
}
html,
body {
  color: ${(props) => props.theme.placeholder};
  font-size: 62.5%;
  font-weight: 400;
  font-family: "pretendard", "sans-serif";
  line-height: 1;
}
textarea,
input {
  box-sizing: border-box;
  font-family: "pretendard", "sans-serif";
}
a {
  text-decoration: none;
}
button {
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
  padding: 0;
  font-family: "pretendard", "sans-serif";
}
label,
input {
  display: block;
  box-sizing: border-box;
}

`;

export const defaultTheme: DefaultTheme = {
  mainColor: '#F24822',
  bgBlack: '#232323',
  bgBlack2: '#303030',
  bgBlack3: '#272727',
  bgBlack4: '#292929',
  bgBlack5: '#1E1F22',
  bgBlack6: '#232428',
  bgBlack7: '#111214',
  imgbg: '#D9D9D9',
  placeholder: '#888',
  btnHover: '#2F2F2F',
  border1e: '#1E1E1E',
  border25: '#252525',
  border949CF7: '#949CF7',
  fff: '#fff',
};
