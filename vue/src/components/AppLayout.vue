<template>

    <!-- Navbar -->

    <router-view></router-view>
  
    <body class="bg-[#edf3ff] h-screen">

    <!-- HomeHeader --> 
    <section id="home">
    <router-view class="view two" name="homeRouter"></router-view>
  </section>
    <section id="project">
        <router-view class="view two" name="projectRouter"></router-view>
    </section>
    <section id="about">
        <router-view class="view three" name="aboutRouter"></router-view>
    </section>
    
</body>

 
</template>
