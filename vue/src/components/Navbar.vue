<template>
    <nav class=" relative z-20">
  
  <div  class=" bg-gray-800 text-white p-4 md:flex md:items-center justify-between md:px-48 ">
    <div class=" md:text-2xl font-bold  text-white cursor-pointer ">
      <h1 >Photobooth</h1>
    </div>
    <span class="text-white text-4xl absolute right-6 top-5 cursor-pointer md:hidden">
      <Bars3BottomRightIcon @click="toggleMenu" v-if="!isOpen" class="block h-6 w-6" visible-="false" />
      <XMarkIcon @click="toggleMenu" v-else class="block h-6 w-6" visible="true" />
    </span>
      
    <ul class="md:flex gap-5 items-center absolute md:static bg-gray-800 w-full md:w-auto pb-10 md:pb-0 px-6 md:px-0 top-14"
    :class="[isOpen ? 'left-0' : 'left-[-100%]' ]">
      <li v-for="menuResult in menuResult" class="py-4 md:my-0 ">
          <a href="/home">{{ menuResult.Home }}</a>
          <a href="/project">{{ menuResult.Project }}</a>
          <a href="/about">{{ menuResult.About }}</a>
      </li>
    </ul>
  </div>
  
  
  </nav>
  </template>
  <script setup>
  import { Bars3BottomRightIcon, Bars3Icon,BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  
  //Burger Menu
  import {ref} from 'vue'
  
  const isOpen = ref (false);
  
  const toggleMenu =() => {
    isOpen.value = !isOpen.value;
  }
  
  const menuResult =[
    {Home: 'Home'},
    {Project: 'Project'},
    {About: 'About'},
  ]
  
  
  </script>
  
  