
async function calculateInferenceSpeed() {

    //  Record timestamp before model execution

    const timeStart = performance.now();

    // Execute model

    let results = await useSomeModel();

    // Record timestamp after model execution

    const timeEnd = performance.now();

    // Calculate time taken for model execution

    const timeTaken = timeEnd - timeStart;

    console.log(`Time taken ${timeTaken} ms.`);

    // Convert ms to FPS

    console.log(`Frames per sec: ${1000 / timeTaken}`);

}