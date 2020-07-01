export const indexTemplate = (content) => {
`  <!doctype html>
  <html lang = "ru">
  <head>
    <meta charset = "UTF-8">
      <meta name = "viewport"
            content = "width=device-width">
        <meta http-equiv = "X-UA-Compatible" content = "ie=edge">
        <script src="/static/client.js" type="text/javascript"></script>
          <title>Document</title>
  </head>
  <body>
  <div id = "app">${content}</div>
  </body>
  </html>`
}
