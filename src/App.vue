<script setup>
import {Countdown} from 'vue3-flip-countdown';
</script>

<template>
  <div>
    <h1 class="mb-6 text-gray-300">Moncho llega en:</h1>
    <Countdown deadline="2022-11-19 16:55:00"
               :labels="{days: 'Días',hours: 'Horas',minutes: 'Minutos',seconds: 'Segundos',}"
               mainColor="#aaaaaa"
               secondFlipColor="#999999"
               labelColor="#aaaaaa"
    />
  </div>
</template>
