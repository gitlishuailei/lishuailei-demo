<template>
    <div class="home">
        <Header-com/>
       <div class="main">
           <content-com/>
       </div>
    </div>
</template>

<script>
import Header from './components/header';
import content from './components/content';
export default {
    components: {
        "Header-com":Header,
        "content-com":content
    }
}
</script>

<style scoped>
    .home>.main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>