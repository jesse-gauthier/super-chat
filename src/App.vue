<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header
      class="bg-jadeGreen h-screen w-[15%] max-w-[700px] p-8 flex flex-col gap-5"
    >
      <div id="brand" class="mb-5">
        <h2 class="font-primary text-4xl text-white font-bold">SuperChat</h2>
      </div>
      <nav>
        <ul>
          <li><router-link class="">DashBoard</router-link></li>
          <li>
            <router-link>Chat History</router-link>
          </li>
          <li>
            <router-link>analytics</router-link>
          </li>
          <li>
            <router-link>Users</router-link>
          </li>
          <li>
            <router-link>Settings</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
