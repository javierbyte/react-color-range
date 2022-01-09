# react-color-range-website

## Getting Started

```
git clone git@github.com:javierbyte/react-base.git react-color-range-website && cd react-color-range-website && rm -rf .git && npm install && git init
```

- Replace `react-color-range-website`,
  `Super tiny color input ranges for React.` and `React Color Range`.

```
find . -name '*' -print0 | xargs -0 sed -i "" "s/form/forms/g"
```

## Gists

React project starter for my own projects.

Create new component

```
echo "import React from \"react\";
import \"./style.css\";

function Main(props) {
  const { className = \"\" } = props;

  return <div className={\`myclassname \${className}\`}>
    Content
  </div>;
}

// class Main extends React.Component {
//   state = {
//     aaa: null
//   }
//
//   render() {
//     const { aaa } = this.state;
//   }
// }

export default Main;" > index.js &&
touch style.css
```
