import Route from '@ember/routing/route';

export default Route.extend({
    model() {

        let usuario = this.get('store').createRecord('usuario',{
            email: null,
            senha: null,
            Foto : 'https://media.licdn.com/dms/image/C4E03AQEGo9b5OBYLMQ/profile-displayphoto-shrink_100_100/0?e=1528246800&v=beta&t=ZM15KzQauAfgGGDikH0XwU45NoVOOt8OAK1zcwFW7-I',
            TipoUsuario : 'Voluntario',
            voluntario:{
                nome : null,
                // dataNasc: '1993-03-30',
                cpf: '415.213.398-80',
                bio: 'Programador',
                endereco : {
                    logradouro : null,
                    numero : null,
                    bairro : null,
                    cidade : null,
                    estado : null,
                }
            }
        });

        return {
            usuario: usuario,
            // endereco: this.get('store').createRecord('endereco'),
        }

    }
});
