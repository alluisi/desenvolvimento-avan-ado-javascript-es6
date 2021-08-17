var obj = {
    showContext: function showContext() {
        // console.log(this); // { showContext: [Function: showContext], log: [Function: log] }
        // this.log('teste'); // teste
        setTimeout(() => {
            this.log('after 1000ms'); // after 1000ms
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();