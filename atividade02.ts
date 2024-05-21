

class Setup {
    static resolucao: string;
    static dificuldade: string;
    static raytracing: boolean;

    static setResolucao(resolucao: string): void {
        this.resolucao = resolucao;
    }

    static setDificuldade(dificuldade: string): void {
        this.dificuldade = dificuldade;
    }

    static setRaytracing(raytracing: boolean): void {
        this.raytracing = raytracing;
        this.raytracing == raytracing
        
    }

    static listarInformacoes(): void {
        console.log(`Resolução: ${this.resolucao}`);
        console.log(`Dificuldade: ${this.dificuldade}`);
        console.log(`Raytracing: ${this.raytracing ? "Ativado" : "Desativado"}`);
    }
}














class Monstro {
    constructor(
        public nome: string,
        public forca: number,
        public defesa: number,
        public raridade: string
    ) {}
}
class MonstroDatabase {
    static listaMonstros: Monstro[] = [];

    static adicionarMonstro(monstro: Monstro): void {
        const existe = this.listaMonstros.some(m => m.nome === monstro.nome);
        if (!existe) {
            this.listaMonstros.push(monstro);
            console.log(`Monstro ${monstro.nome} adicionado à database.`);
        } else {
            console.log(`Monstro ${monstro.nome} já existe na database.`);
        }
    }

    static exibirDatabase(): void {
        console.log("Lista de monstros na database:");
        this.listaMonstros.forEach(monstro => console.log(monstro.nome));
    }

    static obterMonstro(nome: string): { nome: string, raridade: string } | null {
        const monstro = this.listaMonstros.find(m => m.nome === nome);
        if (monstro) {
            return { nome: monstro.nome, raridade: monstro.raridade };
        } else {
            console.log(`Monstro ${nome} não encontrado na database.`);
            return null;
        }
    }
}












class Personagem {
    nome: string;
    hp: number;
    mp: number;
    forca: number;
    defesa: number;
    agilidade: number;

    static MAGO = "Mago";
    static GUERREIRO = "Guerreiro";
    static ASSASSINO = "Assassino";
    static ARQUEIRO = "Arqueiro";

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.hp = 150;
        this.mp = 100;
        this.forca = 160;
        this.defesa = 140;
        this.agilidade = 50;

        this.aplicarBuff(tipo);
    }

    private aplicarBuff(tipo: string): void {
        switch (tipo) {
            case Personagem.MAGO:
                this.mp += 40;
                break;
            case Personagem.GUERREIRO:
                this.hp += 35;
                this.forca += 17;
                break;
            case Personagem.ASSASSINO:
                this.agilidade += 16;
                break;
            case Personagem.ARQUEIRO:
                this.agilidade += 5;
                this.forca += 8;
                this.hp += 9;
                break;
            default:
                console.log(`Tipo de personagem desconhecido: ${tipo}`);
                break;
        }
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`HP: ${this.hp}`);
        console.log(`MP: ${this.mp}`);
        console.log(`Força: ${this.forca}`);
        console.log(`Defesa: ${this.defesa}`);
        console.log(`Agilidade: ${this.agilidade}`);
    }
}