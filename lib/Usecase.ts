import { processing } from "./helper";
import { Service } from "./Service";

export class Usecase {
  private service: Service;
  constructor(service: Service) {
    this.service = service;
  }

  async postModNumber(num: number) {
    let data = await this.service.getData();
    data = data % num;
    this.service.postData(processing(data, num));
  }
}
