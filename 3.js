const array = new Array(1000).fill(0);

async function bootstrap() {
    for (const value of array) {
        console.log(value); // log "asd"
    }
}

bootstrap();