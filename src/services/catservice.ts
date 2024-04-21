import { Cat } from "@/types";
import { BaseService } from "./baseservice";
import { Endpoints } from "./endpoints";

export class CatService extends BaseService {
    async getCats(): Promise<Cat[]> {
        const response = await fetch(Endpoints.cats.list, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "DEMO-API-KEY"
        }
      });
      return await response.json();
    }
}