// import your Worker
import { generateExampleWorkerUrl } from "./worker"

const workerUrl = generateExampleWorkerUrl()

const worker = new Worker(workerUrl);


// Workerのイベントを受け取る
worker.addEventListener("message" , (e) => {
    console.log(e.data);
})



// Worker 内のイベントリスナーを実行する
worker.postMessage("send text to EventListener in Worker.");


// Worker を閉じる
worker.terminate();
