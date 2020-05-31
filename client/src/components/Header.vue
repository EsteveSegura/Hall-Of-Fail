<template>
  <div>
    <h1>Hall Of Fail</h1>
    <div v-show="readMore">
        Hace unos días surgió un bulo. Bulo que según prometía nos permitiría hackear el nombre de la cuenta de un tercero.
        <br/><br/>
        Constaba de lo siguiente, para cambiarle el nombre, por ejemplo a la cuenta de <b>@nike</b>, en instagram
        Deberíamos realizar los siguientes pasos...<br/><br/>
        1. Abrir el panel de ajustes para cambiar <b>NUESTRO NOMBRE</b><br/>
        2. Cambiar nuestro nombre por <b>@nike</b> y el texto que deseemos ponerle, por ejemplo <b>@nike adidas es mejor</b><br/>
        3. Listo... Esto en  teoría "hackearía" la cuenta de <b>@nike</b> y su nombre seria <b>adidas es mejor</b><br/><br/>
        Obviamente esto es falso... Y lo que pasa es lo siguiente, nuestra cuenta pasara a tener de nombre <b>adidas es mejor</b> <br/>
        Y no podremos cambiar el nombre hasta dentro de 1 semana o 2 semanas. Esto se ha intentado utilizar para insultar a terceros.<br/>
        Hay una lista sin fin de insultos, que se han intentado realizar <b>Soy gilipollas, me gusta 'x' droga, tengo el pene pequeño... </b><br/><br/>
        Esta web es una base de datos, por el momento "censurada" por motivos éticos, recopilando dichos insultos<br/>
        Por cada búsqueda se mostraran 30 resultados, si realizamos una búsqueda con el mismo término se mostraran 30 resultados distintos<br/>
        Y cada vez que se actualice la página, se mostraran 30 resultados distintos y nuevos.
    </div>
    <span class="what-is-that" @click="readMore ^= true">¿Qué es esto?</span>

    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  name: "Header",
  title(){
      return "Hall Of Fail";
  },
  components: {
    SearchBar
  },
  data: () => {
    return {
      readMore: false
    };
  }
};
</script>

<style scoped>
.what-is-that{
    color:#8482ec;
    text-decoration: underline;
    cursor: pointer;
}
</style>