import { PostData } from "./helper";

export class Service {
  getData(): Promise<number> {
    return new Promise((): number => {
      return Math.random() * 100;
    });
  }

  postData(myFunc: () => PostData) {
    const data = myFunc();
    // post data
  }
}
