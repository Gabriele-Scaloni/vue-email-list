
var app = new Vue ({
el : ' #app ',
data: {
    emails: [],
    },

    methods: {
    },

    mounted: function() {

        for(let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((findEmail)=> {

                this.email = findEmail.data.response;
                this.emails.push(this.email);
           
            });
        }

    }

});