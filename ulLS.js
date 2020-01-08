class LS{
    loeYlesanded(){
        let ylesanded;

        if(localStorage.getItem('ylesanded' ) === null){
            ylesanded = [];
        } else {
            ylesanded = JSON.parse(localStorage.getItem('ylesanded'));
        }
        return ylesanded;
    };
    
    salvestaYlesanne(y){
        const ylesanded = this.loeYlesanded();
        ylesanded.push(y);

        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
    };

    kustutaYlesanneLS(task){
        const ylesanded = this.loeYlesanded();
        ylesanded.forEach(function(ylesanne, index){

            if(ylesanne.task === task){
                ylesanded.splice(index, 1);
            }
        });
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
        return true;
    }
}