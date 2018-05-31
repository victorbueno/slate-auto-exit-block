function AutoExitBlock(options = {}) {
  return {
    onKeyDown(event, change) {
      if (event.key !== 'Enter') return

      let block = change.value.startBlock
      let blockType = block.type
      let isBlockEmpty = block.isEmpty

      let header = RegExp(/^(h{1,6})$/)
      if (header.test(blockType))
        return change.insertBlock('paragraph')

      if (blockType === 'blockquote' && isBlockEmpty)
        return change.setBlocks('paragraph')

      if (blockType === 'li' && isBlockEmpty) {
        let parentType = change.value.document.getParent(block.key).type
        return change.unwrapBlock(parentType).setBlocks('paragraph')
      }

    }
  }
}

export default AutoExitBlock