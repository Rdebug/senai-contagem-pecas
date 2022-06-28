const date = new Date;
export class Data{
    formatarData(data){
        let split = data.split('-');
        if(split[1].length < 2){
            split[1] = `0${split[1]}`;
        }
        let dataFormatada = `${split[0]}-${split[1]}-${split[2]}`;
        return new Date(dataFormatada);
    }
    
    verificarDataPosterior(data){
        let dataInformada = this.formatarData(data)
        let dataAtual = this.formatarData(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

        if(+dataInformada >= +dataAtual){
            return true;
        }else{
            return false;
        }
    }
}  