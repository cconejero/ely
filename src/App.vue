<script setup>
import {Countdown} from 'vue3-flip-countdown';
</script>

<template>
  <div>
    <h1 class="mb-6 text-fuchsia-400">Ely llega a Ushuaia en:</h1>
    <Countdown deadline="2023-04-25 08:00:00"
               :labels="{days: 'Días',hours: 'Horas',minutes: 'Minutos',seconds: 'Segundos',}"
               mainColor="#e879f9"
               secondFlipColor="#b472b8"
               labelColor="#e879f9"
    />
  </div>
</template>
