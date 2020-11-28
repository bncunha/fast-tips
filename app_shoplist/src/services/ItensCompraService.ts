import { ItemCompra } from "../models/ItemCompra.";
import { Api } from "./api";

export class ItensCompraService {

  private key = Api.KEYS.ITEM_COMPRA;
  async getItems() {
    return await Api.get(this.key) || [];
  }

  async addItem(item: ItemCompra) {
    const listaCompras = await this.getItems();
    listaCompras.push(item);
    Api.save(this.key, listaCompras);
    return item;
  }

  async deleteITem(id: string) {
    const listaCompras = await this.getItems();
    const listaSemItem = listaCompras.filter((item: any) => item.id != id);
    Api.save(this.key, listaSemItem);
  }
}