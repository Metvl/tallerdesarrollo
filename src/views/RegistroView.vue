<template>
<form @submit.prevent="procesarFormulario">
    <div class="container">
        <h1 class="titulo">Regístrate</h1>
        <nav class="caja">
            <input type="text" placeholder="Correo" v-model.trim="registro.correo">
        </nav>
        <nav  class="caja">
            <input type="text" placeholder="Rut" v-model.trim="registro.rut">
        </nav>
        <nav  class="caja">
            <input type="text" placeholder="Teléfono" v-model.trim="registro.telefono">
        </nav>
        <h4>ROL</h4>
        <nav class="caja radio">
            <div class="inputradio">
                <input type="radio" id="radio-estudiante" value="estudiante" v-model="registro.rol">
                <label for="radio-estudiante">Estudiante</label>
            </div>
            <div class="inputradio">
                <input type="radio" id="radio-oferente" value="oferente" v-model="registro.rol">
                <label for="radio-oferente">Oferente</label>
            </div>
            <div class="inputradio">
                <input type="radio" id="radio-encargado" value="encargado" v-model="registro.rol">
                <label for="radio-encargado">Encargado</label>
            </div>
        </nav>
        <h4>Carrera</h4>
        <nav  class="caja radio">
            <div class="inputradio">
                <input type="checkbox" id="radio-ieci" v-model="registro.carrera" value="IECI">
                <label for="radio-ieci">IECI</label>
            </div>
            <div class="inputradio">
                <input type="checkbox" id="checkbox-icinf" v-model="registro.carrera" value="ICINF">
                <label for="checkbox-icinf">ICINF</label>
            </div>
            <div class="inputradio">
                <input type="checkbox" id="radio-cpa" v-model="registro.carrera" value="CPA">
                <label for="checkbox-cpa">CPA</label>
            </div>
            <div class="inputradio">
                <input type="checkbox" id="radio-ico" v-model="registro.carrera" value="ICO">
                <label for="checkbox-ico">ICO</label>
            </div>
        </nav>
        <nav  class="caja">
            <input type="password" placeholder="Contraseña" v-model.trim="registro.password">
        </nav>
        <button type="submit" :disabled="bloquear">Registrate</button>
    </div>
</form>
</template>

<script>
import {mapActions} from 'vuex';
const { nanoid } = require('nanoid');



export default {
    name: 'RegistroView',
    components:{
    },
    data() {
        return {
            registro:{
                id: '',
                correo: '',
                rut: '',
                telefono: '',
                rol: '',
                carrera: [],
                password: '',
            },
        }
    },
    methods:{
        ...mapActions(['setRegistros']),
        procesarFormulario(){
            if(this.registro.correo.trim()=== ""){
                console.log('Campo vacío');
                return
            }
            /* GENERAR ID*/
            this.registro.id = nanoid(25);
            console.log(this.registro.id);
            /*ESPACIO PARA ENVIAR LOS DATOS*/
            this.setRegistros(this.registro);
            this.registro={
                id: '',
                correo: '',
                rut: '',
                telefono: '',
                rol: '',
                carrera: [],
                password: '',
            };
            alert('Enviado con exito');
        }
    },
    computed:{
        bloquear(){
            return this.registro.correo.trim() === "" ||this.registro.rut.trim()=== "" || this.registro.telefono.trim()==="" || this.registro.rol.trim()===""   || this.registro.carrera.length===0  || this.registro.password.trim()==="" ? true :false 
        }
    }
}
</script>

<style>
    .container{
        font-family: Ubuntu,'Helvetica Neue';
    }
    .caja{
        padding: 0px;
        margin: 0px 0px 15px 0px;
    }
    .radio{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .inputradio{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 5px 0 5px;
    }
</style>