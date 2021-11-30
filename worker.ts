/* eslint-disable no-restricted-globals */
// set your Worker title
export const generateExampleWorkerUrl = () => {
    return URL.createObjectURL(
        new Blob([
          '(',
          function () {
           const worker : Worker = self as any;
           //↓↓↓↓↓この関数内にWorkerの処理内容を書く - Worker thread process  write here.↓↓↓↓↓
           
              
           // ホストスレッドのイベントを受け取る
           self.addEventListener("message", (e) => {
             console.log(e.data);
           })


           worker.postMessage("send message to EventListener in Host Thread.");

           // ↑↑↑↑↑この関数内にWorkerの処理内容を書く - Worker thread process  write here.↑↑↑↑↑
    
          }.toString(),
          ')()', ],
          { type: 'application/javascript' }
        )
      );
}
