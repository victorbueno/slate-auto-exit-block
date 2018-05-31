/*
    Options:
    {
      blockType: Block to be searched. Can be a string or a Regular Expression
      exitBlockType: The block type that the plugin will exit to.
      onEmptyBlock: Controls if the component will exit on 'Enter' key or on 'Enter'
                      key only when the Block is Empty
      unwrap: If the component is children of a parent element (Ordered List, etc),
                      unwrap to level before.
    }
  */

function AutoExitBlock(options = {}) {
  return {
    onKeyDown(event, change) {

      if (event.key !== 'Enter') return

      let block = change.value.startBlock
      let blockType = block.type
      let isBlockEmpty = block.isEmpty

      let regexp = RegExp(options.blockType)
      if (regexp.test(blockType) || options.blockType === blockType) {
        if (options.onEmptyBlock) {
          if (isBlockEmpty)
            if (options.unwrap) {
              let parentType = change.value.document.getParent(block.key).type
              return change.setBlocks(options.exitBlockType).unwrapBlock(parentType)
            } else
              return change.setBlocks(options.exitBlockType)
          else
            return
        } else
          return change.insertBlock(options.exitBlockType)
      }

    }
  }
}

export default AutoExitBlock