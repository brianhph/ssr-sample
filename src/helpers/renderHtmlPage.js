export default (content: content) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="Content-Language" content="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="react-view">react view</div>
        <div>${content}</div>
        <script type="text/javascript">
        </script>
      </body>
    </html>
  `;

}
