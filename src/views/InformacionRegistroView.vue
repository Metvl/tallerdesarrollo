<template>
    <div class="container">
        <h1>Informacion registros </h1>
        <table>
            <thead>
                <tr>
                    <th class="cabeza">ID</th>
                    <th class="cabeza">Correo</th>
                    <th class="cabeza">Rut</th>
                    <th class="cabeza">Teléfono</th>
                    <th class="cabeza">Rol</th>
                    <th class="cabeza">Carrera</th>
                    <th class="cabeza">Contraseña</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in registros" :key="item.id">
                    <th>{{item.id}}</th>
                    <th>{{item.correo}}</th>
                    <th>{{item.rut}}</th>
                    <th>{{item.telefono}}</th>
                    <th>{{item.rol}}</th>
                    <th>
                        <span v-for="(carr, index) in item.carrera" :key="index">
                            {{
                                item.carrera.length === index+1 ? carr : carr + ', '
                            }}
                        </span>
                    </th>
                    <th>{{item.password}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['registros']),
    }
}
</script>

<style scoped>
body{
    font-family: Ubuntu,'Helvetica Neue';
}
.container{
    display: flex;
    flex-direction: column;
}
table{
    border: 1px solid black;
}
.cabeza{
    margin-bottom: 15px;
    border: 1px solid black;
}
</style>