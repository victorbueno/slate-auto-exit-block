# slate-auto-exit-block

Let's say you are working on a Word Document.

You are using an ordered list. When you hit 'Enter' twice, the editor clears the last list line and add a new paragraph. That's what this plugin does.

## Installation

`yarn add slate-auto-exit-block`

## Usage

```javascript
import AutoExitBlock from 'slate-auto-exit-block'
import { Editor } from 'slate-react'

// Add the plugin to your set of plugins...
const plugins = [
  AutoExitBlock()
]

// And later pass it into the Slate editor...
<Editor
  ...
  plugins={plugins}
/>
```

# Blocks

## H1-H6

Insert a new paragrah on simple Enter.

## Blockquote, UL and OL

Insert a new paragraph on a double Enter if the last block is empty. Also removes this last block.

# TO-DO

- Make it work for tables and other elements.
