module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-injectHtmlTags',
    // injectHtmlTags 方法
    injectHtmlTags: () => {
      return {
        headTags: [
          // {
          //   tagName: 'script',
          //   innerHTML: 'console.log("Hello, Docusaurus! by injectHtmlTags")'
          // },
          {
            tagName: 'script',
            innerHTML: ' window.chatbaseConfig = {  chatbotId: "V5_rBtZ9J8a58fjU1T-sf" }'
          },
          {
            tagName: 'script',
            attributes: {
              src: "https://www.chatbase.co/embed.min.js",
              id: 'V5_rBtZ9J8a58fjU1T-sf',
              defer: true
            }
          },
        ],
        preBodyTags: [
          {
            tagName: 'div',
            attributes: {
              id: 'custom-pre-body-tag',
              style: 'display:none'
            },
            innerHTML: 'This is a custom pre-body tag.'
          }
        ],
        postBodyTags: [
          {
            tagName: 'div',
            attributes: {
              id: 'custom-post-body-tag',
              style: 'display:none'
            },
            innerHTML: 'This is a custom post-body tag.'
          }
        ]
      }
    }
  }
}
