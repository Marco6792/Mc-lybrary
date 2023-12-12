## npm install mc-media-query

## yarn add mc-media-query

Here are some examples on how you can use the `mc-media-query package` hook in your component:

## Examples

## navState hook in your component:

import { navState } from "mc-media-query";

const App = () => {
const { state, handleToggleNav } = navState({ toggle: false });

return (

<div>
<button onClick={handleToggleNav}>Toggle Navigation</button>
{state.toggle && <nav>Navigation Menu</nav>}
</div>
);
};

export default App;

## useMediaQueryScreen hook in your component:

import { useMediaQueryScreen } from "mc-media-query"

const App = () => {
const isMobile = useMediaQueryScreen("(max-width: 768px)");

return (

<div>
{isMobile ? <p>Mobile view</p> : <p>Desktop view</p>}
</div>
);
};

export default App;

## useScrollHeight hook in your component:

import { useScrollHeight } from "mc-media-query";

const App = () => {
const { matches } = useScrollHeight("example-query", 200);

return (

<div>
{matches ? <p>Scroll position exceeds 200px</p> : <p>Scroll position is below 200px</p>}
</div>
);
};

export default App;

Check out [mc-media-query](https://github.com/Marco6792/mc-Library) for more details.
