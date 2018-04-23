//屏蔽知乎热门内容 
// 作者：顾轶灵
// 链接：https://zhuanlan.zhihu.com/p/35746125
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

function purify(nodes) {
    for (let node of nodes) {
        if (node.textContent.indexOf('热门内容, ') === 0) {
            node.querySelector('.TopstoryItem-rightButton').click()
            // node.parentNode.removeChild(node) // 做人留一线，先注释掉
        }
    }
}

const mo = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            purify(mutation.addedNodes)
        }
    }
})

purify(document.querySelectorAll('.TopstoryItem'))
mo.observe(document.querySelector('.TopstoryMain > div'), { childList: true })

