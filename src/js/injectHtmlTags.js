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
          `
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WL8S9N4R');</script>
            <!-- End Google Tag Manager -->
          `
        ],
        preBodyTags: [
          {
            tagName: 'div',
            attributes: {
              id: 'custom-pre-body-tag',
              style: 'display:none'
            },
            innerHTML: 'This is a custom pre-body tag.'
          },
          `
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL8S9N4R"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->
          `
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
