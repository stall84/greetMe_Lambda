exports.handler = async (event, context) => {

    // let imgData = event.data;        // example use of event-triggered input data
    let imgRes = await resizeImage(event);
    return imgRes;
}

const resizeImage = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!data) {
            reject(console.error('There was an error resolving the promise'));
        }
        resolve(console.log('Function Resolved Successfully!!  ' + data.toString()));
    }, 2000);
});
