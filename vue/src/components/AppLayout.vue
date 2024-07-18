<template>

    <!-- Navbar -->

    <router-view></router-view>
  
    <body class="bg-[#edf3ff] h-screen">

    <!-- HomeHeader --> 

    <router-view class="view two" name="homeRouter"></router-view>

    <div  class="p-4  md:px-48">
        <router-view class="view two" name="projectRouter"></router-view>
        <router-view class="view three" name="aboutRouter"></router-view>
    </div>
    
</body>

 
</template>
