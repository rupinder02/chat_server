const hapi = require('@hapi/hapi');

const init = async () => {
    const server = hapi.server({
        port: 3000,
        host: localhost
    });

    await server.start();
    console.log('server listening of port: 3000');
}

init();