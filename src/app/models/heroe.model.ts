

export class HeroeModel {
    id: string;
    nombre: string;
    poder: string;
    vivo: boolean;

    consturctor() {
        this.vivo = true;
    }
}