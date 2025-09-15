<script setup lang="ts">
import { defineProps } from 'vue';

const {id} = defineProps(['id'])


</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Participant Detail</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class=" px-14 pb-10 w-full">
            <div class="">
                <p class="font-bold text-lg mb-1">Menapak Jejak Gunung Nagara Padang</p>
                <p class="text-sm text-gray-600 mb-1">Minggu, 7 September 2025</p>
                <p class="text-sm font-bold text-blue-400 mb-1">Rp80.000</p>
                <p class="text-sm font-bold mb-1">OPEN</p>
                <p class="text-sm font-semibold">Participant : 20</p>
            </div>
            <div>

                <div class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden mt-4">
                    <table class="w-full">
                        <thead class="bg-gray-100 text-gray-700 text-sm">
                            <tr>
                                <th class="px-4 py-4">No</th>
                                <th class="px-4 py-4">Nama</th>
                                <th class="px-4 py-4">No Whatsapp</th>
                                <th class="px-4 py-4">No Darurat</th>
                                <th class="px-4 py-4">Alamat</th>
                                <th class="px-4 py-4">Meet Point</th>
                                <th class="px-4 py-4">Bukti Transfer</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 text-sm">
                            <tr class=" text-center">
                                <td class="px-4 py-4">1</td>
                                <td class="px-4 py-4">Luthfi Khaeri Ihsan</td>
                                <td class="px-4 py-4">makan</td>
                                <td class="px-4 py-4">makan</td>
                                <td class="px-4 py-4">makan</td>
                                <td class="px-4 py-4">makan</td>
                                <td class="px-4 py-4"><a class="text-xs bg-blue-400 ttext-center px-4 py-1 text-white font-semibold rounded-sm">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>