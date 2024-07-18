<template>

    <!-- Navbar -->

    <router-view></router-view>
  
    <body class="bg-[#edf3ff] h-screen">

    <!-- HomeHeader --> 

    <router-view class="view two" name="homeRouter"></router-view>

   
        <router-view class="view two" name="projectRouter"></router-view>
        <router-view class="view three" name="aboutRouter"></router-view>
   
    
</body>

 
</template>
