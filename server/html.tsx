import React from 'react'

interface Html {
    scripts: Array<string>
}

export default function Html({ children, scripts }: React.PropsWithChildren<Html>) {
    return (
        <html>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link href="/css/main.05ff6aad062c5ba65665.css" rel="stylesheet" />
            <title>React Starter Pack</title>
        </head>
        <body>
        <div id="root">{children}</div>
        {scripts.map((script, index) => <script src={script} key={index} />)}
        </body>
        <script type="text/javascript" src="js/main.5023b86cf31cdfd8334e.js"></script>
        </html>
    )
}